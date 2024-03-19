import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MumbaiPolice from './assets/mumbaipolice.jpg'


const avatarStyles = {
    height: '156px',
    width: '156px',
    border: '2px solid black',
    borderRadius: '2rem',
    padding: '10px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    marginBottom: '1.5rem',
    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'
    }
};



function ReportHere() {
    return (
        <Box id='report'>
            <Typography variant="h4" pt={10} mb={7} textAlign="center" fontWeight={700} sx={{ color: '#00bbffde' }}>
                Report Here
            </Typography>
            <Stack spacing={10} direction="row" justifyContent="center" alignItems="center" >
                <div>
                    <a href="https://mumbaipolice.gov.in/OnlineComplaints?ps_id=0" target='_blank' rel="noreferrer">
                        <Avatar variant="square" src={MumbaiPolice} sx={avatarStyles} />
                    </a>
                    <Typography variant='h6' align="center">Mumbai Police</Typography>
                </div>
                <div>
                    <a href="https://cybercrime.gov.in/Accept.aspx" target='_blank' rel="noreferrer">

                        <Avatar
                            variant="square"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUC0wEivbALkduZeddSLFMLm4pEs_QPDbYJ_sNzovCsg&s"
                            sx={avatarStyles}
                        />
                    </a>
                    <Typography variant='h6' align="center">CyberCrime Portal</Typography>
                </div>
                <div>
                    <a href="https://www.instagram.com/hacked/" target='_blank' rel="noreferrer">

                        <Avatar variant="square" src="https://cdn.mos.cms.futurecdn.net/6dDoc8GV9fYUPExgLYPqqT.jpg" sx={avatarStyles} />
                    </a>
                    <Typography variant='h6' align="center">Instagram</Typography>
                </div>
            </Stack>
        </Box >
    );
}

export default ReportHere;
