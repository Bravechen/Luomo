const fs = require('hexo-fs');
const isNothing = require('../utils/isNothing');
const devConfig = require('../config/devConfig');
/**
 * @public
 * @description 路径是否存在
 * @param {string} path [required] 路径 
 * @param {boolean} sync [optional] 是否使用同步方法
 */
function isExist(path, sync = false) {

  if (isNothing(path)) {
    return sync ? false : Promise.reject(false);
  }

  return sync ? syncPathExit(path) : asyncPathExist(path);
}

function asyncPathExist(path) {
  return new Promise(function(resolve, reject) {
    fs.exists(path, function(isExist) {
      if (devConfig.debug) {
        console.log(`Is path ${path} exist?====>`, isExit);
      }
      if (!isExist) {
        return resolve(false);
      }
      return resolve(true);
    });
  });
}

function syncPathExit(path) {
  let ok = false;
  try {
    ok = fs.existsSync(path);
    if (devConfig.debug) {
      console.log(`Is path ${path} exist?====>`, ok);
    }
  } catch (err) {
    console.error('In luomo isExist(), syncPathExit error--->', err);
    return false;
  }
  return ok;
}

module.exports = isExist;
