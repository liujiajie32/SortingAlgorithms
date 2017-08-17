// create a zip package using zip-local
var packageInfo = require('./package.json');
// set naming rule
var zip = packageInfo.name + '-V' + packageInfo.version;
// import zip-local
var zipper = require('zip-local');
// zip target folder and save it
zipper.sync.zip("dist/").compress().save(zip + ".zip");