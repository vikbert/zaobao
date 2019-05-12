const { resolve } = require('path');
const { existsSync, lstatSync, readdirSync } = require('fs');

function readFileList(year, moon) {
  const fileList = [];
  const dirPath = resolve(`./docs/${year}/${moon}/`);
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }

  const files = readdirSync(dirPath);
  files.forEach(item => {
    const currentFile = item.slice(0, 2);
    fileList.push([
      `/${year}/${moon}/${currentFile}`,
      `${year}-${moon}-${currentFile}`
    ]);
  });
  return fileList.reverse();
}

module.exports = readFileList;
