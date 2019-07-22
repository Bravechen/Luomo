/**
 * 随机字符串
 */
function randomStr() {
  let str;
  str = (0xffffff * Math.random()).toString(16).replace(/\./g, '');
  return str;
}

/**
 * 随机字符串组成的id
 */
function getSysId() {
  return `${randomStr()}-${randomStr()}`;
}

module.exports = { getSysId, randomStr };
