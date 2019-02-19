import React, { Component } from 'react';
import { object } from 'prop-types';
import Styles from './styles.scss';

import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import TopRated from '../../components/top-rated/index';
import Home from '../../components/home/index';
import Header from '../../components/layout/header/index';

export class App extends Component {


    render () {

        const routerContainer =  (<Switch>
            <Route component = { Home } exact path = '/' />
            <Route exact component = { TopRated } path = '/movie/top-rated' />
            <Redirect from = '*' to = { '/' } />
        </Switch>);

        return (
            <BrowserRouter>
                <div className = { Styles.container }>
                    <Header />
                    { routerContainer }
                </div>
            </BrowserRouter>);
    }
}
