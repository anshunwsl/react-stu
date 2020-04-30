//
import  {cloneDeep} from "lodash";



//
function deepClone(source) {
    let jsonStr=JSON.stringify(source);
    return JSON.parse(jsonStr);
}
//
let target={
    name:"test001",
    user:{
        name:"wangsl"
    }
};
///
let newObject=deepClone(target);
newObject.user.name="王尚浪";
newObject.name="test002";
//
console.log(JSON.stringify(target));
console.log("-----------");
console.log(JSON.stringify(newObject));

