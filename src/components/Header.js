import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.css';



export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="item">A</Link>
                <Link to="/b" className="item">B</Link>
                <Link to="/c" className="item">C</Link>
            </div>
        );
    }
}