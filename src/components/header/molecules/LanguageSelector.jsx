import { ButtonBase, Box } from '@mui/material';
import React, { useState } from 'react';
import languages from 'ressources/languages';

const LanguageSelector = () => {
    const [langIndex, setLangIndex] = useState(0);

    function switchLang() {
        langIndex === languages.length - 1 ? setLangIndex(0) : setLangIndex(langIndex + 1);
    }

    return (
        <ButtonBase onClick={switchLang} disableRipple>
            <Box display={{ xs: 'none', md: 'block' }}>Language&nbsp;:&nbsp;</Box>
            <Box className="mono" display={{ xs: 'none', sm: 'block' }}>
                {languages[langIndex].toUpperCase()}
            </Box>
            &nbsp;
            <img
                src={`https://flagsapi.com/${languages[langIndex].toUpperCase()}/shiny/32.png`}
                alt={`lang_${languages[langIndex]}`}
            />
        </ButtonBase>
    );
};

export default LanguageSelector;
