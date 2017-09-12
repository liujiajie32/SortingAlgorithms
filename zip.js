// create a zip package using zip-local
const packageInfo = require('./package.json');
// set naming rule
let zip = packageInfo.name + '-V' + packageInfo.version;
// import zip-local
const zipper = require('zip-local');
// zip target folder and save it
zipper.sync.zip("dist/").compress().save(zip + ".zip");