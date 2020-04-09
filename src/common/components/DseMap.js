import React from "react";

//

export class DseMap extends React.Component {
    //
    constructor(props) {
        super(props);
        //
        this.state = {date: new Date()};
    }

    // 声明周期方法
    //组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        //
        this.timerId = setInterval(() => {
            // this.setState({
            //     //
            //     date: new Date()
            // });

            // 解决状态的异步更新
            this.setState((state,props)=>{
                //
               return {
                   //
                   date:new Date()
               };
            })
        }, 1000);
    }

    //生命周期方法中清除计时器,卸载
    componentWillUnmount() {
        //
        clearInterval(this.timerId);

    }

    //
    render() {
        //
        return (
            //
            <div>
                <h1>计时器</h1>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }

}