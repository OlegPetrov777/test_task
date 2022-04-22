let SET_PHOTO_URL = 'SET_PHOTO_URL';
let SET_PHOTO_TITLE = 'SET_PHOTO_TITLE';
let SET_PHOTO_ID = 'SET_PHOTO_ID';
let IS_FETCHING = 'IS_FETCHING';


let initialState = {
    id: 0,
    url: '',
    title: '',
    isFetching: false
}

const photoInfoReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PHOTO_ID:
            return {
                ...state, id: action.id
            }
        case SET_PHOTO_URL:
            return {
                ...state, url: action.url
            }
        case SET_PHOTO_TITLE:
            return {
                ...state, title: action.title
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default: {
            return state;
        }
    }
}

export const setPhotoIdActionCreator = (id) => {
    return {type: SET_PHOTO_ID, id}
}
export const setPhotoUrlActionCreator = (url) => {
    return {type: SET_PHOTO_URL, url}
}
export const setPhotoTitleActionCreator = (title) => {
    return {type: SET_PHOTO_TITLE, title}
}
export const setIsFetchingActionCreator = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export default photoInfoReducer;