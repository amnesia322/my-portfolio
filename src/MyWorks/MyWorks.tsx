import React from 'react';
import Work from "./Work/Work";
import s from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'

const MyWorks = () => {
    return (
        <div className={s.myWorks}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <div className={s.titleBlock}>
                    <h3 className={s.myWorksTitle}>Мои Работы</h3>
                </div>
                <div className={s.worksContainer}>
                    <Work/>
                    <Work/>
                </div>
            </div>
            
        </div>
    );
};

export default MyWorks;