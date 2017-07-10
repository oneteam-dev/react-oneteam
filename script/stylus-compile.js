const fs = require('fs');
const path = require('path');
const makeDir = require('make-dir');
const recursive = require('recursive-readdir');
const stylus = require('stylus');
const argv = require('minimist')(process.argv.slice(2));

const out = argv.o || argv.out;

if (!out) {
  throw new Error('out must be required `npm run build:styl -- -o lib`');
}

const SRC = 'src';
const DEST = out;

recursive(SRC, ['!*.styl'], (err, files) => {
  if (err) throw err;

  const rootPath = path.resolve(__dirname, '..');

  files.forEach(f => {
    const str = fs.readFileSync(
      path.resolve(rootPath, f),
      { encoding: 'utf8' }
    );

    const dirname = path.dirname(f).replace(new RegExp(`^${SRC}`), DEST);
    const basename = path.basename(f).replace(/\.styl$/, '.css');

    const outDir = path.resolve(rootPath, dirname);

    makeDir.sync(outDir);

    stylus(str)
      .render((err, css) => {
        if (err) throw err;
        const file = path.resolve(outDir, basename);
        fs.writeFileSync(file, css);
        console.log('Rendered, ', file);
      });
  });
});
