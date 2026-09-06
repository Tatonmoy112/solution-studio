const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '../public/ss favicon.png');
const publicDir = path.join(__dirname, '../public');

async function generateFavicons() {
  console.log('Generating Google-compliant favicons from:', inputImage);

  if (!fs.existsSync(inputImage)) {
    console.error('Source image missing:', inputImage);
    process.exit(1);
  }

  // 1. Generate 48x48 favicon.png (Google recommended size multiple of 48)
  await sharp(inputImage)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('✓ Generated public/favicon.png (48x48)');

  await sharp(inputImage)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));
  console.log('✓ Generated public/favicon-48x48.png');

  // 2. Generate 180x180 apple-touch-icon.png
  await sharp(inputImage)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Generated public/apple-touch-icon.png (180x180)');

  // 3. Generate 192x192 icon-192.png (Android & PWA Manifest)
  await sharp(inputImage)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Generated public/icon-192.png (192x192)');

  // 4. Generate 512x512 icon-512.png (High-Res & PWA Manifest)
  await sharp(inputImage)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Generated public/icon-512.png (512x512)');

  // 5. Generate 48x48 favicon.ico fallback
  await sharp(inputImage)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('✓ Generated public/favicon.ico (48x48 fallback)');

  console.log('All favicons generated successfully!');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
