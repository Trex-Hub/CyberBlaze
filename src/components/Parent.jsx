import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SpaceBackground from './assets/SpaceBackground.mp4';
import Hero from './Hero';

export default function Parent({ username }) {
    return (
        <Box sx={{ display: 'flex', position: 'relative' }}>
            <CssBaseline />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: 'hidden',
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src={SpaceBackground} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
            <Hero />
        </Box>
    );
}
