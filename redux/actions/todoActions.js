export const todoActionType = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
};


export const addTodo = (data) => {
    return (dispatch) => {
        dispatch({
        type: todoActionType.ADD_TODO,
        payload: data
        });
    };
}

export const deleteTodo = (key) => {
    return (dispatch) => {
        dispatch({
        type: todoActionType.DELETE_TODO,
        key: key
        });
    };
}