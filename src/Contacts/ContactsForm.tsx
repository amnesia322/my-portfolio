import React from 'react';
import {Field, Form, Formik} from "formik";
import s from './Contacts.module.css'

const ContactsForm = () => {
    return (
        <div className={s.contactsFormBlock}>
            <Formik
                initialValues={{ name: "", email: "", other: '' }}
                onSubmit={ (values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className={s.contactsForm}>
                    <Field name="name" type="text" />
                    <Field name="email" type="email" />
                    <Field name="other" type="text" component='textarea' />
                    <button type="submit">Отправить</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactsForm;