// 1.实现一个函数， 单次执行输出1，偶数次执行输出2， 不能用全局变量
function testCounter() {
    //
    let times=1;
    return function () {
        //
        if(times%2===0){
            console.log(2)
        }else{
            console.log(1)
        }
        times++;
    }
}
//
let count=testCounter();
//
count();
count();
count();
count();

//2. 闭包的使用场景
// A. 下面函数输出什么内容。 555555
// B. 如何修改让其输出 0--5，
//
function  testBB() {

    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(`data item is ${i}`);
        }, 1000);
    }
}
//
//
//
testBB();
//
function  useBBTo() {
    //
    //
    for (var i=0;i<5;i++){
        //

        (function(data){
            //
            setTimeout(function(){
                //

                console.log(`bb data item is ${data}`);
            },1000);
        })(i);
    }
}
// 使用let 关键字解决
function  useBBTo2() {
     for (let i=0;i<5;i++){
         //
         setTimeout(function () {

             console.log(`bb2 data item is ${i}`);
         },1000);
     }
}
//
//
// useBBTo();

// useBBTo2();


//

function  testNum(data) {

    //
}

//