
let _debug = false;

module.exports = {
  set debug(value) {
    _debug = !!value;
  },
  get debug() {
    return _debug;
  }
};