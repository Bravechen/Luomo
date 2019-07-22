const fs = require('graceful-fs');
const isNothing = require('../utils/isNothing');
const isExist = require('../detect/isExist');
const devConfig = require('../config/devConfig');
const path = require('path');
const isFile = require('../detect/isFile');

function delFile(filePath) {
  return new Promise(function(resolve, reject) {
    fs.unlink(filePath, function(err, res) {
      if (err) {
        console.error('In luomo deleteFile(), catch an error--->', err);
        return reject(false);
      }
      
      return resolve(true);
    });
  });
}

/**
 * @public
 * @description 删除文件
 * @param {*} path []
 */
module.exports = async function deleteFile(filePath = '') {
  if (isNothing(filePath)) {
    console.error('The dir who want be deleted is not right!');
    return Promise.resolve(false);
  }
  filePath = path.normalize(filePath);
  let ok = [
    await isExist(filePath),
    await isFile(filePath),
    await delFile(filePath)
  ].every(item => item);
  
  if (!ok) {
    if (devConfig.debug) {
      console.log('The dir who want be deleted is not exist');
    }
    return Promise.resolve(false);
  }

  if (devConfig.debug) {
    console.log(`Delete the file ${filePath} success.`);
  }

  return Promise.resolve(true);
};