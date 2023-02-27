import { MenuItem, NativeSelect, Select } from '@mui/material';
import React from 'react';
import languages from 'ressources/languages';

const LanguageSelector = ({ onLanguageChange, language }) => {
    return (
        <Select
            value={'aaa'}
            onChange={onLanguageChange}
            sx={{
                minWidth: '140px',
                color: 'white',
            }}
        >
            {languages.map((lang) => {
                return <MenuItem key={lang.code}>{lang.name}</MenuItem>;
            })}
        </Select>
    );
};

export default LanguageSelector;
