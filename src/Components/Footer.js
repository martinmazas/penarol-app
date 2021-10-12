import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const styles = {
    footer: {
        flexShrink: 0,
        textAlign: 'right',
        backgroundColor: 'yellow',
        color: 'black',
        position: 'fixed',
        display: 'block',
        width: '100%',
        height: '4ch',
        bottom: 0
    }
}

export default function Footer() {
    const handleLinkRef = (page) => {
        console.log(page);
    }

    return (
        <div style={styles.footer}>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/oficialcap"><InstagramIcon onClick={() => handleLinkRef('instagram')} /></a>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/OficialCAP"><FacebookIcon onClick={() => handleLinkRef('facebook')} /></a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/OficialCAP"><TwitterIcon onClick={() => handleLinkRef('twitter')} /></a>
        </div>
    )
}