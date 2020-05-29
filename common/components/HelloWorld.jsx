import React from "react";

import PropTypes from "prop-types";

//

class HelloWorld extends React.Component {
    //

    constructor(props) {
        super(props);
    }

    //
    render() {
        //
        return (<h3>say hello to {this.props.name}</h3>);
    }
}

HelloWorld.propTypes = {
    name: PropTypes.string.isRequired
};
//

HelloWorld.defaultProps = {
    name: "wangshanglang ..."
};

export  default HelloWorld;