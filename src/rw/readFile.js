const fs = require('hexo-fs');
const isExist = require('../detect/isExist');

module.exports = async function(path) {
  let ok = await isExist(path);

  if (!ok) {
    return Promise.reject({
      isError: true,
      message: 'path is not exist.'
    });
  }

  return new Promise(function(resolve, reject) {
    fs.readFile(path, function(err, value) {
      if (err) {
        err.isError = true;
        return reject(err);
      }

      return resolve(value);
    });
  });
};
