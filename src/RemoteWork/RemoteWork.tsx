import React from 'react';
import s from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${s.remoteWorkContainer}`} >
                <h3 className={s.title}>Рассматриваю варианты удаленной работы</h3>
                <button className={s.button}>Нанять меня</button>
            </div>
        </div>
    );
};

export default RemoteWork;