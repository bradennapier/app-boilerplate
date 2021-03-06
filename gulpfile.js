const gulp = require('gulp');

const os = require('os');
const fs = require('fs');
const path = require('path');

/** Clear react-packager cache */
gulp.task('clear-cache', () => {
  const tempDir = os.tmpdir();

  const cacheFiles = fs.readdirSync(tempDir).filter(fileName => fileName.indexOf('react-packager-cache') === 0);

  cacheFiles.forEach((cacheFile) => {
    const cacheFilePath = path.join(tempDir, cacheFile);
    fs.unlinkSync(cacheFilePath);
    console.log('Deleted cache: ', cacheFilePath);
  });

  if (!cacheFiles.length) {
    console.log('No cache files found!');
  }
});
