/**
 *@description 容器组件， 可以指定组件中需要插入的子组件内容， 功能类似与Vue框架中的
 * 具名 <slot></slot>
 *
 * 备注： 主要学习React中组合与继承的章节
 * */
//
import React from "react";
//
export  class SplitPanel extends React.Component{
    ///
    constructor(props) {
        super(props);
    }

    //
    render() {
        return (
            <div>

                <div> {this.props.left}</div>

                <div>{this.props.right}</div>
            </div>
        );
    }

}