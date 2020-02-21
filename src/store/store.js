import { createStore} from 'redux'

//Reducer
const INITIAL_STATE = {
    data: ['REACT', 'REACT NATIVE', 'NODEJS', 'teste'],
    qty: 1
}

function courses(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_COURSE':
            return {
                ...state, data: [...state.data, action.title], qty: [action.qty]
            } 
        default:
            return state
    }
}

const store = createStore(courses)

export default store;
