import { FileDownload, GitHub, LinkedIn } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled';
import yo from '../images/yo.jpg'


const Nvar = () => {

    const RedButton = styled(Button)({
        backgroundColor: "#FF383B",
        color: "#fff",
        margin: 5,  
        "&:hover": {
          backgroundColor:"#F986A9"
        },
      });

    const MyToolbar = styled(Toolbar)({
        display:"flex", //Colocamos flex para meter elementos en row
        justifyContent:"space-between", //Ajustamos horizontalmente
        backgroundColor:"black"
    })


    return (
    <AppBar 
    position='sticky' //position='sticky' => fija a la Appbar
    > 
        <MyToolbar>
            <Typography
            variant='h5' 
            fontWeight="bold" 
            sx={{
            display: {xs:"none", sm:"block"}, 
            letterSpacing: '1.4px', 
            textTransform:'uppercase', 
            color:'white'}}>
                Ing. Jorge Adrian Guillen Barraza
            </Typography>
            <Avatar 
            alt="Yo" 
            src={yo} 
            sx={{
            display: {xs:"block", sm:"none"}}}/>

            <Box display="flex" alignItems="center" gap={2}>
                
                <a href='https://www.linkedin.com/in/jorge-adri%C3%A1n-guillen-barraza-a79566230/' target="_blank">
                <LinkedIn/>
                </a>

                <a href='https://github.com/Adrian0079' target="_blank">
                <GitHub />
                </a>

                <IconButton>    
                    
                    <RedButton variant="outlined" startIcon={<FileDownload /> } href='https://drive.google.com/file/d/1m8qpoM0KRhVyCNATNgfXuRI5m7LPxC-y/view?usp=sharing' target="_blank">
                        Download CV
                    </RedButton>
                   
                </IconButton>
               


            </Box>
            
        </MyToolbar>
    </AppBar>
  )
}

export default Nvar