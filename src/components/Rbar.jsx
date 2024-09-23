import { Box, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import FluidSIM from '../images/FluidSIM.png'
import Html_image from '../images/html5.svg'
import html5V2 from '../images/html5V2.png'
import html3 from '../images/html3.svg'
import Css_image from '../images/css3.svg'
import React_image from '../images/react.svg'
import arduino from '../images/arduino.png'
import labview from '../images/labview.png'
import javascript_image from '../images/javascript.svg'
import office from '../images/office.svg'
import sql_image from '../images/Sql.svg'
import TS from '../images/Typescript.png'
import sesesp from '../images/Sesesp2.png'
import solid from '../images/solid.png'



const Rbar = () => {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        pers1:400,
        pers2:533,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
    <Box
    border={0}
    bgcolor={'#6d9bdf'} //Color de fondo
    flex={2} //Usamos flexbox para dividir la pantalla en las 3 columnas
    p={2} //Padding (distancia entre el contenido y el borde del componente)
    >
      <Typography variant='h5' fontWeight="bold" mb={2} textAlign='center'>Skills:</Typography>
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} pers1={6}>
          <img src={Html_image} />
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={Css_image}/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={javascript_image}/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={React_image}/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={sql_image } width="90%"/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={office}/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={arduino} width="110%"/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={labview} width="110%"/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={FluidSIM} width="100%"/>
        </Grid>
        <Grid item xs={12} pers1={6}>
          <img src={TS} width="100%"/>
        </Grid>
        <Grid item xs={12} pers1={6.5}>
          <img src={solid} width="125%"/>
        </Grid>

        <Grid sx={{
          mt:7,
          ml:{xs:0, sm:5},
          border:0,
          display:{xs:"block",  sm:"200px", md:"none"},
          // justifyContent:"center"
        }}>
          <Typography 
            fontSize={22}
            fontWeight="bold"
            ml={{xs:"6px", pers1:"6px", pers2:"6px",  sm:"6px", md:"6px", lg:"6px", xl:"6px"}}
          >
            Experience
          </Typography>
          <Box
            border={1} 
            width={{xs:"150px",  sm:"200px", md:"200px"}}
            height={{xs:"220px", pers1:"200px", pers2:"235px",  sm:"225px", md:"250px", lg:"290px", xl:"380px"}} 
            sx={{ 
              overflow: 'hidden', // Esto recorta la imagen para que coincida con el borde
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
              borderRadius: 1,
              margin:0, 
              justifyContent:"center",
              alignItems:"center",
              textAlign:"center"   
            }} >
              <img src={sesesp} 
              width= '100%' 
              objectFit= 'cover'
              height="50"
              
                // borderRadius='5px' // Ajusta el valor según el radio que desees
              
              />
              <Typography variant='h4' 
              fontSize="2.5vw"
              fontWeight="bold" 
              textAlign="center" 
              justifyContent="center" 
              mt={2}
              color="white"
              sx={{
                fontSize:{xs:"3vw", pers1:"2.5vw", sm:"2.2vw", md:"2.5vw", lg:"2.5vw", xl:"2.5vw"}
              }}
              >
                Secretariado Ejecutivo del Sistema Estatal de Seguridad Pública
              </Typography>
              <Typography mt={2}  variant='h6' fontWeight="bold" textAlign="center"
              color="lightcyan"
              sx={{
                fontSize:{xs:"3.3vw", pers1:"2.5vw", sm:"1.98vw", md:"2.5vw", lg:"2.5vw", xl:"2.5vw"}
              }}
              >
                March 2022 - June 2023 - Morelia, Michoacán.
              </Typography>
            </Box>

        </Grid>
      </Grid>
      

      


    </Box>
    </ThemeProvider>
  )
}

export default Rbar