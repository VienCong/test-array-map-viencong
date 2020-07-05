// import arrayMap = require('../dist/test-array-map');
// arrayMap([1, 2], (item) => {
//     return item + 3;
// }).forEach(val=>{
//     val.toFixed();
// });

import arrayMap = require('test-array-map-viencong');
arrayMap([1, 2], (item) => {
    return item + 3;
}).forEach(val=>{
    console.log(val);
    val.toFixed();
});

