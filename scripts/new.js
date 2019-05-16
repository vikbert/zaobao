const { resolve } = require("path");
const fs = require("fs");
const fx = require("mkdir-recursive");

function createNewMarkdownFile() {
  const currentDate = new Date().toISOString();

  const year = currentDate.substr(0, 4);
  const month = currentDate.substr(5, 2);
  const day = currentDate.substr(8, 2);

  const dirPath = resolve(`./docs/${year}/${month}`);
  const filePath = `${dirPath}/${day}.md`;
  const isFile = fs.existsSync(filePath);

  if (!isFile) {
    fx.mkdir(dirPath, (err) => {
      if (err) throw err;
      fs.copyFile("./scripts/template.md", filePath, (error) => {
        if (error) throw error;
      });
    });
  }
}

createNewMarkdownFile();
