import React from 'react';
import s from '../MyWorks.module.css'

const Work = () => {
    return (
        <div className={s.workBlock}>
            <div className={s.imageBlock}>
                <button className={s.button}>Смотреть</button>
            </div>
            <div className={s.textBlock}>
                <span className={s.workTitle}>Название проекта</span>
                <p className={s.workDescription}>Краткое описание</p>
            </div>
        </div>
    );
};

export default Work;