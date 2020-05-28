import React from "react";
import {NameForm} from "../NameForm";
//
import PropTypes from 'prop-types';


//


class Post extends React.Component {
    //

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            //
            users: [
                {
                    id: "001",
                    name: "user001",
                }, {
                    id: "002",
                    name: "user002",
                }, {
                    id: "003",
                    name: "user003",
                }, {
                    id: "004",
                    name: "user004",
                },
            ]
        };
    }

    //

    //
    handleItemClick(itemData) {
        //
        // alert(`you click ${itemData.name}`);
        //
        //
        let id = (Math.random() * 1000).toFixed(5).replace(".", "_")
        this.setState({
            //
            users: [...this.state.users, {id: id, name: id}]
        })
    }

    //

    render() {

        //
        return React.createElement("div", {
                className: "container"
            },
            React.createElement("div", {},

                // 自定义组件需要传入组件类，不能使用字符串.
                React.createElement(NameForm, {})
            ),

            React.createElement("ul", {className: "list-group"},

                this.state.users.map((item) => {
                    return React.createElement("li", {
                        key: item.id,
                        className: "list-item",
                        onClick: (event) => {
                            this.handleItemClick(item);
                        }
                    }, item.name)
                })
            )
        );
    }

}


//

Post.propTypes = {
    name: PropTypes.string.isRequired,
    //
    items:PropTypes.array.isRequired
};
export default Post;