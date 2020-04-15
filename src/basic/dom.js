//

function xhr(data) {

    let xhrObject = new XMLHttpRequest();
    let param = {};
    //
    xhrObject.open("POST", "http://data.url?dd=aa", true);
    xhrObject.send(param);
    //
    xhrObject.setRequestHeader("content-type", "application/json");
    xhrObject.onreadystatechange = function () {
        //
        //
        if (xhrObject.readyState === XMLHttpRequest.DONE&&xhrObject.status===200) {
            //请求成功.
            //处理结果
            let data = xhrObject.responseText;
            //
        }
    }
}