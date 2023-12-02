import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FluidSIM from '../images/FluidSIM.png'
import Html_image from '../images/html5.svg'
import Css_image from '../images/css3.svg'
import React_image from '../images/react.svg'
import arduino from '../images/arduino.png'
import labview from '../images/labview.png'
import javascript_image from '../images/javascript.svg'
import office from '../images/office.svg'
import sql_image from '../images/Sql.svg'
import TS from '../images/Typescript.png'




const Rbar = () => {
  return (
    <Box
    border={0}
    bgcolor={'#4FC9BC'} //Color de fondo
    flex={2} //Usamos flexbox para dividir la pantalla en las 3 columnas
    p={2} //Padding (distancia entre el contenido y el borde del componente)
    >
      <Typography variant='h5' fontWeight="bold" mb={2} textAlign='center'>Skills:</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img src={Html_image} />
        </Grid>
        <Grid item xs={6}>
          <img src={Css_image}/>
        </Grid>
        <Grid item xs={6}>
          <img src={javascript_image}/>
        </Grid>
        <Grid item xs={6}>
          <img src={React_image}/>
        </Grid>
        <Grid item xs={6}>
          <img src={sql_image } width="90%"/>
        </Grid>
        <Grid item xs={6}>
          <img src={office}/>
        </Grid>
        <Grid item xs={6}>
          <img src={arduino} width="110%"/>
        </Grid>
        <Grid item xs={6}>
          <img src={labview} width="110%"/>
        </Grid>
        <Grid item xs={6}>
          <img src={FluidSIM} width="100%"/>
        </Grid>
        <Grid item xs={6}>
          <img src={TS} width="100%"/>
        </Grid>
      </Grid>


    </Box>
  )
}

export default Rbar