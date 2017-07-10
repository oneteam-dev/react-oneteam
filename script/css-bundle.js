const fs = require('fs');
const path = require('path');
const makeDir = require('make-dir');
const recursive = require('recursive-readdir');
const concat = require('concat');

const LIB = 'lib';
const rootPath = path.resolve(__dirname, '..');
const fileName = path.resolve(rootPath, LIB, 'react-oneteam.css');
const ignoreDirs = ['Avatar']; // if you want to ignore files add directory name to this

recursive(LIB, ['!*.css', ...ignoreDirs.map(dir => `${LIB}/${dir}/index.css`)], (err, files) => {
  if (err) throw err;
  if (files.length === 0) {
    throw new Error('No such css files.');
  }
  console.log('Concatenate:\n', files.join('\n'));
  concat(files.map(f => path.resolve(rootPath, f)))
  .then(css => {
    fs.writeFileSync(fileName, css);
    console.log('Successfully written:\n', fileName);
  });
});
