import { action } from "react-dom/test-utils";

const reduccer = (state,action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                mylist: [...state.mylist,action.payload]
            }
       case 'DELETE_FAVORITE':
           return{
               ...state,
               mylist: state.mylist.filter(item => item.id !== action.payload)
           }
        case 'lOGIN_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGAOUT':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGA':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing:state.trends.find(item => item.id === Number(action.payload)) ||
                state.originals.find(item => item.id === Number(action.payload))||
                []
            }
        default:
            return state;
    }
}

export default reduccer;