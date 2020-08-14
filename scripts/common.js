const fs = require('fs');

const getFileOrDefault = (filePath, defaultReturn = '{}') =>
  fs.existsSync(filePath) ? fs.readFileSync(filePath) : defaultReturn;

const getPackages = () => ['packages', 'apps'];

module.exports = {
  getFileOrDefault,
  getPackages,
};
