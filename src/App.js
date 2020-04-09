import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "./common/User.js";
import {DseMap} from "./common/components/DseMap";
import {DseToggle} from "./common/components/DseToggle";

// import "bulma/bulma.sass";
import "bulma/css/bulma.min.css";
import {NumberList} from "./common/components/NumberList";
import {FormWidget} from "./common/components/FormWidget";
import {NameForm} from "./common/components/NameForm";
import {SelectControl} from "./common/components/SelectControl";
import {Container} from "./common/components/Container";
import {SplitPanel} from "./common/components/SplitPanel";
import {WelComeDialog} from "./common/components/WelComeDialog";

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <User name="wangsl" content="userdddd"/>

                <DseToggle toggleName="Toggle Button"/>

                <DseMap/>

                <NumberList items={[{id: "ttt", name: "item1"}, {id: "ttt1", name: "dddd"}]}/>

                <NameForm/>

                <Container>
                    <h1>nihaoma</h1>
                    <p>diu</p>
                </Container>

                <SplitPanel
                    left={<SelectControl/>}
                    right={<FormWidget/>}/>

                <WelComeDialog/>

            </header>
        </div>
    );
}

export default App;
