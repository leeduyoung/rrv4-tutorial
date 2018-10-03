import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class B extends React.Component {

    componentDidMount() {
        console.log('componentDidMount B');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount B')
    }

    render() {
        return (
            <div style={{paddingTop: "64px"}}>
                B
                <br />
                <button onClick={this.goBack.bind(this)}>go back</button>

                <br />
                <br />
                <button style={{height: "60px", border: "1px solid blue"}} onClick={this.goAbout.bind(this)}>Go About</button>                
            </div>
        );
    }

    goBack() {
        this.props.history.goBack();
    }

    goAbout() {
        this.props.goAbout();
    }
}