import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import RemoteWork from "./RemoteWork/RemoteWork";
import Contacts from "./Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skills />
            <RemoteWork/>
            <Contacts />
        </div>
    );
}

export default App;
