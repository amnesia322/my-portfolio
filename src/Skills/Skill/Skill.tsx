import React from 'react';
import s from './Skill.module.css'

const Skill = (props: any) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>props icon</div>
            <h3 className={s.title}>props title</h3>
            <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab animi consequatur deleniti doloremque ducimus expedita, facilis fugiat impedit
                (props description)
            </div>
        </div>
    );
};

export default Skill;