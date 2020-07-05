"use strict";
// import arrayMap = require('../dist/test-array-map');
// arrayMap([1, 2], (item) => {
//     return item + 3;
// }).forEach(val=>{
//     val.toFixed();
// });
exports.__esModule = true;
var arrayMap = require("test-array-map-viencong");
arrayMap([1, 2], function (item) {
    return item + 3;
}).forEach(function (val) {
    console.log(val);
    val.toFixed();
});
