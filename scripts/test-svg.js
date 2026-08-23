const sharp = require('sharp');
const fs = require('fs');

async function main() {
  const svg = fs.readFileSync('public/ss_logo_icon.svg', 'utf8');
  // strip filter and mask to see what a simple SVG renderer sees
  const simpleSvg = svg.replace(/filter="url\(#glow-blur\)"/g, '').replace(/mask="url\(#hollow-mask\)"/g, '');
  
  const { data } = await sharp(Buffer.from(simpleSvg)).resize(48, 48).raw().toBuffer({ resolveWithObject: true });
  let visiblePixels = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 10) visiblePixels++;
  }
  console.log('Visible pixels in unmasked SVG at 48x48:', visiblePixels, 'out of', 48 * 48);
}

main().catch(console.error);
