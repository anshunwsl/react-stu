
import React from "react";
//
//
import appRouters from "../../router";
class LoginPage extends React.Component{
    //
    constructor(props) {
        super(props);
        //
        this.handleLogin=this.handleLogin.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
    }
    //
    handleLogin(event){
        //
        //

        //
        this.props.history.push(appRouters.home);
    }
    //
    handleCancel(event){
        //

    }
    //
    render() {
        return (
            <div>
                <div>
                    <label>UserName:</label>
                    <input placeholder="user name"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input placeholder="password.."/>
                </div>

                <div>

                    <button onClick={this.handleLogin}> Login</button>
                    <button onClick={this.handleCancel}> Cancel</button>
                </div>
            </div>
        );
    }

}

//
export  default  LoginPage;
