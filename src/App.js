import React from 'react';
import './App.css';
// import "bulma/bulma.sass";
import "bulma/css/bulma.min.css";
import {ThemeButton} from "./common/components/ThemeButton";

import {HashRouter, Route} from "react-router-dom";

import UserList from "./common/components/UserList";
import User from "./common/components/User";
import Login from "./common/components/Login";

//


function App() {
    return (
        <HashRouter>
            <Route path="/" component={Login}>
                <Route path="about" component={ThemeButton}/>

                <Route path="/users" component={UserList}>

                    <Route path="/user/:userId" component={User}/>
                </Route>
                {/*<Route path="/" component={NameForm}/>*/}
            </Route>
        </HashRouter>
    );
}

export default App;
