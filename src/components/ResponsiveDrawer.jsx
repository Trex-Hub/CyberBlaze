import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SpaceBackground from './assets/SpaceBackground.mp4';

import Hero from './Hero';

const drawerWidth = 240;

const iconMap = {
    'Home': <HomeIcon />,
    'About Us': <InfoIcon />,
    'Features': <DehazeIcon />,
    'Pricing': <CurrencyRupeeIcon />,
    'Settings': <SettingsIcon />,
    'Logout': <LogoutIcon />,
    'Login': <LoginIcon />,
};

export default function PermanentDrawerLeft({ username }) {
    const isLoggedIn = true;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="hidden"
                anchor="left"
            >
                <Toolbar> CyberBlaze's Project</Toolbar>
                <Divider />
                <List disablePadding>
                    {['Home', 'About Us', 'Features', 'Pricing'].map((text, index) => (
                        <ListItem key={text} sx={{ backgroundColor: '#f8fafb', marginBottom: '0.5rem' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {iconMap[text]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List disablePadding>
                    {['Settings', isLoggedIn ? 'Logout' : 'Login'].map((text, index) => (
                        <ListItem key={text} sx={{ backgroundColor: '#f8fafb', marginBottom: '0.5rem' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {iconMap[text]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    position: 'relative', // Ensure proper positioning of video
                    overflow: 'hidden', // Hide overflowing content from the Box
                }}
            >
                {/* HTML5 video element */}
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Make the video cover the entire Box
                        zIndex: -1, // Ensure the video stays behind the content
                    }}
                >
                    <source src={SpaceBackground} type="video/mp4" />
                    {/* Add other video formats as needed */}
                    Your browser does not support the video tag.
                </video>

                {/* Hero component */}
                <Hero />
            </Box>
        </Box>
    );
}
