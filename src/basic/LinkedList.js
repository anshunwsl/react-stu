//

//
function LinkedList() {
    //

    function Node(element) {
        //
        this.element=element;
        //
        this.next=null;
    }

    //
    this.length = null;
    //
    this.head = null;
    //

    //


    LinkedList.prototype.append=function (element) {

        //
        let newNode=new Node(element);
        //
        if(!this.head){
            this.head=element;
        }else{
            //
            let current=this.head;
            //
            while (current.next){
                //
                current=current.next;
            }
            current.next=newNode;
        }
        //
        this.length++;
    }

}


//
//
//
//


//
let linkList=new LinkedList();
//
linkList.append({"name":"wsl",age:12});
linkList.append({"name":"yb",age:11});
linkList.append({"name":"cc",age:1});
linkList.append({"name":"qh",age:2});
//
console.log(JSON.stringify(linkList));
//
console.log(linkList);


//
reverseLinkedList(linkList);
//
console.log(linkList);

//
// 反转链彪
//
//
 function  reverseLinkedList(list) {
     //
     let head=linkList.head;
     //
     if(!head||!head.next){
         //
         return list;
     }
     //
     //
     let current=head;
     //
     let pre=null;
     let next=null;
     // 遍历节点
     while (current!==null){
         //
         next=current.next;
         pre=current;
         current=next;
     }
     //
     list.head=pre;
 }