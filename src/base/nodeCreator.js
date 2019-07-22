const { getSysId } = require('../utils/utils');
const path = require('path');

/**
 * @private
 * @description 创建路径节点
 * @param {*} param0 
 */
function createPathNode({ type = '', name = '', link = '' }) {
  return {
    id: getSysId(),
    type,
    name,
    link
  };
}

/**
 * @public
 * @description 创建文件夹节点
 * @param {*} name 
 * @param {*} parent 
 */
function createDirNode(name = '', parent = '') {
  return { 
    ...createPathNode({
      name,
      type: 'dir',
      link: path.join(parent, name)
    })
  };
}
/**
 * @public
 * @description 创建文件节点
 * @param {*} name 
 * @param {*} parent 
 * @param {*} ext 
 */
function createFileNode(name = '', parent = '', ext = '') {
  return {
    ...createPathNode({
      name,
      type: 'file',
      link: path.join(parent, `${name}`)
    }),
    ...{ ext }
  }
}

function isPathNode(obj = {}) {
  let keys = Object.keys(obj);
  return ['id', 'type', 'link', 'name'].every(item => keys.indexOf(item) >= 0);
}

module.exports = {
  dir: createDirNode,
  file: createFileNode,
  default: createFileNode,

  isPathNode
};