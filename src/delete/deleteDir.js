const fs = require('hexo-fs');
const isExist = require('../detect/isExist');
const devConfig = require('../config/devConfig');

function removeDir(path) {
  return new Promise(function(resolve, reject) {
    fs.rmdir(path, function(err) {
      if (err) {
        console.error(err);
        return reject(false);
      }

      return resolve(true);
    });
  });
}

/**
 * @public
 * @description 删除文件夹
 * @param {} path []
 * @returns {Promise<any>}
 */
module.exports = async function deleteDir(path) {
  let ok = await isExist(path);

  if (!ok) {
    if (devConfig.debug) {
      console.log('The dir who want be deleted is not exist');
    }
    return Promise.resolve(false);
  }

  return await removeDir(path);
};
