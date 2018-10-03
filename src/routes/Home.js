import React from 'react';
// import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import A from './main/A';
import B from './main/B';
import C from './main/C';
import Header from '../components/Header';

export default class Home extends React.Component {

    componentDidMount() {
        console.log('componentDidMount Home');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount Home')
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={A} />
                    <Route path="/b" render={(props) => <B {...props} goAbout={() => this.goAbout()}/>}/>
                    <Route path="/c" component={C} />
                </div>
            </Router>
        );
    }

    goAbout() {
        this.props.history.push("/about");
    }
}