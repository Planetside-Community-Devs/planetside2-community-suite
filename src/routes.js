import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { CHARACTER_PATH, EVENTS_PATH, ROOT_PATH } from './util/constants';
import App from './App';
import HomePage from './components/HomePage';
import CharacterPage from './containers/CharacterPage';
import EventsPage from './components/EventsPage';

class Routes extends Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route path={ROOT_PATH} component={HomePage}/>
                    <Route path={CHARACTER_PATH} component={CharacterPage}/>
                    <Route path={EVENTS_PATH} component={EventsPage}/>
                </Switch>
            </App>
        );
    }
}

export default Routes
