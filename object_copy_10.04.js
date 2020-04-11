let originObject = {
    prop1: "prop1",
    prop2: "prop2",
    prop3: "prop3",
    prop4: {
        prop11: "prop111",
        prop22: "prop22",
        prop33: "prop33"
    },
    propAr: [1, 2, 3, 4, 5]
};
//Рабочая функция для копирования объектов с вложенными объектами
// function cloneObj(obj) {
//     const clObj = {};
//     for(const i in obj) {
//       if (obj[i] instanceof Object) {
//         clObj[i] = cloneObj(obj[i]);
//         continue;
//       }
//       clObj[i] = obj[i];
//     }
//     return clObj
//   }

// console.log(cloneObj(originObject));

//Рабочая функция для копирования объектов с вложенными массивами
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
// console.log(originObject);
// console.log(cloneObject.prop4 === originObject.prop4);

function deepClone(obj) {
    let copy;
    if (null == obj || "object" != typeof obj) return obj;

    if (obj instanceof Array) {
        copy = [];
        for (var i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
        copy = {};
        for (let pr in obj) {
            if (obj.hasOwnProperty(pr)) copy[pr] = deepClone(obj[pr]);
        }
        return copy;
    }
}
let cloneObject = deepClone(originObject);

console.log(deepClone(cloneObject));

console.log(cloneObject.propAr === originObject.propAr);

console.log(cloneObject.prop4 === originObject.prop4);