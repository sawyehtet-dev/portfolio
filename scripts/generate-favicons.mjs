/**
 * Favicon & App Icon Generator - Dario Amodei Style (Editorial Serif "S" on Paper Squircle)
 * Generates crisp SVG, ICO, and PNG icons matching the exact typography, optical weight,
 * stroke density, and pixel-perfect centering of darioamodei.com:
 * - public/favicon.svg (Scalable vector with embedded Newsreader 24pt Bold font)
 * - public/favicon.ico (Multi-size 16x16, 32x32, 48x48)
 * - public/assets/favicon-32.png (32x32)
 * - public/assets/apple-touch-icon.png (180x180)
 * - public/assets/icon-192.png (192x192)
 * - public/assets/icon-512.png (512x512)
 */

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FONT_PATH = join(__dirname, '../assets-src/fonts/Newsreader24pt-Bold.woff2');
const fontBase64 = readFileSync(FONT_PATH).toString('base64');

const SIZES = [
    { name: 'favicon-16.png', size: 16, rx: 3, isTemp: true },
    { name: 'favicon-32.png', size: 32, rx: 6, isTemp: false },
    { name: 'favicon-48.png', size: 48, rx: 9, isTemp: true },
    { name: 'apple-touch-icon.png', size: 180, rx: 34, isTemp: false },
    { name: 'icon-192.png', size: 192, rx: 36, isTemp: false },
    { name: 'icon-512.png', size: 512, rx: 96, isTemp: false },
];

function createIco(pngBuffers) {
    const count = pngBuffers.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = ICO
    header.writeUInt16LE(count, 4); // number of images

    let offset = 6 + count * 16;
    const dirEntries = [];

    for (const img of pngBuffers) {
        const entry = Buffer.alloc(16);
        entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
        entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
        entry.writeUInt8(0, 2); // colors
        entry.writeUInt8(0, 3); // reserved
        entry.writeUInt16LE(1, 4); // color planes
        entry.writeUInt16LE(32, 6); // bpp
        entry.writeUInt32LE(img.buffer.length, 8); // size
        entry.writeUInt32LE(offset, 12); // offset
        dirEntries.push(entry);
        offset += img.buffer.length;
    }

    return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((img) => img.buffer)]);
}

async function main() {
    mkdirSync(join(__dirname, '../public/assets'), { recursive: true });

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--font-render-hinting=none',
        ],
    });

    try {
        const page = await browser.newPage();

        await page.setContent(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Newsreader24';
    src: url('data:font/woff2;charset=utf-8;base64,${fontBase64}') format('woff2');
    font-weight: 700;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: transparent; }
</style>
</head>
<body>
  <canvas id="c"></canvas>
</body>
</html>`);

        await page.evaluate(() => document.fonts.ready);

        const rendered = await page.evaluate((sizes) => {
            const canvas = document.getElementById('c');
            const ctx = canvas.getContext('2d', { willReadFrequently: true });

            return sizes.map((item) => {
                const size = item.size;
                const radius = item.rx;
                const ratioH = 0.68; // Bold visual presence matching Dario's D

                canvas.width = size;
                canvas.height = size;

                let fontSize = size * 0.8;
                ctx.font = `700 ${fontSize}px 'Newsreader24', serif`;
                let m = ctx.measureText('S');
                let h = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;

                fontSize = fontSize * ((size * ratioH) / h);
                ctx.font = `700 ${fontSize}px 'Newsreader24', serif`;
                m = ctx.measureText('S');
                h = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
                const w = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;

                // Clear & draw background squircle
                ctx.clearRect(0, 0, size, size);
                ctx.fillStyle = '#f0efea';
                ctx.beginPath();
                ctx.roundRect(0, 0, size, size, radius);
                ctx.fill();

                // Compute exact optical center (equal margins on top/bottom/left/right)
                const targetLeft = Math.floor((size - w) / 2);
                const targetTop = Math.floor((size - h) / 2);
                const drawX = targetLeft + m.actualBoundingBoxLeft;
                const drawY = targetTop + m.actualBoundingBoxAscent;

                ctx.fillStyle = '#161410';
                // Slight stroke boost for maximum clarity at low pixel sizes
                if (size <= 48) {
                    ctx.lineWidth = 0.4 * (size / 32);
                    ctx.strokeStyle = '#161410';
                    ctx.strokeText('S', drawX, drawY);
                }
                ctx.fillText('S', drawX, drawY);

                return {
                    name: item.name,
                    size: item.size,
                    isTemp: item.isTemp,
                    dataUrl: canvas.toDataURL('image/png'),
                    fontSize,
                    drawX,
                    drawY,
                };
            });
        }, SIZES);

        const renderedPngs = [];

        for (const item of rendered) {
            const base64Data = item.dataUrl.replace(/^data:image\/png;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');

            renderedPngs.push({
                name: item.name,
                width: item.size,
                height: item.size,
                buffer,
                isTemp: item.isTemp,
            });

            if (!item.isTemp) {
                const outPath = join(__dirname, '../public/assets', item.name);
                writeFileSync(outPath, buffer);
                console.log(`Generated: ${outPath} (${item.size}x${item.size})`);
            }
        }

        // 2. Build multi-resolution favicon.ico
        const icoSizes = renderedPngs.filter((p) => [16, 32, 48].includes(p.width));
        const icoBuffer = createIco(icoSizes);
        writeFileSync(join(__dirname, '../public/favicon.ico'), icoBuffer);
        console.log('Generated: public/favicon.ico (16x16, 32x32, 48x48)');

        // 3. Write public/favicon.svg
        const item512 = rendered.find((r) => r.size === 512);
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <style>
    @font-face {
      font-family: 'Newsreader24';
      src: url('data:font/woff2;charset=utf-8;base64,${fontBase64}') format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    .bg { fill: #f0efea; }
    .letter {
      font-family: 'Newsreader24', 'Times New Roman', Georgia, serif;
      font-size: ${item512.fontSize}px;
      font-weight: 700;
      fill: #161410;
    }
  </style>
  <rect width="512" height="512" rx="96" class="bg" />
  <text x="${item512.drawX}" y="${item512.drawY}" class="letter">S</text>
</svg>`;
        writeFileSync(join(__dirname, '../public/favicon.svg'), svgContent, 'utf8');
        console.log('Generated: public/favicon.svg');
    } finally {
        await browser.close();
    }
}

main().catch((err) => {
    console.error('Failed to generate favicons:', err);
    process.exit(1);
});
