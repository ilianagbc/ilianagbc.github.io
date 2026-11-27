const fs = require('fs');
const sharp = require('sharp');

// Create high-fidelity SVG matching the exact logo in Photos_SfUp9jM7tL.png
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="50 42 790 216" width="790" height="216">
  <defs>
    <!-- Soft realistic drop shadow for icon elements -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="4" stdDeviation="3.5" flood-color="#021c10" flood-opacity="0.22" />
    </filter>

    <!-- Emerald to Forest Green Gradient for Bars -->
    <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e8954" />
      <stop offset="60%" stop-color="#136b3f" />
      <stop offset="100%" stop-color="#084728" />
    </linearGradient>

    <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#24975e" />
      <stop offset="50%" stop-color="#147243" />
      <stop offset="100%" stop-color="#084728" />
    </linearGradient>

    <linearGradient id="barGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2ca768" />
      <stop offset="45%" stop-color="#177a47" />
      <stop offset="100%" stop-color="#094a2b" />
    </linearGradient>

    <linearGradient id="barGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#21935b" />
      <stop offset="55%" stop-color="#136b3f" />
      <stop offset="100%" stop-color="#084728" />
    </linearGradient>

    <!-- Corner brackets gradient -->
    <linearGradient id="bracketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e6239" />
      <stop offset="100%" stop-color="#063e23" />
    </linearGradient>
  </defs>

  <g id="logo-icon" filter="url(#shadow)">
    <!-- 4 Corner Brackets (Viewfinder) -->
    <!-- Top-Left -->
    <path d="M 68 106 L 68 60 L 118 60" fill="none" stroke="url(#bracketGrad)" stroke-width="11" stroke-linecap="square" />
    <!-- Top-Right -->
    <path d="M 202 60 L 252 60 L 252 106" fill="none" stroke="url(#bracketGrad)" stroke-width="11" stroke-linecap="square" />
    <!-- Bottom-Left -->
    <path d="M 68 198 L 68 242 L 118 242" fill="none" stroke="url(#bracketGrad)" stroke-width="11" stroke-linecap="square" />
    <!-- Bottom-Right -->
    <path d="M 202 242 L 252 242 L 252 198" fill="none" stroke="url(#bracketGrad)" stroke-width="11" stroke-linecap="square" />

    <!-- 4 Dynamic Energy Simulation Bars -->
    <!-- Bar 1 (low) -->
    <rect x="94" y="160" width="23" height="58" rx="2" fill="url(#barGradient1)" />
    <!-- Bar 2 (medium-high) -->
    <rect x="129" y="112" width="23" height="106" rx="2" fill="url(#barGradient2)" />
    <!-- Bar 3 (highest peak) -->
    <rect x="164" y="74" width="23" height="144" rx="2" fill="url(#barGradient3)" />
    <!-- Bar 4 (mid) -->
    <rect x="199" y="138" width="23" height="80" rx="2" fill="url(#barGradient4)" />
  </g>

  <!-- Vertical Divider Line -->
  <line x1="298" y1="56" x2="298" y2="246" stroke="#064326" stroke-width="4.5" stroke-linecap="round" />

  <!-- Typography: IBNB -->
  <text x="338" y="174" 
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        font-weight="900" 
        font-size="140" 
        letter-spacing="1px" 
        fill="#043c22">IBNB</text>

  <!-- Typography: Green Building Energy Analysis -->
  <text x="342" y="222" 
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        font-weight="700" 
        font-size="30.5" 
        letter-spacing="0.5px" 
        fill="#074527">Green Building Energy Analysis</text>
</svg>`;

// Favicon SVG (the icon square mark)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="56 48 208 206" width="256" height="256">
  <defs>
    <filter id="favShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="4" stdDeviation="3" flood-color="#021c10" flood-opacity="0.25" />
    </filter>
    <linearGradient id="favBar1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e8954" /><stop offset="100%" stop-color="#084728" />
    </linearGradient>
    <linearGradient id="favBar2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#24975e" /><stop offset="100%" stop-color="#084728" />
    </linearGradient>
    <linearGradient id="favBar3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2ca768" /><stop offset="100%" stop-color="#094a2b" />
    </linearGradient>
    <linearGradient id="favBar4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#21935b" /><stop offset="100%" stop-color="#084728" />
    </linearGradient>
    <linearGradient id="favBracket" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e6239" /><stop offset="100%" stop-color="#063e23" />
    </linearGradient>
  </defs>
  <g filter="url(#favShadow)">
    <path d="M 68 106 L 68 60 L 118 60" fill="none" stroke="url(#favBracket)" stroke-width="11" stroke-linecap="square" />
    <path d="M 202 60 L 252 60 L 252 106" fill="none" stroke="url(#favBracket)" stroke-width="11" stroke-linecap="square" />
    <path d="M 68 198 L 68 242 L 118 242" fill="none" stroke="url(#favBracket)" stroke-width="11" stroke-linecap="square" />
    <path d="M 202 242 L 252 242 L 252 198" fill="none" stroke="url(#favBracket)" stroke-width="11" stroke-linecap="square" />

    <rect x="94" y="160" width="23" height="58" rx="2" fill="url(#favBar1)" />
    <rect x="129" y="112" width="23" height="106" rx="2" fill="url(#favBar2)" />
    <rect x="164" y="74" width="23" height="144" rx="2" fill="url(#favBar3)" />
    <rect x="199" y="138" width="23" height="80" rx="2" fill="url(#favBar4)" />
  </g>
</svg>`;

// Save SVG
fs.writeFileSync('public/logo.svg', svgContent, 'utf8');
fs.writeFileSync('public/favicon.svg', faviconSvg, 'utf8');

async function render() {
  await sharp(Buffer.from(svgContent))
    .resize(1580, 432)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile('public/logo.png');

  await sharp(Buffer.from(faviconSvg))
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile('public/favicon.png');

  if (fs.existsSync('dist')) {
    fs.copyFileSync('public/logo.svg', 'dist/logo.svg');
    fs.copyFileSync('public/logo.png', 'dist/logo.png');
    fs.copyFileSync('public/favicon.svg', 'dist/favicon.svg');
    fs.copyFileSync('public/favicon.png', 'dist/favicon.png');
  }
  console.log('All logo and favicon assets rendered successfully.');
}

render().catch(console.error);
