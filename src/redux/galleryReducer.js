const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let IS_FETCHING = 'IS_FETCHING';
let SET_PHOTOS = 'SET_PHOTOS';

let initialState = {
    photos: [],
    currentPage: 0,
    pageSize: 6,
    totalCount: 24,
    isFetching: false
}

const galleryReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_PHOTOS:
            return {
                ...state, photos: action.photos
            }
        default: {
            return state;
        }
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const setIsFetchingActionCreator = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export const setPhotosActionCreator = (photos) => {
    return {type: SET_PHOTOS, photos}
}

export default galleryReducer;