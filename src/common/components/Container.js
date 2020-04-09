import React from "react";
//
// 组合组件， 使用特殊的prop ,children 来传递子组件
// 功能类似于Vue 框架的 <slot></slot>
export  class Container extends React.Component{
    //
    constructor(props) {
        super(props);
        //
    }

    //
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}