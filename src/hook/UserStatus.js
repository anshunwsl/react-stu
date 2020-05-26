
///

import React from "react";
//
export class UserStatus  extends React.Component{
    //
    constructor(props) {
        super(props);
        //t

        this.state={
            name:"wangsl",
            age:32,
            address:"shenzhen"
        };
        //
        //
        this.handleItemClick=this.handleItemClick.bind(this);
    }
    handleItemClick(event){
        //
        this.setState({
            //
            name:"yb"
        });
    }

    //
    render() {
       return (<div>
           <h1>{this.props.name}</h1>

           <button onClick={this.handleItemClick}>Click</button>
           <div>{JSON.stringify(this.state)}</div>
       </div>);
    }
}