import React, { Component } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import RowAndColumnSpacing from './ProfileContent';
import Button from '@mui/material/Button';
import CustomTextField from './CustomTextField'
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
const gradientStyle = {
    background: 'linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

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
        const inputStyles = {
            input: {
                color: 'whitesmoke', // Text color
                '&::placeholder': {
                    color: 'white', // Placeholder color
                },
                '&:-webkit-input-placeholder': {
                    color: 'white', // Placeholder color for Safari/Chrome
                },
                '&::-moz-placeholder': {
                    color: 'white', // Placeholder color for Firefox
                    opacity: 1, // Ensure compatibility with Firefox
                },
                '&:-ms-input-placeholder': {
                    color: 'white', // Placeholder color for IE
                },
                '&:focus': {
                    borderColor: 'white !important', // Border color on focus
                },
            },
        };
        return (
            <div style={{ backgroundColor: ' ' }}>
                <div style={{ textAlign: 'center' }}>


                    <Typography variant="h3" gutterBottom style={{ ...customFont, fontWeight: 600, marginBottom: '0.3rem', marginTop: '12rem', color: 'whitesmoke' }}>
                        Social Media Profile
                    </Typography>
                    <Typography variant="h3" gutterBottom style={{ ...customFont, fontWeight: 600, marginBottom: '1rem', marginTop: '0.3rem', color: 'whitesmoke' }}>
                        <span style={gradientStyle}>
                            Authentication {' '}
                        </span>
                        Portal
                    </Typography>
                    <Typography variant="h5" gutterBottom style={{ ...customFont, fontWeight: 500, marginBottom: '12rem', color: 'whitesmoke' }}>
                        Let's Secure your online identity
                    </Typography>

                    <Box display="flex" justifyContent="center" marginBottom={17} marginTop={10}>
                        <CustomTextField
                            label="Enter Username"
                            id="username"
                            style={{ ...inputStyles, width: '40%', marginRight: '10px' }}
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            InputLabelProps={{
                                style: { color: 'whitesmoke' } // Placeholder color
                            }}
                            InputProps={{
                                style: inputStyles.input,
                            }}
                        />



                        <Button variant="contained" onClick={this.handleSearchClick} style={{ ...instaColor, width: '12vw' }}>Search</Button>

                    </Box>
                </div>

                <Box display="flex" justifyContent="center" marginBottom={10}>
                    <RowAndColumnSpacing username={this.state.username} searchClicked={this.state.searchClicked} />
                </Box>
                <div style={{ backgroundColor: 'white' }}>
                    <FAQ >

                    </FAQ>
                </div>
            </div>
        );
    }
}

export default Hero;