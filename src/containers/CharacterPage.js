import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    TextField
} from 'material-ui';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { SERVICE_ID } from '../util/constants';
import { changeInput, setCharacter } from '../actions/characterActions';
import CharacterInfo from '../components/CharacterInfo';

class CharacterPage extends Component {
    handleKeyDown(e) {
        if (e.key === "Enter") {
            this.props.handleSubmit(this.props.inputValue);
        }
    }

    handleInputChange(value) {
        this.props.onInputChange(value);
    }

    render() {
        const { classes, inputValue } = this.props;

        return (
            <div>
                <Grid container justify='center'>
                    <Grid item xs={12} lg={3}>
                        <TextField
                            id="character"
                            label="Character Name"
                            className={classes.textField}
                            value={inputValue}
                            onChange={(e) => this.handleInputChange(e.target.value)}
                            onKeyPress={(e) => this.handleKeyDown(e)}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item xs={12} lg={6}>
                        <CharacterInfo classes={classes} character={this.props.character}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

CharacterPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    connect(
        (store) => {
            return {
                inputValue: store.character.inputValue,
                character: store.character.character
            };
        },
        (dispatch) => {
            return {
                onInputChange: (input) => dispatch(changeInput(input)),
                handleSubmit: (charName) => {
                    const url = `https://census.daybreakgames.com/s:${SERVICE_ID}/get/ps2/character?name.first=*${charName}`;
                    axios.get(url)
                        .then(res => {
                            console.log("Res", res.data["character_list"][0]);
                            const character = res.data["character_list"][0];
                            dispatch(setCharacter(character));
                        })
                },
            }
        }
    )
)(CharacterPage);