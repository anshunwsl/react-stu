
import  React, {useState,useEffect} from "react"


export function Friend(props) {
    //
    //
    let [count,setCount]=useState(0);
    //
    useEffect(()=>{
        //;
        document.title=`you click ${count} times`;
    });
    //
    return (<div>
       <h1>{props.title}</h1>

        <div>{props.content}</div>

        <div className="results">
            {count}
        </div>

        <button onClick={()=>setCount(count+1)}>
            ChangeContent
        </button>

    </div>);
}