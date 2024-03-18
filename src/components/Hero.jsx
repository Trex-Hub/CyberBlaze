
import React, { Component } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RowAndColumnSpacing from './ProfileContent';
import Button from '@mui/material/Button';
import FAQ from './FAQ';


const customFont = {
    fontFamily: '"Lexend Deca", sans-serif',
    fontOpticalSizing: 'auto',
    fontStyle: 'normal'
};

const instaColor = {
    background: 'linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};



class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            searchClicked: false,
        };
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };

    handleSearchClick = () => {
        this.setState({ searchClicked: true });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom style={{ ...customFont, fontWeight: 500, marginBottom: '2rem' }}>
                    Fake Account Check
                </Typography>
                <Typography variant="h6" gutterBottom style={{ ...customFont, fontWeight: 500, marginBottom: '4rem' }}>
                    Let's Secure your online identity
                </Typography>
                <Box display="flex" justifyContent="center" marginBottom={10}>
                    <TextField
                        label="Enter Username"
                        id="username"
                        style={{ ...customFont, width: '70%', marginRight: '10px' }}
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <Button variant="contained" onClick={this.handleSearchClick} style={{ ...instaColor, }}>Search</Button>

                </Box>
                <Box display="flex" justifyContent="center" marginBottom={10}>
                    <RowAndColumnSpacing username={this.state.username} searchClicked={this.state.searchClicked} />
                </Box>
                <FAQ>

                </FAQ>
            </div>
        );
    }
}

export default Hero;
