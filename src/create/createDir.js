const fs = require('hexo-fs');
const isExist = require('../detect/isExist');

function creat(path) {
  return new Promise(function(resolve, reject) {
    fs.mkdirs(path, function(err) {
      if (err) {
        console.error(
          `In createDir(), create dir failed.===>\npath:${path}`,
          err
        );
        return reject(false);
      }

      return resolve(true);
    });
  });
}


/**
 * @public
 * @description 创建文件夹
 * @param path {} []
 * @returns {Promise<any>}
 */
module.exports = async function createDir(path) {
  let ok = await isExist(path);
  if (ok) {
    return Promise.resolve(true);
  }
  return await creat(path);
};
