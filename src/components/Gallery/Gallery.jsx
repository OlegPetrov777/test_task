import React from "react";
import style from './Gallery.module.css';
import NavBar from "../NavBar/NavBar";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


let Gallery = (props) => {
    let start = props.currentPage * props.pageSize + 1
    let end = (props.currentPage + 1) * props.pageSize

    return (<div>
        <NavBar onPageChanged={props.onPageChanged}/>

        <div>
            <div className={style.text_container}>
                <h1>Gallery</h1>
                <h3>Категория №{props.currentPage + 1}</h3>
            </div>

            <div className={style.photo_container}>
                {props.photos.slice(start - 1, end).map(photo => (<div className={style.photo_item}>
                    <div className={style.btn}>
                        <NavLink className={style.nav} to={`/photo-info/${photo.id}`}>
                            <p className={style.btn_text}>Подробнее</p>
                        </NavLink>
                    </div>

                    <img src={photo.thumbnailUrl}/>

                </div>))}
            </div>
        </div>
    </div>)
}

export default Gallery;
