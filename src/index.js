const isExist = require('./detect/isExist');
const lsDir = require('./detect/lsDir');
const fileList = require('./detect/filesList');
const devConfig = require('./config/devConfig');
const isDir = require('./detect/isDir');
const isFile = require('./detect/isFile');

const copyDir = require('./create/copyDir');
const createDir = require('./create/createDir');

const deleteDir = require('./delete/deleteDir');
const deleteFile = require('./delete/deleteFile');

const readFile = require('./rw/readFile');
const writeFile = require('./rw/writeFile');

module.exports = {
  isExist,
  fileList,
  lsDir,

  isDir,
  isFile,

  copyDir,
  createDir,

  deleteDir,
  deleteFile,

  readFile,
  writeFile,

  setDebug(value) {
    devConfig.debug = value;
  }
};