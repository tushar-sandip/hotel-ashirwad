import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function replaceImages() {
  console.log('Replacing original images with compressed versions...');
  
  const compressedDir = 'assets/images/compressed';
  const originalDir = 'assets/images';
  
  // Get all compressed images
  function findCompressedImages(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        files.push(...findCompressedImages(itemPath));
      } else if (path.extname(item).toLowerCase() === '.jpg' || 
                 path.extname(item).toLowerCase() === '.jpeg' || 
                 path.extname(item).toLowerCase() === '.png') {
        files.push(itemPath);
      }
    }
    
    return files;
  }
  
  const compressedImages = findCompressedImages(compressedDir);
  console.log(`Found ${compressedImages.length} compressed images to replace`);
  
  let replaced = 0;
  let totalSaved = 0;
  
  for (const compressedPath of compressedImages) {
    try {
      // Get relative path from compressed directory
      const relativePath = path.relative(compressedDir, compressedPath);
      const originalPath = path.join(originalDir, relativePath);
      
      // Check if original file exists
      if (fs.existsSync(originalPath)) {
        // Get file sizes
        const originalSize = fs.statSync(originalPath).size;
        const compressedSize = fs.statSync(compressedPath).size;
        
        // Only replace if compressed version is smaller
        if (compressedSize < originalSize) {
          // Backup original
          const backupPath = originalPath + '.backup';
          fs.copyFileSync(originalPath, backupPath);
          
          // Replace with compressed version
          fs.copyFileSync(compressedPath, originalPath);
          
          const saved = originalSize - compressedSize;
          totalSaved += saved;
          replaced++;
          
          console.log(`Replaced: ${relativePath} (${formatBytes(originalSize)} → ${formatBytes(compressedSize)}, saved: ${formatBytes(saved)})`);
        } else {
          console.log(`Skipped: ${relativePath} (compressed version not smaller)`);
        }
      } else {
        console.log(`Original not found: ${relativePath}`);
      }
    } catch (error) {
      console.error(`Error replacing ${compressedPath}:`, error.message);
    }
  }
  
  console.log(`\nReplacement completed!`);
  console.log(`Replaced: ${replaced} images`);
  console.log(`Total space saved: ${formatBytes(totalSaved)}`);
  console.log(`Original images backed up with .backup extension`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

replaceImages().catch(console.error);
