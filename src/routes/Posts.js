import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Posts extends React.Component {

    componentDidMount() {
        console.log('componentDidMount Posts');
        window.scrollTo(0,0);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount Posts')
    }

    state = {
        num: 0
    }

    render() {
        console.log(this.props);
        return (
            <div style={{paddingTop: "64px"}}>
                Posts
                <br />
                <button onClick={this.goBack.bind(this)}>go back</button>

                <button style={{height: "60px", border: "1px solid blue"}} onClick={this.goHome.bind(this)}>Go HOME</button>
            </div>
        );
    }

    goBack() {
        this.props.history.goBack();
    }

    goHome() {
        this.props.history.push('/');
    }
}