import React, { useContext, useEffect } from 'react'
import text from '../Text/text.json';
import { LanguageContext } from './LanguageContext';
import SingleLineImageList from './SingleLineImageList';
import stadiumImgs from './StadiumImgs';

function Stadium() {
    const { language, setNavValues } = useContext(LanguageContext);

    useEffect(() => {
        setNavValues(2);
    });

    return (
        <div>
            <div style={styles.root}>
                <p style={styles.text}>{language === 'english' ? text.stadium : text.estadio}</p>
            </div>
            <SingleLineImageList pic={stadiumImgs} />
        </div>
    )
}

const styles = {
    root: {
        marginTop: '5ch',
        marginLeft: '27%',
        paddingBottom: '5ch',
    },
    text: {
        width: '70%',
        wordWrap: "break-word",
        color: "white",
    }
    // text: {
    //     // width: '80ch',
    //     // marginLeft: '30%',
    //     padding: '5% 0',
    //     wordWrap: "break-word",
    //     color: "white"
    // },
}

export default Stadium