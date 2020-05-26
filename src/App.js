import React,{Suspense,lazy} from 'react';
import './App.css';
// import "bulma/bulma.sass";
import "bulma/css/bulma.min.css";
import {ThemeButton} from "./common/components/ThemeButton";

import {HashRouter, Route,Switch} from "react-router-dom";
//
import asyncComponent from "./hoc/asyncComponent";


// import User from "./common/components/User";
// import LoginPage from "./pages/login/LoginPage";
import Loading from "./common/components/Loading";

import appRouters from "./router";
//
const  LoginPage=asyncComponent(()=>import("./pages/login/LoginPage"));
//
const   User=asyncComponent(()=>import("./common/components/User"));
//



//

function App() {
    return (
        <HashRouter>

            <Switch>

                <Suspense fallback={Loading}>
                    <Route exact={true} path={appRouters.login} component={LoginPage}/>
                    <Route exact={true} path={appRouters.home} component={User}/>
                </Suspense>

            </Switch>

        </HashRouter>
    );
}

export default App;
