const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
};

export function addEvent(title, type) {
    return {
        type: "ADD_EVENT",
        payload: {
            id: generateKey(title),
            title: title,
            type: type
        }
    }
}

export function removeEvent(id) {
    return {
        type: "REMOVE_EVENT",
        payload: id
    }
}