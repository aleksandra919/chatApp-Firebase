
const initState = {
    messages: [
        {text: '1Message', type: 'client'},
        {text: '2Message', type: 'host'},
        {text: '3Message', type: 'client'},
        {text: '4Message', type: 'host'},
      ]
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