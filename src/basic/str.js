//主要处理字符串相关的操作。。


let data="aaaabbbbbbbbbcaa";
//
let flag=data[0];
let results=[];
let temp=[];
for (let i=0;i<data.length;i++){
    //
    if(data[i]===flag){
        temp.push(data[i]);
    }else{
        //
        flag=data[i];
        //
        console.log(`key is ${flag}`);
        results.push(temp.join(""));
        temp=[flag];
        //res
    }
}
//
console.log(results);