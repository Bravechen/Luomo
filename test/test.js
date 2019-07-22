// const { lsDir } = require('../src/index');

// function init(pathStr) {
//   lsDir(pathStr)
//     .then(function(res) {
//       console.log(res);
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
// }

// init(`E:\\project\\zen-mall\\src`);

const deleteFile = require('../src/delete/deleteFile');

function deleteSomeFile(path = '') {
  deleteFile(path)
    .then(function() {
      debugger;
      console.log('success');
    })
    .catch(function(err) {
      console.error(err);
    });
}

deleteSomeFile(`E:\\project\\testLuomo\\test1.txt`);