import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function optimizeImages() {
  console.log('Starting image optimization...');
  
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const imageFiles = [];
  
  function findImages(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !filePath.includes('compressed')) {
        findImages(filePath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        imageFiles.push(filePath);
      }
    }
  }
  
  findImages('assets/images');
  
  console.log(`Found ${imageFiles.length} images to optimize`);
  
  let processed = 0;
  let totalSaved = 0;
  
  for (const imagePath of imageFiles) {
    try {
      const originalSize = fs.statSync(imagePath).size;
      const ext = path.extname(imagePath).toLowerCase();
      const nameWithoutExt = path.basename(imagePath, ext);
      const dir = path.dirname(imagePath);
      
      // Create backup
      const backupPath = imagePath + '.backup';
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(imagePath, backupPath);
      }
      
      // Optimize based on file type
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(imagePath)
          .jpeg({ quality: 80, progressive: true })
          .toFile(imagePath);
      } else if (ext === '.png') {
        await sharp(imagePath)
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(imagePath);
      }
      
      const optimizedSize = fs.statSync(imagePath).size;
      const saved = originalSize - optimizedSize;
      totalSaved += saved;
      
      processed++;
      console.log(`Optimized ${processed}/${imageFiles.length}: ${path.relative('assets/images', imagePath)} (${formatBytes(originalSize)} → ${formatBytes(optimizedSize)})`);
      
    } catch (error) {
      console.error(`Error optimizing ${imagePath}:`, error.message);
    }
  }
  
  console.log(`\nOptimization completed!`);
  console.log(`Processed: ${processed} images`);
  console.log(`Total space saved: ${formatBytes(totalSaved)}`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeImages().catch(console.error);
}
