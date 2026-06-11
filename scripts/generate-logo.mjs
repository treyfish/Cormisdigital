import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(dir, '..', 'brand_assets');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 2 });

const master = path.join(outDir, 'logo-badge-2048.png');
await page.goto('file://' + path.join(dir, '..', 'brand_assets', 'logo-badge.html'), { waitUntil: 'networkidle0' });
await page.evaluateHandle('document.fonts.ready');
await page.screenshot({ path: master, omitBackground: true });
await browser.close();

for (const size of [1024, 720, 512, 256]) {
  await sharp(master).resize(size, size).png().toFile(path.join(outDir, `logo-badge-${size}.png`));
}
console.log('Exports written to', outDir);
