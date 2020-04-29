const data = [
    {
        id: 1,
        pid: 'a',
        text: 1,
        children: [{
            id: 2,
            pid: 'b',
            text: 2,
            children: [{
                id: 3,
                pid: 'c',
                text: 3,
                children: [{
                    id: 4,
                    pid: 'd',
                    text: 3,
                    children: []
                }, {
                    id: 5,
                    pid: 'd2',
                    text: 3,
                    children: []
                }
                ]
            }]
        }]
    }
];

//
//从目录树中获取指定节点的所有父节点
function findIndexArray(data, id, indexArray) {
    let arr = Array.from(indexArray);
    for (let i = 0, len = data.length; i < len; i++) {
        arr.push(data[i].pid);
        if (data[i].id === id) {
            return arr
        }
        let children = data[i].children;
        if (children && children.length) {
            let result = findIndexArray(children, id, arr);
            if (result) return result
        }
        arr.pop()
    }
    return false
}

console.log(findIndexArray(data, 4, [])); // [0, 0, 0]


//


//获取当前节点的字节点
function getSelectItemChildrenIds(sourceData, keyValue, results=[]){
    for(let i=0;i<sourceData.length;i++){
        let item=sourceData[i];
        let children=item.children||[];
        if(keyValue){
            if(item.id===keyValue){
                getSelectItemChildrenIds(children,"",results);
            }
        }else{
            results.push(item.id);
        }
        if(children.length>0){
            getSelectItemChildrenIds(children,keyValue,results);
        }
    }
    return results;
}

//



//
console.log(getSelectItemChildrenIds(data,2,[]));
