import {ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE} from '../const/index';

const noteReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            const generateId = new Date().getTime();
            state = [...state, {id : generateId, content: action.content}];
            return state;
        
        case EDIT_NOTE :
            const indexOfEditNote = state.findIndex((note) => note.id === action.id); 
            if(indexOfEditNote !== -1){
                state[indexOfEditNote].content = action.content;
            }
            return state;

        case REMOVE_NOTE:
            const isRemove = action.id;
            state = state.filter(note => {
                if(note.id === isRemove){
                    return false;
                }
                return true;
            });
            return state;
        default:
            return state;
    }
};

export default noteReducers;