import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function compressImages() {
  console.log('Starting image compression with Sharp...');
  
  // Create compressed directories
  const compressedDir = 'assets/images/compressed';
  const webpDir = 'assets/images/compressed/webp';
  
  if (!fs.existsSync(compressedDir)) {
    fs.mkdirSync(compressedDir, { recursive: true });
  }
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true });
  }

  // Get all image files
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const imageFiles = [];
  
  function findImages(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        imageFiles.push(filePath);
      }
    }
  }
  
  findImages('assets/images');
  
  console.log(`Found ${imageFiles.length} images to compress`);
  
  let processed = 0;
  let totalSaved = 0;
  
  for (const imagePath of imageFiles) {
    try {
      const relativePath = path.relative('assets/images', imagePath);
      const ext = path.extname(imagePath).toLowerCase();
      const nameWithoutExt = path.basename(imagePath, ext);
      const dir = path.dirname(relativePath);
      
      // Create output directories
      const outputDir = path.join(compressedDir, dir);
      const webpOutputDir = path.join(webpDir, dir);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      if (!fs.existsSync(webpOutputDir)) {
        fs.mkdirSync(webpOutputDir, { recursive: true });
      }
      
      // Get original file size
      const originalSize = fs.statSync(imagePath).size;
      
      // Compress original format
      let compressedPath;
      if (ext === '.jpg' || ext === '.jpeg') {
        compressedPath = path.join(outputDir, `${nameWithoutExt}.jpg`);
        await sharp(imagePath)
          .jpeg({ quality: 80, progressive: true })
          .toFile(compressedPath);
      } else if (ext === '.png') {
        compressedPath = path.join(outputDir, `${nameWithoutExt}.png`);
        await sharp(imagePath)
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(compressedPath);
      }
      
      // Convert to WebP
      const webpPath = path.join(webpOutputDir, `${nameWithoutExt}.webp`);
      await sharp(imagePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      // Calculate savings
      const compressedSize = fs.statSync(compressedPath).size;
      const webpSize = fs.statSync(webpPath).size;
      const saved = originalSize - Math.min(compressedSize, webpSize);
      totalSaved += saved;
      
      processed++;
      console.log(`Processed ${processed}/${imageFiles.length}: ${relativePath} (${formatBytes(originalSize)} → ${formatBytes(compressedSize)} / ${formatBytes(webpSize)})`);
      
    } catch (error) {
      console.error(`Error processing ${imagePath}:`, error.message);
    }
  }
  
  console.log(`\nCompression completed!`);
  console.log(`Processed: ${processed} images`);
  console.log(`Total space saved: ${formatBytes(totalSaved)}`);
  console.log(`Compressed images saved to: ${compressedDir}`);
  console.log(`WebP images saved to: ${webpDir}`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

compressImages().catch(console.error);
