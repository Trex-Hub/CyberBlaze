import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Gauge from 'react-svg-gauge';
import Paper from '@mui/material/Paper';
import ProfileGridItem from './ProfileGridItem';

const FlexContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    boxShadow: 'none',
}));

function RowAndColumnSpacing({ username, searchClicked }) {
    const [updatedUsername, setUpdatedUsername] = useState(username);

    useEffect(() => {
        if (searchClicked) {
            setUpdatedUsername(username);
        }
    }, [searchClicked, username]);

    const gaugeValue = 9;

    const getColor = (value) => {
        const red = Math.round((1 - value / 10) * 255);
        const green = Math.round((value / 10) * 255);
        return `rgb(${red}, ${green}, 0)`;
    };

    const defaultFollowerCount = 0;
    const defaultFollowingCount = 0;
    const defaultPostCount = 0;
    const defaultProfileBio = ' ';
    const dateOfJoining = '';

    const textStyle = {
        fontSize: '16px',
        // fontWeight: '',
        color: 'black',
    };

    return (
        <Box sx={{ width: '90%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Item>
                        <FlexContainer>
                            <Avatar
                                alt="Avatar"
                                src=""
                                sx={{ width: 166, height: 157.5 }}
                            />
                            <span>@{updatedUsername}</span>
                        </FlexContainer>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Item>
                        <Gauge
                            value={gaugeValue}
                            width={200}
                            height={180}
                            min={0}
                            max={10}
                            color={getColor(gaugeValue)}
                            label='Authenticity Score'
                        />
                    </Item>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ProfileGridItem label="Follower Count" value={defaultFollowerCount} style={textStyle} />
                    </Grid>
                    <Grid item xs={6}>
                        <ProfileGridItem label="Following Count" value={defaultFollowingCount} style={textStyle} />
                    </Grid>
                    <Grid item xs={6}>
                        <ProfileGridItem label="Private Account" value={String(false).charAt(0).toUpperCase() + String(false).slice(1)} style={textStyle} />
                    </Grid>
                    <Grid item xs={6}>
                        <ProfileGridItem label="Post Count" value={defaultPostCount} style={textStyle} />
                    </Grid>
                    <Grid item xs={6}>
                        <ProfileGridItem label="Profile Bio" value={defaultProfileBio} style={textStyle} />
                    </Grid>
                    <Grid item xs={6}>
                        <ProfileGridItem label="Date of Joining" value={dateOfJoining} style={textStyle} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default RowAndColumnSpacing;
