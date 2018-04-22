import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    CardMedia,
    Grid,
    Typography
} from 'material-ui';

class LandingPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container alignItems="center" justify="center">
                <Grid item xs={12} align="center">
                    <CardMedia
                        className={classes.media}
                        image="/logo.png"
                        title="PCD"
                        component="img"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="display2" align="center">Planetside 2 Community Suite</Typography>
                </Grid>
            </Grid>
        );
    }
}

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LandingPage;