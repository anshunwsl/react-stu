import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "./common/User.js";
import {DseMap} from "./common/components/DseMap";
import {DseToggle} from "./common/components/DseToggle";

// import "bulma/bulma.sass";
import "bulma/css/bulma.min.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <User name="wangsl" content="userdddd"/>

                <DseToggle toggleName="Toggle Button"/>

                <DseMap/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
