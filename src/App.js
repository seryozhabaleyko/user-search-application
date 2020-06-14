import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import AlertState from 'context/Alert/AlertState';
import GithubState from 'context/Github/GithubState';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import About from 'pages/About';
import Profile from 'pages/Profile';

import './App.css';

function App() {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <header className="header">
                        <Navbar />
                    </header>

                    <main className="main">
                        <div className="container">
                            <Switch>
                                <Route path="/About" component={About} />
                                <Route path="/@:username" component={Profile} />
                                <Route path="/" component={Home} />
                            </Switch>
                        </div>
                    </main>
                </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;