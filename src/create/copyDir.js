let fs = require('hexo-fs');
const isExist = require('../detect/isExist');

function copy(src, dest, opt = {}) {
  return new Promise(function(resolve, reject) {
    fs.copyDir(src, dest, opt, function(err) {
      if (err) {
        console.error('In copyDir error====>>>', err);
        return reject(err);
      }

      return resolve(true);
    });
  });
}

function allExit(src, dest) {
  return Promise.all([isExist(src), isExist(dest)]);
}


/**
 * @public
 * @description 拷贝文件夹和其中的文件
 * @param src {} []
 * @param dest {} []
 * @param opt {} []
 * @returns {Promise<any>}
 */
module.exports = async function copyDir(src, dest, opt = {}) {
  let ok = await allExist(src, dest);
  if (!ok) {
    console.error(
      'In copyDir, some path is not exist===>src:',
      src,
      '\n',
      `dest: ${dest}`
    );
    return Promise.reject(false);
  }

  return await copy(src, dest, opt);
};
