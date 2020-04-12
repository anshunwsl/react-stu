///

function testEvent() {

    //
    //
    setTimeout(() => {
        //
        console.log("result is 3")
    });
    setTimeout(() => {
        //
        console.log("result is 1");
    }, 100);

    //
    console.log("result is 2");
    //

}

//

// 求一个数组的最小值
//
function minFromArray(data = []) {
    //
    let min = data[0];
    let dataCount = data.length;
    for (let i = 0; i < dataCount; i++) {
        //
        if (min < data[i]) {
            //
            min = data[i];
        }
    }
    //
    return min;
}

//
function minFromArray2(data = []) {
    //
    //
    return Math.min(...data);
}

///数组去重复

//
function uniqueArray(data = []) {
    let dataSet = new Set(data);
    //
    return Array.from(dataSet);
}

//去除数组中的重复数据
function uniqueArray2(data = []) {
    //
    return data.filter((item,index)=>{
        //
        return data.indexOf(item)===index;
    });
}
//



// testEvent();
//

let data = [112, 34, 55, 34, 12123, 88, 9, 977, 1, 88];

//
//

let minData = minFromArray2(data);
//
console.log(`min data is ${minData}`);

//
let newArray = uniqueArray2(data);
//
console.log("---------------去除重复前数据----------------");

console.log(data);
console.log("---------------去除重复后数据----------------");
console.log(newArray);