const sharp = require('sharp');
const fs = require('fs');

async function createFaviconSvg() {
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="128" fill="#0B131E" />
  <g transform="translate(101, 106) scale(1)">
    <defs>
      <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path id="hook-path" d="M 255,50 L 135,50 A 50 50 0 0 0 85,100 A 50 50 0 0 0 135,150 L 205,150" fill="none" />
      <mask id="hollow-mask">
        <use href="#hook-path" stroke="white" stroke-width="18" fill="none" stroke-linecap="butt" />
        <use href="#hook-path" stroke="black" stroke-width="10" fill="none" stroke-linecap="butt" />
        <polygon points="266,30 280,30 280,70 226,70" fill="black" />
        <polygon points="44,270 30,270 30,230 84,230" fill="black" />
        <polygon points="176,130 230,130 230,170 216,170" fill="black" />
        <polygon points="134,170 80,170 80,130 94,130" fill="black" />
      </mask>
    </defs>
    <g id="s-symbol">
      <g stroke="#00f3ff" fill="none" stroke-linecap="round" filter="url(#glow-blur)">
        <use href="#hook-path" stroke-width="16" opacity="0.4" />
        <use href="#hook-path" stroke-width="16" opacity="0.4" transform="rotate(180, 155, 150)" />
      </g>
      <g stroke="#00f3ff" fill="none" stroke-linecap="butt" opacity="0.12">
        <use href="#hook-path" stroke-width="10" />
        <use href="#hook-path" stroke-width="10" transform="rotate(180, 155, 150)" />
      </g>
      <g mask="url(#hollow-mask)">
        <use href="#hook-path" stroke="#00f3ff" stroke-width="18" fill="none" stroke-linecap="butt" />
        <use href="#hook-path" stroke="#00f3ff" stroke-width="18" fill="none" stroke-linecap="butt" transform="rotate(180, 155, 150)" />
      </g>
    </g>
  </g>
</svg>`;

  fs.writeFileSync('public/favicon.svg', darkSvg);
  console.log('Created public/favicon.svg with dark squircle background');
}

createFaviconSvg().catch(console.error);
