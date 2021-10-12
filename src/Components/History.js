import React, { useContext, useEffect, useState } from 'react'
import text from '../Text/text.json';
import { LanguageContext } from './LanguageContext';
// import SingleLineImageList from './SingleLineImageList';
// import itemData from './itemData';
// import Images from './Images';

const styles = {
    root: { 
        marginTop: '5ch', 
        marginLeft: '27%',
        paddingBottom: '5ch',
        // width: '40%'
    },
    text: {
        width: '70%',
        wordWrap: "break-word",
        color: "white",
    }
}

export default function History() {
    const { language, setNavValues } = useContext(LanguageContext);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setNavValues(0);
    });

    useEffect(() => {
        language === 'english' ? setHistory(text.history.split("\n")) : setHistory(text.historia.split("\n"));
    }, [language]);

    return (
        <div style={styles.root}>
            {/* <SingleLineImageList pic={itemData} /> */}
            {/* <Images /> */}
            {history.map((histo, i = 0) => <p key={i++} style={styles.text}>{histo}</p>)}
        </div>
    )

}