//
function forEach(array=[], callback) {
    //
    let index = -1;
    let arrayCount = array ? array.length : 0;
    while (++index < arrayCount) {
        if (callback(array[index], index, array) === false) {
            //
            break;
        }
    }
    return array;
}


// //
//
// let data=[1,2,3,4,55,32,45,332,675,91,12,42];
// //
//
// forEach(data,(item,index)=>{
//     //
//     console.log(`data value is ${item} and index is ${index}`);
// });
// //
// //


//

let newData={};

let data1=[];
//
let name="wangsl";

let age=12;

let isAdmin=false;
//
let password=/^\admin/;
//
//
console.log(`type is  ${typeof  newData}`);

//
console.log(`name type is ${typeof  name}`);
//
console.log(`data1 type is ${typeof data1}`);
//
console.log(`age type is ${typeof  age}`);

console.log(`isAdmin type is ${typeof isAdmin}`);

console.log(`password type is ${typeof password.toString()}`);
