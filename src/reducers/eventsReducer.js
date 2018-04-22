export default function reducer (state={
    events: [],
    error: null
}, action){
    switch(action.type) {
        case "ADD_EVENT": {
            return {
                ...state,
                events: [...state.events, action.payload],
            }
        }
        case "REMOVE_EVENT": {
            return {
                ...state,
                events: state.events.filter(events => {
                    return events.id !== action.payload;
                })
            }
        }
        default: {
            return state;
        }
    }
}