
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default class head extends Component {

    render() {
        return (
            <div className="head">
                <BrowserRouter  >
                <Route to="/##" path="/">{this.props.name}</Route>
                </BrowserRouter>
            </div>
        )
    }
}
