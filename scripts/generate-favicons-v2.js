const sharp = require('sharp');
const fs = require('fs');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const directorySize = 16 * count;
  let currentOffset = headerSize + directorySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const directories = [];
  const imageBuffers = [];

  for (const item of pngBuffers) {
    const dir = Buffer.alloc(16);
    dir.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    dir.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    dir.writeUInt8(0, 2);
    dir.writeUInt8(0, 3);
    dir.writeUInt16LE(1, 4);
    dir.writeUInt16LE(32, 6);
    dir.writeUInt32LE(item.buffer.length, 8);
    dir.writeUInt32LE(currentOffset, 12);

    directories.push(dir);
    imageBuffers.push(item.buffer);
    currentOffset += item.buffer.length;
  }

  return Buffer.concat([header, ...directories, ...imageBuffers]);
}

async function buildAllFavicons() {
  const svgContent = fs.readFileSync('public/favicon.svg');

  async function generatePng(size) {
    return await sharp(svgContent)
      .resize(size, size)
      .png()
      .toBuffer();
  }

  const p16 = await generatePng(16);
  const p32 = await generatePng(32);
  const p48 = await generatePng(48);
  const p180 = await generatePng(180);
  const p192 = await generatePng(192);
  const p512 = await generatePng(512);

  const icoBuf = createIco([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 }
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuf);
  fs.writeFileSync('src/app/favicon.ico', icoBuf);

  fs.writeFileSync('public/favicon-16x16.png', p16);
  fs.writeFileSync('public/favicon-32x32.png', p32);
  fs.writeFileSync('public/favicon-48x48.png', p48);
  fs.writeFileSync('public/apple-touch-icon.png', p180);
  fs.writeFileSync('public/icon-192.png', p192);
  fs.writeFileSync('public/icon-512.png', p512);

  fs.writeFileSync('src/app/icon.png', p512);
  fs.writeFileSync('src/app/apple-icon.png', p180);

  console.log('Successfully generated all brand favicons from dark squircle SVG!');
}

buildAllFavicons().catch(console.error);
