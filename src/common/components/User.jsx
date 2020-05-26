import React from "react";

class User extends React.Component {
    //
    constructor(props) {
        super(props);
        //
        this.state={
            user:{
                name:"user001",
                id:"tet001"
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
            </div>
        );
    }

}


export default User;
