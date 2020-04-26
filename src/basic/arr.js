

let data=[1,1,2,22,22,5,66,66,44,3324,3454];
//

function uniqueArray(data=[]) {
    //
    return data.filter((item,index)=>{
        //获取重复值
       // return data.indexOf(item)!==index;

        //去掉重复值
       return data.indexOf(item)===index;
    });

}
//
console.log(uniqueArray(data));

//

function  fangDou(func,waitTime) {
    let timeout;
    return function(){
        let context=this;
        let args=arguments;
        if(timeout){
            clearTimeout(timeId)
        }
        timeout=setTimeout(()=>{
            func.apply(context,args);
        },waitTime);
    };
}

//
function  fangDou1(func,waitTime) {
    //
    let timerId=null;
    return function () {
        //
        let context=this;
        let args=arguments;
        //
        if(timerId){
            clearTimeout(timerId);
        }
        //
        let isCallNow=!timerId;
        timerId=setTimeout(()=>{
            timerId=null;
        },waitTime);
        //
        if(isCallNow){
            //
            func.apply(context,args);
        }
    }
}

///
//
//防抖函数
function fangDouDefault(func,waitTime,isIme) {
    //
    let timeOut=null;
    return function () {
        let context=this;
        let args=arguments;
        if(isIme){
            let callNow=!timeOut;
            timeOut=setTimeout(()=>{
                timeOut=null;
            },waitTime);
            //
            if(callNow){
                func.apply(context,args);
            }
        }else{
            //
            timeOut=setTimeout(()=>{
                func.apply(context,args);
            },waitTime);
        }
    }
}

// 节流

function  throttle(func,waitTime) {
    //
    let timeout=null;
    return function () {
        let context=this;
        let args=arguments;
        if(!timeout){
            timeout=setTimeout(()=>{
                //
                timeout=null;
                func.apply(context,args);
            },waitTime);
        }
    }
}

//
function throttleTime(func,waitTime) {
    //
    let previous=0;
    return function () {
        let now=Date.now();
        let context=this;
        let args=arguments;
        ///
        if(now-previous>waitTime){
            func.apply(context,args);
            previous=now;
        }
    }
}

//

function throttleDefault(func,waitTime,isIme) {
    //
    let timeout=null;
    let previous=0;
    //
    return function () {

        //
        let context=this;
        let args=arguments;
        //
        if(isIme){
            //时间戳版本
            let now=Date.now();
            //
            if(now-previous>waitTime){
                //
                func.apply(context,args);
                previous=now;
            }
        }else{
            //
            if(!timeout){
                //
                timeout=setTimeout(()=>{
                    //
                    timeout=null;
                    func.apply(context,args);
                    //

                },waitTime);
            }
        }
    }
}