import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';

export default class App extends Component {

    componentDidMount() {
        console.log('componentDidMount APP');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount APP')
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/b" component={Home} />
                    <Route path="/c" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/posts" component={Posts} />
                </div>
            </Router>
        );
    }
}