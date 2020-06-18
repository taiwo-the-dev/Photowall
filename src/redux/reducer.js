import posts from '../data/posts';
import {combineReducers} from 'redux';

function comment(state = {}, actions){
    switch(actions.type){
        case 'ADD_COMMENT': 
        if(!state[actions.postId]){
            return {...state, [actions.postId]: [actions.comment]}
        }else{
            return {...state, [actions.postId]: [...state[actions.postId], actions.comment]}
        }    
        case 'LOAD_COMMENT': return actions.comment
        default: return state
    }
}

function post(state = posts, actions){
    switch (actions.type) {
        case 'REMOVE_PHOTO': return [...state.slice(0, actions.index), ...state.slice(actions.index + 1)]
        case 'ADD_PHOTO': return [...state, actions.post]
        case 'LOAD_PHOTO': return actions.posts
        default: return state
    }
}

const rootReducer = combineReducers({comment, post})
export default rootReducer