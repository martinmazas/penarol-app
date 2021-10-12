import React, { useContext, useEffect } from 'react';
import Form from './Form';
import { LanguageContext } from './LanguageContext';

export default function AddPlayer(props) {
    const { setNavValues } = useContext(LanguageContext);
    const { values, setValues, mode } = props;

    useEffect(() => setNavValues(4));

    return (
        <Form values={values} setValues={setValues} mode={mode} />
    )
}