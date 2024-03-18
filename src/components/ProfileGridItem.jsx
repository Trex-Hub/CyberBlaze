import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme, textStyle }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    boxShadow: 'none',
    ...textStyle, 
}));

const ProfileGridItem = ({ label, value, style }) => {
    return (
        <Item textStyle={style}>
            {label} - {value}
        </Item>
    );
};

export default ProfileGridItem;