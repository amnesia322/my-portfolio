import React from 'react';
import ContactsForm from "./ContactsForm";
import s from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h4 className={s.title}>Контакты</h4>
                <ContactsForm />
            </div>
        </div>
    );
};

export default Contacts;