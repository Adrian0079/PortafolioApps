
import { DarkMode, GitHub, LinkedIn } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material'
import React from 'react'
import sesesp from '../images/Sesesp2.png'
import yo from '../images/yo.jpg'
import styled from 'styled-components'

const Sbar = () => {

  
  const StyledImg = styled('img')({
    borderRadius: '8px', // Establece el radio de las esquinas
    boxShadow: '40px 30px 80px rgba(0, 0, 0, 0.2)', // Añade sombra
  }); 
  

  return (
    <Box 
    bgcolor={"#CECEF9"}
    flex={2} //Usamos flexbox para dividir la pantalla en las 3 columnas
    p={2} //Padding (distancia entre el contenido y el borde del componente)
    sx={{
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)', // Sombra
      display: {xs: "none", sm:"none", md: "block"}
    }}
    >
      <Box 
      position={'fixed'}
      >
        <List>
            <ListItem disablePadding>
              
                <ListItemButton component="a" href='https://github.com/Adrian0079' target="_blank">
                  <ListItemIcon>
                    <GitHub />
                  </ListItemIcon>
                  <ListItemText primary="Github" />
                </ListItemButton>  
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href='https://www.linkedin.com/in/jorge-adri%C3%A1n-guillen-barraza-a79566230/' target="_blank">
                  <ListItemIcon>
                    <LinkedIn />
                  </ListItemIcon>
                  <ListItemText primary="Linkedin" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                
                  <ListItemIcon>
                    <StyledImg src={yo} width={300} />
                  </ListItemIcon>
                
            </ListItem>

            
          </List>

          <Typography fontWeight="bold">Experience:</Typography>

          <Box border={1} width={290} height={380} sx={{ maxWidth: 750, maxHeight: 800,
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
            borderRadius: 1,
            margin:0, 
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center"   
          }} >
            <img src={sesesp} width="290" height="50"/>
            <Typography variant='h4' fontSize={25} fontWeight="bold" textAlign="center" justifyContent="center" mt={4}>
              Secretariado Ejecutivo del Sistema Estatal de Seguridad Pública
            </Typography>
            <Typography mt={2}  variant='h6' fontSize={27} fontWeight="bold" textAlign="center">
              March 2022 - June 2023 - Morelia, Michoacán.
            </Typography>
          </Box>

        </Box>
    </Box>
  )
}

export default Sbar