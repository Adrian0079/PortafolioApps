import { FileDownload, GitHub, LinkedIn } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled';

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
        justifyContent:"space-between" //Ajustamos horizontalmente
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
            color:'black'}}>
                Ing. Jorge Adrian Guillen Barraza
            </Typography>
            <Avatar 
            alt="Remy Sharp" 
            src="" 
            sx={{
            display: {xs:"block", sm:"none"}}}/>

            <Box display="flex" alignItems="center" gap={2}>
                
                <a href='https://www.google.com/'>
                <LinkedIn/>
                </a>

                <a href='https://www.google.com/'>
                <GitHub />
                </a>

                <IconButton>    
                    <a href='https://www.google.com/'>
                        <RedButton variant="outlined" startIcon={<FileDownload /> } >
                            Download CV
                        </RedButton>
                    </a>
                </IconButton>
               


            </Box>
            
        </MyToolbar>
    </AppBar>
  )
}

export default Nvar