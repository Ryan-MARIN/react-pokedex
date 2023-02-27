import { ButtonBase, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import languages from 'ressources/languages';

const LanguageSelector = () => {
    const [langIndex, setLangIndex] = useState(0);

    function switchLang() {
        langIndex === languages.length - 1 ? setLangIndex(0) : setLangIndex(langIndex + 1);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Langue</InputLabel>
                <Select>
                    {/* {pokemons.map((pokemon, index) => { */}
                    <MenuItem>
                        <img
                            src={`https://flagsapi.com/${languages.fr.toUpperCase()}/shiny/32.png`}
                            alt={`lang_${languages.fr}`}
                        />
                    </MenuItem>
                    {/* })} */}
                </Select>
            </FormControl>
        </Box>
    );
};

export default LanguageSelector;
