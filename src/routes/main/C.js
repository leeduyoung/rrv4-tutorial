import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class C extends React.Component {

    componentDidMount() {
        console.log('componentDidMount C');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount C')
    }

    render() {
        return (
            <div style={{paddingTop: "64px"}}>
                C
                <br />
                <button onClick={this.goBack.bind(this)}>go back</button>
            </div>
        );
    }

    goBack() {
        console.log(this.props.history.goBack());
    }
}