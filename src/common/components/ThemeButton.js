///
import React from "react";

//
export class ThemeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userObject: {
                name: "ddd"
            }
        };
        //
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //
        this.setState({
            //
            userObject: {
                name: `item is ${Math.random()*1000}`
            }
        });
    }

    //
    render() {
        //
        return (

            <div>
                <h3>{this.state.userObject.name}</h3>

                //
                <div>
                    <button onClick={this.handleClick}>CLICK</button>
                </div>

            </div>
        );
    }
}