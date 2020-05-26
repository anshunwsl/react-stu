//
import React from "react";
import {Link} from "react-router-dom";

class UserList extends React.Component {

    constructor(props) {
        super(props);
        //
        //
        this.state = {
            //
            users: [
                {
                    id: "001",
                    name: "user001"
                }, {
                    id: "002",
                    name: "user002"
                }, {
                    id: "003",
                    name: "user003"
                }, {
                    id: "004",
                    name: "user004"
                }, {
                    id: "005",
                    name: "user005"
                },
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                        {/* 在应用中用 Link 去链接路由 */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

//

export default UserList;