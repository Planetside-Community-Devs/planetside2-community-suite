import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import character from './characterReducer';
import events from './eventsReducer';

export default combineReducers({
    character,
    events,
    form: formReducer
})