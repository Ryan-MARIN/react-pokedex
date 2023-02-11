import { ButtonBase } from '@mui/material';
import React, { useState } from 'react';

const LanguageSelector = () => {
    const languages = ['fr', 'gb', 'jp'];
    const [langIndex, setLangIndex] = useState(0);

    function switchLang() {
        langIndex === languages.length - 1 ? setLangIndex(0) : setLangIndex(langIndex + 1);
    }

    return (
        <ButtonBase onClick={switchLang} disableRipple>
            <img
                src={`https://flagsapi.com/${languages[langIndex].toUpperCase()}/shiny/32.png`}
                alt="lang"
            />
        </ButtonBase>
    );
};

export default LanguageSelector;
