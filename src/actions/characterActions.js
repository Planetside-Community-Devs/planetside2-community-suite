export function setCharacter(character) {
    return {
        type: "SET_CHARACTER",
        payload: character
    }
}

export function changeInput(input) {
    return {
        type: "CHANGE_INPUT",
        payload: input
    }
}