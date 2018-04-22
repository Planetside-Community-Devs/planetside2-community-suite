import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Typography
} from 'material-ui';

class EventsPage extends Component {
    render() {
        return (
            <Grid container alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Typography variant='display1' align='center'>Under construction</Typography>
                </Grid>
            </Grid>
        );
    }
}

EventsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default EventsPage;