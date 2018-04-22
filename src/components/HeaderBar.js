import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, Tab, Tabs } from 'material-ui';
import { CHARACTER_PATH, EVENTS_PATH, ROOT_PATH } from '../util/constants';

class HeaderBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Tabs value={this.props.selectedTab} onChange={(e, val) => this.props.handleTabClick(e, val)}>
                    <Tab label="Home" component={Link} to={ROOT_PATH} />
                    <Tab label="Character" component={Link} to={CHARACTER_PATH} />
                    <Tab label="Events" component={Link} to={EVENTS_PATH} />
                </Tabs>
            </AppBar>
        );
    }
}

HeaderBar.propTypes = {
    handleTabClick: PropTypes.func,
    selectedTab: PropTypes.number
};

export default HeaderBar;