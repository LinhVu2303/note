import {ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE} from '../const/index';

//Them note 
export const actAddNote = (content) => {
    return {
        type : ADD_NEW_NOTE,
        content
    };
};

//Xoa note 
export const actRemoveNote = (id) => {
    return{
        type : REMOVE_NOTE,
        id
    };
};

//Sua note
export const actEditNote = (id, content) => {
    return {
        type : EDIT_NOTE,
        id,
        content
    };
};