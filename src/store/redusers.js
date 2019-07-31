import {ACTION_SAVE_NOTE,
        ACTION_SHOW_CURRENT_NOTE,
        ACTION_HIDE_CURRENT_NOTE,
        ACTION_SHOW_FORM_NEW_NOTE,
        ACTION_EDIT_NOTE,
        ACTION_DELETE_NOTE,
        ACTION_SAVE_COMMENT
    } from './actions';

const initialState = {
    notes: [],
    comments: [],
    visibleCurrentNote: false,
    visibleAddNewNote: false,
    visibleEditNewNote: false,
    lastId: 0,
    currentNote: {}
}

const getNextId = (lastId) => {
    return lastId + 1;
}

export const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SAVE_COMMENT:
            let newComment = action.payload;
            let nextId = getNextId(state.lastId);
            newComment.id = nextId;
            return {
                ...state,
                lastId: nextId,
                comments: [
                    ...state.comments,
                    action.payload
                ]
            };
        
        case ACTION_SHOW_CURRENT_NOTE:
            return {
                ...state,
                visibleCurrentNote: true,
                currentNote: action.payload
            };

        case ACTION_SHOW_FORM_NEW_NOTE:
            return {
                ...state,
                visibleAddNewNote: true,
            };

        case ACTION_HIDE_CURRENT_NOTE:
            return {
                ...state,
                visibleAddNewNote: false,
                visibleCurrentNote: false,
                visibleEditNewNote: false
            };

        case ACTION_EDIT_NOTE:
            return {
                ...state,
                visibleEditNewNote: true
            };

        case ACTION_SAVE_NOTE:
            const noteCurrentId = action.payload.id;

            if (noteCurrentId) {
                const itemIndex = state.notes.findIndex((el) => el.id === noteCurrentId);
                const item = state.notes[itemIndex];
                const newItem = {
                    id: item.id,
                    name: action.payload.name,
                    content: action.payload.content
                };

                return {
                    ...state,
                    visibleAddNewNote: false,
                    visibleEditNewNote: false,
                    currentNote: newItem,
                    // visibleCurrentNote: false,
                    notes: [
                        ...state.notes.slice(0, itemIndex),
                        newItem,
                        ...state.notes.slice(itemIndex + 1) 
                    ] 
                }
            } else {
                const newNote = action.payload;
                newNote.id = getNextId(state.lastId);
                return {
                    ...state,
                    lastId: getNextId(state.lastId),
                    visibleAddNewNote: false,
                    visibleEditNewNote: false,
                    visibleCurrentNote: false,
                    notes: [
                        ...state.notes, newNote
                    ] 
                }
            };

            case ACTION_DELETE_NOTE:
                const noteDeleteId = action.payload;
                const itemIndex = state.notes.findIndex((el) => el.id === noteDeleteId);
                const newArrComments = state.comments.filter( (el) => el.idCurrentNote !== noteDeleteId );
                console.log(newArrComments);

                return {
                    ...state,
                    comments: newArrComments,
                    visibleAddNewNote: false,
                    visibleEditNewNote: false,
                    visibleCurrentNote: false,
                    notes: [
                        ...state.notes.slice(0, itemIndex),
                        ...state.notes.slice(itemIndex + 1) 
                    ] 
                };

    
        default:
            return state
    }

    
}