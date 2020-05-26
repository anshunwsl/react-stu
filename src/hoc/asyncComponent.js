import React from "react";

//
function asyncComponent(loader) {

    //
    return class HocComponent extends React.Component {
        //

        //
        constructor(props) {
            super(props);
            //
            this.state = {
                //
                component: null

            };
        }

        //
        componentDidMount() {
            //
            loader().then((comp) => {
                //
                this.setState({
                    //
                    component: comp.default
                });

            });
        }

        //

        render() {
            let Component = this.state.component;
            //
            return (Component ? <Component {...this.props}/> : null);
        }
    };

}


//
export  default asyncComponent;
