import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Paper,
    withStyles
} from 'material-ui';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { styles } from '../style/general'
import HeaderBar from './HeaderBar';
import CharacterPage from '../containers/CharacterPage';
import LandingPage from './LandingPage';
import FooterBar from './FooterBar';
import EventsPage from './EventsPage';

const locToTab = {'/': 0, '/home': 0, '/character': 1, '/events': 2};

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: !!this.props.location.pathname ? locToTab[this.props.location.pathname] : 0
        }
    }

    handleTabClick(e, val) {
        this.setState({
            selectedTab: val
        })
    }

    render() {
        const { classes } = this.props;
        let tabContent = () => {
            switch (this.state.selectedTab) {
                default:
                    return <Typography variant="display2">Couldn't find the requested site</Typography>;
                case 0:
                    return <LandingPage classes={classes}/>;
                case 1:
                    return <CharacterPage classes={classes}/>;
                case 2:
                    return <EventsPage classes={classes}/>
            }
        };
        return (
            <div className={classes.root}>
                <HeaderBar selectedTab={this.state.selectedTab} handleTabClick={(e, val) => this.handleTabClick(e, val)}/>
                <Grid container justify="center" className={classes.main}>
                    <Grid item xs={11}>
                        <Paper className={classes.paper}>
                            {tabContent()}
                        </Paper>
                    </Grid>
                </Grid>
                <FooterBar classes={classes}/>
            </div>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    withRouter
)(HomePage);