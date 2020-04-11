let originObject = {
    prop1: "prop1",
    prop2: "prop2",
    prop3: "prop3",
    prop4: {
        prop11: "prop111",
        prop22: "prop22",
        prop33: "prop33"
    }
    // propAr: [1, 2, 3, 4, 5]

};



function cloneObj(obj) {
    const clObj = {};
    for(const i in obj) {
      if (obj[i] instanceof Object) {
        clObj[i] = cloneObj(obj[i]);
        continue;
      }
      clObj[i] = obj[i];
    }
    return clObj;

  }

console.table(cloneObj(originObject));


// function cloneObj(obj) {
//     const clObj = [];
//     for(const i in obj) {
//     if((obj[i] instanceof Array)){
//         clObj[i] = cloneObj(obj[i]);
//         continue;
//       }
//       clObj[i] = obj[i];
//     }

//     return clObj;
//   }
// const cloneObject =  cloneObj(originObject);
// console.log(cloneObject);
// console.log(cloneObj(originObject));

// console.log(cloneObject.propAr === originObject.propAr);
// console.log(cloneObject.prop4 === originObject.prop4);
