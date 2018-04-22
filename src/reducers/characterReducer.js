export default function reducer (state={
    character: null,
    inputValue: "",
    error: null
}, action){
    switch(action.type) {
        case "SET_CHARACTER": {
            return {
                ...state,
                character: action.payload
            }
        }
        case "CHANGE_INPUT": {
            return {
                ...state,
                inputValue: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}