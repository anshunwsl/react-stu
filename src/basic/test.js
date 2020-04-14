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
    return Math.max.apply({},data);
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
    return data.filter((item, index) => {
        //
        return data.indexOf(item) === index;
    });
}

//

//
function bubbleSort(data = []) {
    //
    let dataCount = data.length;
    for (let i = 0; i < dataCount - 1; i++) {
        //
        for (let j = 0; j < dataCount; j++) {
            //
            if (data[j] > data[j + 1]) {
                //
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    //
    return data;
}

function selectSort(data = []) {
    //
    let dataCount = data.length;
    //
    let minIndex = 0;
    //
    for (let i = 0; i < dataCount - 1; i++) {
        //
        minIndex = i;
        for (let j = i + 1; j < dataCount; j++) {
            //
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        //
        let temp = data[i];
        data[i] = data[minIndex];
        data[minIndex] = temp;
    }
    return data;
}


//
function quickSort(data = [], left, right) {
    //
    left = (typeof left !== "number") ? 0 : left;
    right = (typeof right !== "number") ? data.length - 1 : right;
    //
    if (left < right) {
        //
        let partIndex = __partArray__(data, left, right);
        //
        quickSort(data, left, partIndex - 1);
        quickSort(data, partIndex + 1, right);
    }
    return data;
}

//
//
function __partArray__(data = [], left, right) {

    //
    let pivot = left;
    let index = pivot + 1;
    //
    for (let i = index; i <= right; i++) {
        //
        if (data[i] < data[pivot]) {
            //
            _swap(data, i, pivot);
            index++;
        }
    }
    //
    _swap(data, pivot, index - 1);
    //
    return index - 1;
    //
}

//

function _swap(data = [], i, j) {
    //
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}


function mergeSort(data = []) {

    //
    if (data.length < 2) {
        //
        return data;
    }
    //
    let middle = Math.floor(data.length / 2);
    //
    let leftPart = data.slice(0, middle);
    let rightPart = data.slice(middle);
    //
    return _merge(data, mergeSort(leftPart), mergeSort(rightPart));
}

//
//
function _merge(data = [], left, right) {
    //
    let results = [];

    while (left.length > 0 && right.length > 0) {
        //
        if (left[0] <= right[0]) {
            //
            results.push(left.shift());
        } else {
            //
            results.push(right.shift());
        }
    }
    //
    while (left.length > 0) {
        //
        results.push(left.shift());
    }
    //
    while (right.length > 0) {
        //
        results.push(right.shift());
    }
    return results;
}

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


console.log("---------------冒泡排序后数据----------------");
console.log(bubbleSort(data));

console.log("---------------选择排序后数据----------------");
console.log(selectSort(data));

console.log("---------------快速排序后数据----------------");
console.log(quickSort(data));


console.log("---------------归并排序后数据----------------");
console.log(quickSort(data));