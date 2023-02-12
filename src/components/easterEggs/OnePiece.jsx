import React from 'react';
import { Paper } from '@mui/material';

const OnePiece = () => {
    return (
        <Paper
            elevation={6}
            sx={{
                m: '0.5rem',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                width: '100%',
                bgcolor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <iframe
                title="one-piece"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xPyJ2XhSKOI"
                style={{ borderStyle: 'none' }}
            />
        </Paper>
    );
};

export default OnePiece;
