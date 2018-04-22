import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from 'material-ui';
import { COMMUNITY_GITHUB } from '../util/constants';

class FooterBar extends Component {
    render () {
        const { classes } = this.props;
        return (
            <div className={classes.footer}>
                <Grid container spacing={0} justify='center'>
                    <Grid item xs={1}>
                        <a href={COMMUNITY_GITHUB}>
                            <Typography align='center' variant='subheading'>
                                Source Code
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align='center'>
                            PlanetSide and all PlanetSide content are registered trademarks of Daybreak Game Company.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

FooterBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default FooterBar;