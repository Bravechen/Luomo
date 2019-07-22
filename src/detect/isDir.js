const fs = require('fs');
const isNothing = require('../utils/isNothing');

/**
 * @public
 * @description 
 * @param path {} []
 * @returns { Promise<any> }
 */
module.exports = function isDir(path = '') {
  if (isNothing(path)) {
    return Promise.resolve(false);
  }

  return new Promise(function(resolve, reject) {
    fs.stat(path, function(err, stats) {
      if (err) {
        console.error('In luomo isDir(), catch an error', err);
        return reject(false);
      }

      return resolve(stats.isDirectory());
    });
  });
};