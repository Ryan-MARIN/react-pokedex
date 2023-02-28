import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import LanguageSelector from './molecules/LanguageSelector';
import Logo from './atoms/Logo';
import SearchBar from './molecules/SearchBar';

const Header = ({ searchQuery, onInputSearchBar, language, onLanguageChange }) => {
    return (
        <AppBar>
            <Toolbar>
                <Logo />
                <SearchBar
                    display={{ xs: 'none', md: 'inherit' }}
                    searchQuery={searchQuery}
                    onInputSearchBar={onInputSearchBar}
                    sx={{ mx: '1rem' }}
                />
                <Box
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'inherit', md: 'none' },
                    }}
                />
                <LanguageSelector onLanguageChange={onLanguageChange} language={language} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
