import React from "react";
import createReactClass from "create-react-class";

//

let Es5User = createReactClass({
    //
    render: function () {

        return React.createElement("div", {},
            React.createElement("h1", {
                //
            }, this.props.name),
        );
    }
});

//
export default Es5User;