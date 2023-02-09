import React from "react";
import logoPokedexLarge from "../../ressources/logo-pokedex.svg";
import logoPokedexSmall from "../../ressources/logo-pokedex-small.svg";
import { Box } from "@mui/material";

const Logo = () => {
    return (
        <Box
            component="img"
            sx={{
                content: {
                    xs: `url(${logoPokedexSmall})`,
                    sm: `url(${logoPokedexLarge})`,
                },
            }}
            alt="logo-pokedex"
            height={50}
        />
    );
};

export default Logo;
