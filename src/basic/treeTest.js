// 2.	请用js实现将一个二维数组转换成树结构
// 例如：将下面数据
 let source=   [
    ["a", "aa", "aaa", "aaaa"],// 第一层
        ["b", "bb", "bbb"],//第二个元素
        ["a", "ab", "aba"],
        ["a", "aa", "aab"]
    ];

//
function  arrayToTree(data=[]){
    //
    let tree=[];
    data.forEach((item,index)=>{
        //
        let childData=_arrayToTreeItem(item);
        //
        _mergeTreeData(tree,childData);
    });
    //
    //
    let result=[];
    tree.forEach((item)=>{
        //
        result.push(item.child[0]);
    });
    return result;
}
//通过表创建每个树的字节点
function _arrayToTreeItem(array){
    //
   if(array.length<0){
       //
       return;
   }
    let itemData=null;
   let childItem={
       name:array[0],
       child:[]
   };
   //
    let lastItem=childItem;
    //
    for(let  i=0;i<array.length;i++){
        //
        itemData={
            //
            name:array[i],
            child:[]
        };
        //
        lastItem.child=[itemData];
        //
        lastItem=itemData;
    }
   //
    return childItem;
}
//
//去除属性结构中的重复项目
function _mergeTreeData(tree,list){
    //
    if(!tree){
        //
        return;
    }
    //
    let itemData=list.name;
    tree.some((item)=>{
        //
        if(item.name===itemData){
            //
            _mergeTreeData(item.child,list.child[0]);
            return true;
        }else{
            //
            tree.push(list);
        }
    });
    if(tree.length===0){
        //
        tree.push(list);
    }
}
//
console.log(JSON.stringify(arrayToTree(source)));


//转为：
let target= [
    {
        "name" : "a",
        "child" : [
            {
                "name" : "aa",
                "child" : [
                    {
                        "name" : "aaa",
                        "child" : [
                            {
                                "name" : "aaaa",
                                "child" : []
                            }
                        ]
                    },
                    {
                        "name" : "aab",
                        "child" : []
                    }
                ]

            },
            {
                "name" : "ab",
                "child" : [
                    {
                        "name": "aba",
                        "child" : []
                    }
                ]

            }
        ]
    },
    {
        "name": "b",
        "child" : [
            {
                "name" : "bb",
                "child" : [
                    {
                        "name" : "bbb",
                        "child" : []
                    }
                ]
            }
        ]
    }

];