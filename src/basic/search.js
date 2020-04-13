/// 顺序查找
// 算法查找步骤:
// 1、从表中的最后一个记录开始，逐个进行记录的关键字与给定值进行比较,
//2、若某个记录的关键字与给定值相等，则查找成功，找到所查记录
//3、若直到第一个值，其关键值都与给定值不相等，则表明表中没有所查记录，查找失败

function sortSearch(data, keyField) {
    let dataCount = data.length;
    let result = 0;
    for (let i = dataCount - 1; i >= 0; i--) {
        //
        if (data[i] === keyField) {
            //
            result = data[i];
            break;
        }
    }
    return result;
}

//
// 二分查找
//


let data = [22, 33, 454, 2132, 786, 99, 332, 1233, 34, 1, 2, 4, 98];


//
let result = sortSearch(data, 98);
//
console.log(`search data is ${result}`);


/// 二分法查找.

