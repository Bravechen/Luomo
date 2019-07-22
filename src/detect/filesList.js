const fs = require('hexo-fs');

function filesList(path, opt = {}) {
  return new Promise(function(resolve, reject) {
    fs.listDir(path, opt,function(err, list) {
      if (err) {
        return reject([err]);
      }

      return resolve([err, list]);
    });
  });
}

module.exports = filesList;
