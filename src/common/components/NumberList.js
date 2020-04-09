import  React from "react";
//
export  class NumberList extends React.Component{
    //
    constructor(props) {
        super(props);
        //类似于Vue中的data属性
        this.state={
            //
            info:"testdd"
        };
        //
    }
    //

    render() {

        let items=this.props.items.map((item)=>{
            return (<li key={item.id}>{item.name}</li>);
        });
        //
        return (
            <ul>{items}</ul>
        );
    }

}