#!/usr/bin/env node

/**
 * SVG to PNG/WEBP Conversion Script
 * Converts OG image SVGs to PNG and WEBP formats at multiple sizes
 * 
 * Usage: npm install sharp && node scripts/convert-og-images.js
 */

const path = require('path');
const fs = require('fs');

async function convertOGImages() {
  try {
    // Attempt to load sharp; if not installed, provide instructions
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.error('❌ sharp is not installed.');
      console.log('\nTo install sharp, run:');
      console.log('  npm install --save-dev sharp\n');
      console.log('Then run this script again:\n');
      console.log('  node scripts/convert-og-images.js\n');
      process.exit(1);
    }

    const ogDir = path.join(__dirname, '../public/images/og');
    const sizes = [
      { width: 1200, height: 630, suffix: '1200x630' },
      { width: 600, height: 315, suffix: '600x315' }
    ];

    const svgFiles = [
      'og-home.svg',
      'og-about.svg',
      'og-products.svg',
      'og-blog.svg'
    ];

    console.log('🚀 Starting OG Image Conversion\n');

    for (const svgFile of svgFiles) {
      const svgPath = path.join(ogDir, svgFile);
      const baseName = path.basename(svgFile, '.svg');

      if (!fs.existsSync(svgPath)) {
        console.warn(`⚠️  Skipping ${svgFile} (not found)`);
        continue;
      }

      for (const size of sizes) {
        try {
          // Convert to PNG
          const pngFileName = `${baseName}-${size.suffix}.png`;
          const pngPath = path.join(ogDir, pngFileName);
          
          await sharp(svgPath)
            .resize(size.width, size.height, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
            .png()
            .toFile(pngPath);

          console.log(`✅ Created ${pngFileName} (${size.width}x${size.height})`);

          // Convert to WEBP
          const webpFileName = `${baseName}-${size.suffix}.webp`;
          const webpPath = path.join(ogDir, webpFileName);
          
          await sharp(svgPath)
            .resize(size.width, size.height, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
            .webp({ quality: 80 })
            .toFile(webpPath);

          console.log(`✅ Created ${webpFileName} (${size.width}x${size.height})`);
        } catch (err) {
          console.error(`❌ Error converting ${baseName} to ${size.suffix}:`, err.message);
        }
      }
    }

    console.log('\n✨ Conversion complete!\n');
    console.log('Next steps:');
    console.log('1. Update metadata to use PNG/WEBP variants');
    console.log('2. Commit the new OG images to git');
    console.log('3. Deploy and test social previews\n');

  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
}

convertOGImages();
