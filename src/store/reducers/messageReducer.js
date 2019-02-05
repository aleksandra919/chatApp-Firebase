
const initState = {
    messages: []
}

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            console.log("add message", action.message)
            return state;
        case 'ADD_MESSAGE_ERROR':
            console.log('add message error', action.err)
            return state;
        default: 
            return state;
    }
}

export default messageReducer;