import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(dir, 'og-image.html');
const outPath = path.join(dir, '..', 'public', 'og-image.png');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
await page.evaluateHandle('document.fonts.ready');
await page.screenshot({ path: outPath });
await browser.close();
console.log('Wrote', outPath);
