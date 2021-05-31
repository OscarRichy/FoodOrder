import { todoActionType } from "../actions/todoActions";

const initialState = {
    todoList: []
}

const todoReducer = (state= initialState, action) => {
   switch(action.type) {
        case todoActionType.ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat({
                    key: Math.random(),
                    name: action.payload
                })
            }
        case todoActionType.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter( (item) =>
                    item.key !== action.key
                )
            }

        default:
         return state;
    }
}

export default todoReducer;