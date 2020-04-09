import React from "react";

//
export class DseToggle extends React.Component {
    //

    constructor(props) {
        super(props);
        //
        this.state = {
            //
            isToggleOn: false
        };
        //
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    //
    handleItemClick(event) {
        //
        //
        this.setState((state, props) => ({
            //
            isToggleOn: !state.isToggleOn
        }));
        //
        alert("test");

    }

    //
    handleItem1Click1 = (event) => {
        //此方法可以免去在构造函数中绑定this

    };

    render() {
        return (
            //
            <div>
                <h3>{this.props.toggleName}</h3>
                <button className="button is-info" onClick={this.handleItemClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
            </div>
        );

    }
}