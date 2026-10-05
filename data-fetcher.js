/**
 * DEPRECATED: this file previously duplicated scripts/fetch.mjs with an
 * incompatible data.json schema (and placeholder/fake forex & stock prices).
 * The GitHub Actions workflow (.github/workflows/update.yml) runs fetch.mjs
 * directly, so this file is kept only so `npm run fetch:data` and any old
 * references to data-fetcher.js keep working — it now just forwards to the
 * real, maintained script instead of generating divergent data.
 */
const { spawnSync } = require('child_process');
const path = require('path');

const result = spawnSync(process.execPath, [path.join(__dirname, 'fetch.mjs')], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..')
});

process.exit(result.status === null ? 1 : result.status);
