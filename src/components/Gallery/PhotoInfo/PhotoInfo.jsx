import React from "react";
import style from './PhotoInfo.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";


let PhotoInfo = (props) => {
    return (<div className={style.photoInfo_container}>

        <div className={style.container}>
            <NavLink className={style.btn_back} to={'/gallery'}>
                <Button variant="outline-secondary">Назад</Button>{' '}
            </NavLink>

            <h1>Подробности о картинке #{props.id}</h1>
            <h4>{props.title}</h4>
        </div>
        <div className={style.img_container}>
            <img src={props.url}/>
        </div>
    </div>)
}

export default PhotoInfo;