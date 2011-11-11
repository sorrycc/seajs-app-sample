/**
 * @fileoverview Build Script for SeaJS APP.
 * @author ÔÆÇ« <yunqian@taobao.com>
 * @depends spm
 */

var spm = require('./spm/lib/spm');
var path = require('path');
var fs = require('fs');

const TIMESTAMP = '20111111';
const VERSION = '1.0';

new spm.Build(['../'+VERSION+'/apps/cart.js'], {
  combine: true
}).run();
new spm.Build(['../'+VERSION+'/core/core.js']).run();

var targetPath = path.join(__dirname, '../'+TIMESTAMP+'/');
var cartPath = path.join(targetPath, './apps/');
var corePath = path.join(targetPath, './core/');
var cartJSPath = path.join(__dirname, '../'+VERSION+'/apps/__build/cart.js');
var coreJSPath = path.join(__dirname, '../'+VERSION+'/core/__build/core.js');

mkdirS(targetPath);
mkdirS(path.join(targetPath, './apps/'));
mkdirS(path.join(targetPath, './core/'));

cp(coreJSPath, corePath, function(err) {
  if (err) {
    return console.log(err);
  }
  cp(cartJSPath, cartPath, function(err) {
    if (err) {
      return console.log(err);
    }
    /*
    new spm.Build(['../'+VERSION+'/apps/cart.js', '../'+VERSION+'/core/core.js'], {
      clear: true
    }).run();
    */
  });
});


//////////////////////
// Utils

function mkdirS(dir) {
  if (!path.existsSync(dir)) {
    fs.mkdirSync(dir, '0777');
  }
}

function cp(source, dest, callback) {
  require('child_process').exec('cp '+source+' '+dest, callback);
}
