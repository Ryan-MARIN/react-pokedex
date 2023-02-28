import { MenuItem, Select } from '@mui/material';
import React from 'react';
import languages from 'ressources/languages';

const LanguageSelector = ({ onLanguageChange, language }) => {
    return (
        <Select
            value={language}
            onChange={onLanguageChange}
            sx={{
                minWidth: '150px',
                color: 'white',
                '& .MuiSelect-select': {
                    py: '0.25em',
                    display: 'flex',
                    alignItems: 'center',
                },
            }}
        >
            {languages.map((lang) => {
                return (
                    <MenuItem key={lang.code} value={lang.code}>
                        <img alt="flag" src={`https://flagsapi.com/${lang.flag}/shiny/32.png`} />
                        <span>&nbsp;{lang.name}</span>
                    </MenuItem>
                );
            })}
        </Select>
    );
};

export default LanguageSelector;
