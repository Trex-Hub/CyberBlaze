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

export default inputStyles;
