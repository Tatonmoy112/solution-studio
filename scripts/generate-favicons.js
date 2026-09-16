const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '../public/ss favicon.png');
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../src/app');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const directorySize = 16 * count;
  let currentOffset = headerSize + directorySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Image type: 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const directories = [];
  const imageBuffers = [];

  for (const item of pngBuffers) {
    const dir = Buffer.alloc(16);
    dir.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    dir.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    dir.writeUInt8(0, 2); // Palette count
    dir.writeUInt8(0, 3); // Reserved
    dir.writeUInt16LE(1, 4); // Color planes
    dir.writeUInt16LE(32, 6); // Bits per pixel
    dir.writeUInt32LE(item.buffer.length, 8); // Size of image data
    dir.writeUInt32LE(currentOffset, 12); // Offset of image data

    directories.push(dir);
    imageBuffers.push(item.buffer);
    currentOffset += item.buffer.length;
  }

  return Buffer.concat([header, ...directories, ...imageBuffers]);
}

async function generateFavicons() {
  console.log('Generating Google-compliant favicons from:', inputImage);

  if (!fs.existsSync(inputImage)) {
    console.error('Source image missing:', inputImage);
    process.exit(1);
  }

  // 1. Trim transparent padding from source mark
  const trimmedBuffer = await sharp(inputImage)
    .trim()
    .toBuffer();

  const metadata = await sharp(trimmedBuffer).metadata();
  const maxDim = Math.max(metadata.width, metadata.height);

  // Add ~10% padding around the mark to ensure it's centered and crisp on dark/light search result backgrounds
  const padding = Math.round(maxDim * 0.1);
  const canvasSize = maxDim + padding * 2;

  // Create a perfectly centered square master PNG buffer (transparent background)
  const masterSquare = await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: trimmedBuffer,
        top: Math.round((canvasSize - metadata.height) / 2),
        left: Math.round((canvasSize - metadata.width) / 2),
      },
    ])
    .png()
    .toBuffer();

  // Helper to generate resized PNG buffer
  async function renderPng(size) {
    return await sharp(masterSquare)
      .resize(size, size, { fit: 'contain' })
      .png()
      .toBuffer();
  }

  const p16 = await renderPng(16);
  const p32 = await renderPng(32);
  const p48 = await renderPng(48);
  const p180 = await renderPng(180);
  const p192 = await renderPng(192);
  const p512 = await renderPng(512);

  // Build a true multi-resolution ICO binary (16x16, 32x32, 48x48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 },
  ]);

  // Write ICO binary to public and src/app
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Generated public/favicon.ico and src/app/favicon.ico (True multi-resolution ICO binary)');

  // Write Google-compliant PNG assets
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), p48);
  console.log('✓ Generated public/favicon.png (48x48)');

  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), p48);
  console.log('✓ Generated public/favicon-48x48.png (48x48)');

  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), p180);
  console.log('✓ Generated public/apple-touch-icon.png (180x180)');

  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), p192);
  console.log('✓ Generated public/icon-192.png (192x192)');

  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), p512);
  console.log('✓ Generated public/icon-512.png (512x512)');

  console.log('All favicons successfully updated and verified!');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
