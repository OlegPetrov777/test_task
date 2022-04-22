import React from "react";
import style from './AboutMe.module.css'
import photo from '../../static/photo.jpg'

let AboutMe = (props) => {
    return (<div>
            <h1 className={style.head}><b>Обо мне</b></h1>
            <div className={style.aboutMe_container}>
                <div className={style.info}>
                    <img className={style.img}
                         src={photo}/>
                    <h6>Петров Олег Игоревич</h6>
                    <h6>20 лет</h6>
                    <h6>oleg.petrov.job@gmail.com</h6>
                </div>
                <div className={style.main}>
                    <p className={style.head2}> Я получаю высшее образование, обучаясь на 3 курсе Финансового
                        Университета при Правительстве РФ
                        на направлении «Прикладная информатика».<br/><br/>
                        В свободное от самообразования и учебы в университете
                        время я люблю готовить, заниматься дрессировкой двух своих маленьких собачек, играть с друзьями
                        в футбол, пейнтбол и компуктер)) Также я катаюсь по полям и лесам на квадроцикле, но
                        иногда на нем переворачиваюсь. Иными словами я люблю экстремальный спорт, а он не очень любит
                        меня.<br/><br/>
                        В основном, конечно, свои вечера я провожу в спокойствии дома, но и активному
                        времяпрепровождению посвящаю не мало времени.
                    </p>
                </div>
            </div>
        </div>)
}

export default AboutMe;