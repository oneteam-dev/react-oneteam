const copy = require('recursive-copy');

Promise.all(
  ['lib', 'es'].map(dest => {
    return copy('src', dest, {
      overwrite: true,
      filter: ['**/*.{jpg,gif,svg,png}'],
    });
  })
)
.then(results => {
  console.log('Images copied:\n\n', results.reduce((r, v) => ([...r, ...v]), []).map(r => r.dest).join('\n'));
})
.catch(err => console.log(err));
