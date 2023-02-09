import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Logo />
                <div style={{ flexGrow: 1, minWidth: "16px" }} />
                <SearchBar />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
