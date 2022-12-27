import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h5 className={s.footerTitle}>Сергей Молчанов</h5>
                <span className={s.footerCopyright}>2022 Все права защищены </span>
            </div>
        </div>
    );
};

export default Footer;