import {combineReducers, createStore} from "redux";
import galleryReducer from "./galleryReducer";
import photoInfoReducer from "./photoInfoReducer";


let reducers = combineReducers({
    galleryPage: galleryReducer,
    photoInfoPage: photoInfoReducer
});

let store = createStore(reducers);
export default store;