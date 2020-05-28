import React from "react";
import Post from "./nojsx/Post";
import Es5User from "./nojsx/ES5User";

class User extends React.Component {
    //
    constructor(props) {
        super(props);
        //
        this.state = {
            user: {
                name: "user001",
                id: "tet001"
            }
        };
    }

    componentDidMount() {
        //
        this.setState({
            //
            user: {
                //
                id: "001",
                name: "user001"
            },
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.name}</h1>

                <Post name="wsl" items={[1,1,2]}/>

                <Es5User name="wangshanglang....."/>
            </div>
        );
    }

}


export default User;
