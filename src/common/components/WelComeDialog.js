/**
 * @description  通过组合方式实现组件扩展,  无需使用继承，
 * 如果有非UI的代码需要复用，建议直接封装成JS模块。
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