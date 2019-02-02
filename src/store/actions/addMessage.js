export const addMessage = (message) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({type: 'ADD_MESSAGE', message: message})
    }
}