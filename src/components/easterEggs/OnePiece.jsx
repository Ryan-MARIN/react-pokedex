import React from 'react';
import { Stack } from '@mui/system';
import { Paper } from '@mui/material';

const OnePiece = () => {
    return (
        <Paper
            elevation={6}
            sx={{
                m: '0.5rem',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                '&:hover': {
                    m: '0.25rem',
                    borderRadius: '1rem',
                },
                bgcolor: 'black',
                width: '100%',
            }}
        >
            <Stack
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    '&:hover': { p: '0.25rem' },
                }}
            >
                <div style={{ height: '100%' }}>
                    <iframe
                        height="100%"
                        weight="100%"
                        src="https://www.youtube.com/embed/xPyJ2XhSKOI"
                        frameborder="0"
                    />
                </div>
            </Stack>
        </Paper>
    );
};

export default OnePiece;
