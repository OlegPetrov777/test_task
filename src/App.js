import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import PhotoInfoContainer from "./components/Gallery/PhotoInfo/PhotoInfoContainer";
import AboutMe from "./components/AboutMe/AboutMe";


const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="block">
                <Route path={'/gallery'} render={() => <GalleryContainer/>}/>
                <Route path={'/about-me'} render={() => <AboutMe/>}/>
                <Route path={'/photo-info/:id'} render={() => <PhotoInfoContainer/>}/>
                <Route path={'/'} exact render={() => <Redirect to={'/gallery'}/>}/>
            </div>
        </div>
    );
}

export default App;
