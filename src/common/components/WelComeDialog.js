/**
 * @description  通过组合、继承方式实现组件扩展
 *
 * */
//
import React from "react";
//
//
function Dialog(props) {

    return (
        <div>
            <div className="dialog-title">
                {props.title}
            </div>

            <div className="dialog-content">
                {props.content}
            </div>
        </div>
    );
}

export  class WelComeDialog extends React.Component{
    //
    constructor(props) {
        super(props);
    }
    //

    //
    render() {
        return (
            //
            <Dialog title="wang shang lang" content="hello the world."/>
        );
    }

}