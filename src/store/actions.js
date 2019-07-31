export const ACTION_SAVE_NOTE = 'ACTION_SAVE_NOTE';
export const ACTION_SHOW_CURRENT_NOTE = 'ACTION_SHOW_CURRENT_NOTE';
export const ACTION_HIDE_CURRENT_NOTE = 'ACTION_HIDE_CURRENT_NOTE';
export const ACTION_SHOW_FORM_NEW_NOTE = 'ACTION_SHOW_FORM_NEW_NOTE';
export const ACTION_EDIT_NOTE = 'ACTION_EDIT_NOTE';
export const ACTION_DELETE_NOTE = 'ACTION_DELETE_NOTE';
export const ACTION_SAVE_COMMENT = 'ACTION_SAVE_COMMENT';


export const noteToSave = (data) => {
    return {
        type: ACTION_SAVE_NOTE,
        payload: data
    }
};

export const showCurrentNote = (data) => {
    return {
        type: ACTION_SHOW_CURRENT_NOTE,
        payload: data
    }
};

export const hideCurrentNote = () => {
    return {
        type: ACTION_HIDE_CURRENT_NOTE,
    }
};

export const showFormNewNote = () => {
    return {
        type: ACTION_SHOW_FORM_NEW_NOTE,
    }
};

export const edidCurrentNote = () => {
    return {
        type: ACTION_EDIT_NOTE,
    }
};

export const deleteNote = (id) => {
    return {
        type: ACTION_DELETE_NOTE,
        payload: id
    }
};

export const addComment = (data) => {
    return {
        type: ACTION_SAVE_COMMENT,
        payload: data
    }
};

