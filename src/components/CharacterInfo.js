import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardContent,
    CardMedia,
    Grid, List, ListItem,
    Typography
} from 'material-ui';
import classNames from 'classnames';
import { convertMinsToHrsMins } from '../util/misc';

class CharacterInfo extends Component {
    render() {
        const { classes, character } = this.props;
        const idToStyle = {1: classes.vs, 2: classes.nc, 3: classes.tr};
        const characterI = (character) => {
            const creation = new Date(character.times.creation*1000);
            const lastLogin = new Date(character.times.last_login*1000);
            const totalCerts = parseInt(character.certs.spent_points, 10) + parseInt(character.certs.available_points, 10);
            return (
                <List>
                    <ListItem className={classes.listItem}>ID: {character.character_id}</ListItem>
                    <ListItem className={classes.listItem}>Rank: {character.battle_rank.value} (Prestige: {character.prestige_level})</ListItem>
                    <ListItem className={classes.listItem}>Created on: {creation.toLocaleDateString()}</ListItem>
                    <ListItem className={classes.listItem}>Last Login: {lastLogin.toLocaleDateString()}</ListItem>
                    <ListItem className={classes.listItem}>Time Played: {convertMinsToHrsMins(character.times.minutes_played)}</ListItem>
                    <ListItem className={classes.listItem}>Certs total: {totalCerts}</ListItem>
                </List>
            )
        };
        if (!!character) {
            return (
                <Card className={classNames(classes.card, idToStyle[character.faction_id])}>
                    <Grid container alignItems="center" justify="center">
                        <Grid item xs={12} align="center">
                            <CardMedia
                                className={classes.factionIcon}
                                image={`/factions/${character.faction_id}.png`}
                                title="Faction"
                                component="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {character.name.first}
                                </Typography>
                                {characterI(character)}
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            );
        }
        return null;
    }
}

CharacterInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired
};

export default CharacterInfo;