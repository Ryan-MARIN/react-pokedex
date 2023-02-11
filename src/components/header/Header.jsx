import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import LanguageSelector from './atoms/LanguageSelector';
import Logo from './atoms/Logo';
import SearchBar from './molecules/SearchBar';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Logo />
                <div style={{ flexGrow: 1, minWidth: '16px' }} />
                <LanguageSelector />
                <div style={{ minWidth: '16px' }} />
                <SearchBar />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
