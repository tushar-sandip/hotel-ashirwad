import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

async function compressImages() {
  console.log('Starting image compression...');
  
  // Create compressed directories
  const compressedDir = 'assets/images/compressed';
  if (!fs.existsSync(compressedDir)) {
    fs.mkdirSync(compressedDir, { recursive: true });
  }

  // Compress JPG/JPEG images
  console.log('Compressing JPG/JPEG images...');
  await imagemin(['assets/images/**/*.{jpg,jpeg}'], {
    destination: compressedDir,
    plugins: [
      imageminMozjpeg({
        quality: 80,
        progressive: true
      })
    ]
  });

  // Compress PNG images
  console.log('Compressing PNG images...');
  await imagemin(['assets/images/**/*.png'], {
    destination: compressedDir,
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  // Convert to WebP format
  console.log('Converting to WebP format...');
  await imagemin(['assets/images/**/*.{jpg,jpeg,png}'], {
    destination: compressedDir + '/webp',
    plugins: [
      imageminWebp({
        quality: 80
      })
    ]
  });

  console.log('Image compression completed!');
  console.log('Compressed images saved to:', compressedDir);
}

compressImages().catch(console.error);
