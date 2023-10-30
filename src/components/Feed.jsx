import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Typography } from '@mui/material'
import React from 'react'
import BeastStore_image from '../images/BeastStore.png'
import Tict from '../images/tictactoe.png'
import pokimg from '../images/pokedex.png'

const Feed = () => {

  

 

  return (
    <Box
    bgcolor={'#E7E7EA'} //Color de fondo
    flex={4} //Usamos flexbox para dividir la pantalla en las 3 columnas
    p={2} //Padding (distancia entre el contenido y el borde del componente)
    >

      {/* Card ---------------------------------------> */}
     <Card sx={{ maxWidth: 750, maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        margin:2    
    }} 
      
    >
        <CardMedia
          component="img"
          height="400"
          image={BeastStore_image}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            Beast Store App
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            Javascript + React + Material UI + API 
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://comfy-froyo-2aa994.netlify.app/home', '_blank'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}

{/* Card ---------------------------------------> */}
<Card sx={{ maxWidth: 750, maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        margin:2    
    }} 
      
    >
        <CardMedia
          component="img"
          height="400"
          image={Tict}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            Tic-Tac-Toe
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            Javascript + React + Material UI
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://frabjous-fairy-5bd274.netlify.app/'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}

{/* Card ---------------------------------------> */}
<Card sx={{ maxWidth: 750, maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        margin:2    
    }} 
      
    >
        <CardMedia
          component="img"
          height="400"
          image={pokimg}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            Pokedex
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            Firebase + Javascript + React + Material UI
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://delicate-clafoutis-7a1dff.netlify.app/'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}

    </Box>
  )
}

export default Feed