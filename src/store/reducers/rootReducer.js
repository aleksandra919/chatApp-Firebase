const initState = {
    messages: [
        {text: '1Message', id: 1, user: 'Ola', type: 'client'},
        {text: '2Message', id: 2, user: 'Ola', type: 'host'},
        {text: '3Message', id: 3, user: 'Ola', type: 'client'},
      ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
        console.log("add message", action.message)
    }
    return state;
}

export default rootReducer;