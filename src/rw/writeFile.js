const fs = require('hexo-fs');
const createDir = require('../create/createDir');

/**
 * @public
 * @description 创建文件夹
 * @param dir {} []
 * @param fileName {} []
 * @param data {} []
 * @returns {Promise<any>}
 */
module.exports = async function writeFile(dir, fileName, data) {
  let ok = await createDir(dir);
  if (!ok) {
    return Promise.reject(ok);
  }

  return new Promise(function(resolve, reject) {
    fs.writeFile(`${dir}\\${fileName}`, data, { encoding: 'utf8' }, function(
      err
    ) {
      if (err) {
        console.error(
          `In writeFile() write file failed===>\n dir:${dir}\nfileName:${fileName}\n`,
          err
        );
        return reject(false);
      }
      return resolve(true);
    });
  });
};
