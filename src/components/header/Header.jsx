import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import LanguageSelector from './molecules/LanguageSelector';
import Logo from './atoms/Logo';
import SearchBar from './molecules/SearchBar';

const Header = ({ searchQuery, onInputSearchBar }) => {
    return (
        <AppBar>
            <Toolbar>
                <Logo />
                <div style={{ flexGrow: 1, minWidth: '1rem' }} />
                <SearchBar searchQuery={searchQuery} onInputSearchBar={onInputSearchBar} />
                <div style={{ flexGrow: 1, minWidth: '0.5rem' }} />
                <LanguageSelector />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
