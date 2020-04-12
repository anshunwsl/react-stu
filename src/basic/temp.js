//

function  dataSort(data=[],left,right) {

    //
    //
    left=(typeof left!=="number")?0:left;
    //
    right =(typeof right!=="number")?data.length-1:right;
    //
    if(left<right){
        //
        let divideIndex=dividePart(data,left,right);
        //
        dataSort(data,left,divideIndex-1);
        //
        dataSort(data,divideIndex+1,right);
    }
//
    //
    return data;

    //
}
//
//
//
function dividePart(data,left,right) {

    //
    let pivot=left;
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

// change loc
//
function swap(data=[],i,j){
    //
    let temp=data[i];
    //
    data[i]=data[j];
    //
    data[j]=temp;
}
//


//


let data=[11,2,434,66,76,4,22,88,23342,22,55,1];

//
let sortData=dataSort(data);
//
console.log(sortData);
//