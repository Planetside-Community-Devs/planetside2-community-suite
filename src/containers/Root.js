import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from '../routes';
import { theme } from '../style/theme'


class Root extends Component {
    render() {
        // this.props.persistor.purge();
        const {store, persistor, history} = this.props;
        return (
            <div>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <MuiThemeProvider theme={theme}>
                            <ConnectedRouter history={history}>
                                <Routes/>
                            </ConnectedRouter>
                        </MuiThemeProvider>
                    </PersistGate>
                </Provider>
            </div>
        );
    }
}

Root.propTypes = {
    history: PropTypes.object.isRequired,
    persistor: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Root;