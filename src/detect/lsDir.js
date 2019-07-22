const fileList = require('./filesList');
const path = require('path');
const nodeCreator = require('../base/nodeCreator');
const isDir = require('../detect/isDir');
const isNothing = require('../utils/isNothing');

/**
 * @private
 * @description 过滤路径结果
 * @param {*} list 
 */
function itemFilter(list) {
  let ary = list.map(item => {
    let deep = item.indexOf(path.sep) >= 0;
    if (deep) {
      return item.split(path.sep)[0];
    }
    return item;
  });
  return Array.from(new Set(ary));
}


/**
 * @public
 * @description 罗列文件夹中的文件和文件
 * @param dirPath {string} [required]
 * @returns {Promise<any>}
 */
module.exports = async function lsDir(dirPath = '') {
  if (isNothing(dirPath)) {
    console.error('In luomo lsDir(), the param of dirPath is nothing!', dirPath);
    return Promise.resolve(false);
  }
  dirPath = path.normalize(dirPath);
  let [err, list] = await fileList(dirPath, { ignorePattern: /node_modules/ });
  if (err) {
    console.error('In luomo lsDir(), read file list failed--->', err);
    return Promise.resolve([]) ;
  }
  
  return await Promise.all(
    itemFilter(list).map(
      async function(item) {
        let itemPath = path.join(dirPath, item);
        if (await isDir(itemPath)) {
          return nodeCreator.dir(item, dirPath);
        }
        
        return nodeCreator.file(item, dirPath, path.extname(item));
      }
    )
  );
};