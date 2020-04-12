//
// 常用算法基础题
//

// 冒泡排序
// 冒泡排序思路：
// 依次比较数组中相邻两个元素， 如果第一个元素比第二个元素大， 则交换位置,排位升序
// 依次比较数组中相邻两个元素， 如果第一个元素比第二个元素小， 则交换位置,排位降序
function bubbleSort(data=[]) {
    //
    let dataCount=data.length-1;
    for (let i=0;i<dataCount;i++){
        //
        for(let j=0;j<dataCount-i;j++){
            //
            if(data[j]>data[j+1]){
                //
                let temp=data[j+1];
                //
                data[j+1]=data[j];
                //
                data[j]=temp;
            }
        }
    }
    //
    return data;
}

// 选择排序
//选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。
// 所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧

//
//首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
//
// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
//
// 重复第二步，直到所有元素均排序完毕。

function selectSort(data=[]){
    //
    let dataCount=data.length;
    let minIndex=0;
    //
    for (let i=0;i<dataCount-1;i++){
        //
        minIndex=i;
        for(let j=i+1;j<dataCount;j++){
            //
            if(data[j]<data[minIndex]){
                //
                minIndex=j;
            }
        }
        //
        let temp=data[i];
        data[i]=data[minIndex];
        data[minIndex]=temp;
    }
    return data;
}

//快速排序算法。
//算法步骤，
//1. 从数组中挑出一个元素，成为基准值
//2. 重新排列数列， 所有比基准值小的放在基准值前面
//3. 所有比基准值大的数值放在基准值后面
//4. 和基准值相同的数据可放在任意一遍
//5. 在这个分区退出之后， 该基准值就处于数组的中间位置
//6. 这一过程成为分区操作
//
//7.递归地把小于基准值的元素的子数组和大于大于基准值的子数组排序
function quickSort(data=[],left,right){
    //
    //
    let len=data.length;
    //
    let divideIndex=0;
    //left

    left=(typeof left!=="number")?0:left;
    //
    right=(typeof  right!=="number")?len-1:right;
    //
    //
    if(left<right){
        //

        divideIndex=_partArray(data,left,right);
        //
        quickSort(data,left,divideIndex-1);
        //
        quickSort(data,divideIndex+1,right);
        //

    }
    //
    return data;
}

//
//
//
function _partArray(data=[],left,right){
    //
    let pivot=left;
    //
    let index=pivot+1;
    //
    for (let i=index;i<=right;i++){
        //
        if(data[i]<data[pivot]){
            //
            swap(data,i,index);
            //
            index++;
        }
    }
    //
    swap(data,pivot,index-1);
    //
    return index-1;
}

//交换值
//
function swap(data,i,j){
    //
    let temp=data[i];
    //
    data[i]=data[j];
    //
    data[j]=temp;
}

//
//归并排序算法
//
// 归并排序算法主要采用分而治之的思想。
// 主要实现思路：1、 自上而下递归，2、自下而上迭代
//
// 算法执行步骤：
//1、申请空间，使其大小为两个已经排序的序列之和，该空间
//用来存放合并后的序列
// 2、设定两个指针，初始位置分别为两个已经排序的序列
//其实位置
//3、比较两个指针所指向的元素，选择相对较小的元素放入
//到合并空间，并移动指针到下一个位置
//4、重复步骤3，直到指针到达序列列尾
//5、将另一个序列剩下的元素直接复制到合并列的列尾
//

function mergeSort(data=[]){
    //
    let len=data.length;
    //
    if(data.length<2){
        //
        return data;
    }
    //
    let middle=Math.floor(len/2);
    //
    let left=data.slice(0,middle);
    let right=data.slice(middle);
    //
    return merge(mergeSort(left),mergeSort(right));

}

//
function merge(left,right){
    //
    let result=[];
    while (left.length&&right.length){
        //
        if(left[0]<=right[0]){
            //
            result.push(left.shift());
        }else{
            //
            result.push(right.shift());
        }
    }
    //
    while (left.length>0){
        //
        result.push(left.shift());
    }
    //
    while (right.length>0){
        //
        result.push(right.shift());
    }
    //
    return result;
}


//


let data = [112, 34, 55, 34, 12123, 88, 9, 977, 1, 88];

//
console.log(`--------------冒泡排序结果-------------`);
//
console.log(bubbleSort(data));

console.log(`--------------选择排序结果-------------`);
//
console.log(selectSort(data));

console.log(`--------------快速排序结果-------------`);
//
console.log(quickSort(data));


console.log(`--------------归并排序结果-------------`);
//
console.log(mergeSort(data));