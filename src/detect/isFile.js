const fs = require('fs');
const isNothing = require('../utils/isNothing');

/**
 * @public
 * @description 
 * @param path {} []
 */
module.exports = function isFile(path = '') {
  if (isNothing(path)) {
    return Promise.resolve(false);
  }
  return new Promise(function(resolve, reject) {
    fs.stat(path, function(err, stats) {
      if (err) {
        console.error('In luomo isFile(), catch an error', err);
        return reject(false);
      }

      return resolve(stats.isFile());
    });
  });
}