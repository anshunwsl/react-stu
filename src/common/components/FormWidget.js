
//
import React from "react";


export  class FormWidget extends React.Component{
    //
    constructor(props) {
        super(props);
        //
        this.state={
            //
            value:"test..."
        };
        //
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    //
    //
    handleChange(event){
        //

        //
        console.log(event);

        //
        this.setState({
            //
            value:event.target.value
        });
        //
        //

        //
    }
    //
    handleSubmit(event){
        //

        //
        alert(`you input data is ${this.state.value}`);
        event.preventDefault();
    }

    render() {

        //

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>

                <input type="submit" value="submit"/>
            </form>
        );

        //
    }

}