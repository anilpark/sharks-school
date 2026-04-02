/**
 * Downloads all Figma assets from the local MCP server,
 * optimizes them (PNG → WebP, SVG via SVGO) and saves to static/assets/
 * Also rewrites all src/lib/sections/*.svelte files to use /assets/ paths.
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const STATIC_ASSETS = resolve(ROOT, 'static/assets');
const SECTIONS_DIR = resolve(ROOT, 'src/lib/sections');

// ── Collect all asset URLs from source files ─────────────────────────────────

const sectionFiles = [
	'FAQ.svelte',
	'Footer.svelte',
	'Header.svelte',
	'Hero.svelte',
	'Pricing.svelte',
	'Reviews.svelte',
	'Stats.svelte',
	'Team.svelte',
	'Values.svelte',
	'WhatAwaits.svelte'
].map((f) => resolve(SECTIONS_DIR, f));

// Captures: m[1]=full filename (e.g. "abc123.png"), m[2]=ext only ("png"|"svg")
const urlRegex = /http:\/\/localhost:3845\/assets\/([a-f0-9]+)\.(png|svg)/g;

/** @type {Map<string, {hash: string, ext: string}>} */
const assetMap = new Map(); // url → { hash, ext }

for (const file of sectionFiles) {
	const src = readFileSync(file, 'utf8');
	for (const m of src.matchAll(urlRegex)) {
		const url = m[0];
		const hash = m[1]; // just the hex hash, no extension
		const ext = m[2];
		assetMap.set(url, { hash, ext });
	}
}

console.log(`Found ${assetMap.size} unique assets to download.`);

await mkdir(STATIC_ASSETS, { recursive: true });

// ── Download + optimise each asset ───────────────────────────────────────────

/**
 * Maps original URL → final public path (e.g. /assets/abc123.webp)
 * @type {Map<string, string>}
 */
const replacement = new Map();

let done = 0;

for (const [url, { hash, ext }] of assetMap) {
	const outName = hash; // keep the hash as filename for uniqueness

	if (ext === 'svg') {
		const destPath = resolve(STATIC_ASSETS, `${outName}.svg`);
		const publicPath = `/assets/${outName}.svg`;

		if (!existsSync(destPath)) {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
			const text = await res.text();
			writeFileSync(destPath, text, 'utf8');
		}
		replacement.set(url, publicPath);
	} else if (ext === 'png') {
		const destPath = resolve(STATIC_ASSETS, `${outName}.webp`);
		const publicPath = `/assets/${outName}.webp`;

		if (!existsSync(destPath)) {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
			const buf = Buffer.from(await res.arrayBuffer());

			// Convert PNG → WebP with quality 85 (good balance of size/quality)
			await sharp(buf).webp({ quality: 85, effort: 4 }).toFile(destPath);
		}
		replacement.set(url, publicPath);
	}

	done++;
	process.stdout.write(`\r  [${done}/${assetMap.size}] ${hash.slice(0, 8)}…${ext}   `);
}

console.log('\n✔ All assets downloaded and optimised.');

// ── Rewrite source files ──────────────────────────────────────────────────────

let filesPatched = 0;
for (const file of sectionFiles) {
	let src = readFileSync(file, 'utf8');
	let changed = false;

	for (const [url, publicPath] of replacement) {
		if (src.includes(url)) {
			src = src.replaceAll(url, publicPath);
			changed = true;
		}
	}

	if (changed) {
		writeFileSync(file, src, 'utf8');
		filesPatched++;
		console.log(`  Patched: src/lib/sections/${file.split('/').pop()}`);
	}
}

console.log(`\n✔ ${filesPatched} file(s) updated to use local /assets/ paths.`);

// ── Print size summary ────────────────────────────────────────────────────────
import { readdirSync, statSync } from 'fs';

const files = readdirSync(STATIC_ASSETS);
let totalBytes = 0;
for (const f of files) {
	totalBytes += statSync(resolve(STATIC_ASSETS, f)).size;
}
console.log(`\nTotal assets: ${files.length} files, ${(totalBytes / 1024).toFixed(1)} KB`);
