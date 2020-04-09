import React from "react";
//
export  class SelectControl extends React.Component{
    //
    constructor(props) {
        super(props);
        //
        this.state={
            //
            value:"init data."
        };
        //
        this.handleChange=this.handleChange.bind(this);
        //
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    //
    handleSubmit(event){
        //
        //
        alert(`you select item is ${this.state.value}`);
        //
        event.preventDefault();

    }
    //
    handleChange(event){
        //

        //
        this.setState({
            //
            value:event.target.value
        });
    }

    //
    render() {

        return(
            //
            <form onSubmit={this.handleSubmit}>

                <select value={this.state.value}  onChange={this.handleChange}>
                    <option  value="data1">data1</option>
                    <option  value="data2">data2</option>
                    <option  value="data3">data3</option>
                    <option  value="data4">data4</option>
                </select>

                <input type="submit" value="submit"/>
            </form>
        );
    }
}