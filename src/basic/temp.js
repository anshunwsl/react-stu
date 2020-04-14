//

function dataSort(data = [], left, right) {

    // bubble sort
    //
    let dataCount = data.length;
    //
    left = (typeof left !== "number") ? 0 : left;
    //
    right = (typeof right !== "number") ? dataCount - 1 : right;
    //
    //
    //
    if (left < right) {
        //
        let divideIndex = dividePart(data, left, right);
        //
        dataSort(data, left, divideIndex - 1);
        dataSort(data, divideIndex + 1, right);
    }

    return data;

}

//
//
//
//

function dividePart(data, left, right) {
    //
    let pivot = left;
    let index = pivot + 1;
    //
    for (let j = index; j <= right; j++) {
        //
        if (data[j] < data[pivot]) {
            //
            swap(data, j, index);
            //
            index++;
        }
    }
    //
    swap(data, pivot, index - 1);
    //
    return index - 1;

}

// change loc
//
function swap(data = [], i, j) {
    //
    let temp = data[i];
    //
    data[i] = data[j];
    //
    data[j] = temp;
}

//


//



//


//
function uniqueArray(data = []) {
    //
    let dataSet = new Set(data);
    //
    return Array.from(dataSet);
}

//
function getMinValue(data) {
    //
    return Math.min.apply(null, data);
}

//

let data = [11, 2, 434, 66, 76, 4, 22, 88, 23342, 22, 55, 1, 11];

//
let sortData = dataSort(data);
//
console.log(sortData);

//

//
console.log(`remove multi value...`);
console.log(uniqueArray(sortData));

//
console.log(`min value is ${getMinValue(data)}`);

//
function testCounter() {
    let counter = 0;
    let results = [];
    for (let i = 0; i < 1000; i++) {
        //
        if (("" + i).search("6") !== -1) {
            counter++;
            results.push(i);
        }
        // if (/6/.test("" + i)) {
        //     //
        //     counter++;
        //     results.push(i);
        // }
    }
    //
    console.log(`counter times is ${counter}`);
    return results;
}

//


let countData = testCounter();
// //
console.log(countData);