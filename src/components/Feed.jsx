import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Typography } from '@mui/material'
import React from 'react'
import BeastStore_image from '../images/BeastStore.png'
import Tict from '../images/tictactoe.png'
import pokimg from '../images/pokedex.png'
import socialWeb from '../images/socialWeb.png'
import weather from '../images/Weather.png'
import instacopy from '../images/instacopy.png'
import vinos from '../images/vinos.png'
import spotifyApp from '../images/spotifyApp.png'

const Feed = () => {

  return (
    <Box
    border={0}
    alignItems="center"
    bgcolor={'#E7E7EA'} //Color de fondo
    flex={4} //Usamos flexbox para dividir la pantalla en las 3 columnas
    >

      {/* Card ---------------------------------------> */}
     <Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,    
        marginTop: 4
    }} 
      
    >
        <CardMedia
          component="img"
          height="100%"
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
<Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        marginTop:4    
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
<Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        marginTop:4    
      }} 
      
    >
        <CardMedia
          component="img"
          height="100%"
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

    {/* Card ---------------------------------------> */}
    <Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        marginTop:4    
    }} 
      
    >
        <CardMedia
          component="img"
          height="100%"
          image={socialWeb}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            SocialWeb
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            Javascript + React + Material UI (Responsive)
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://lighthearted-centaur-ebce6f.netlify.app/'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}

    {/* Card ---------------------------------------> */}
    <Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        marginTop:4   
    }} 
    >
        <CardMedia
          component="img"
          height="100%"
          image={weather}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            Weather
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            API + Javascript + React + Material UI
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://creative-squirrel-688861.netlify.app/'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}

      {/* Card ---------------------------------------> */}
      <Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        marginTop:4   
        }} 
        >
        <CardMedia
          component="img"
          height="100%"
          image={instacopy}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            Instagram copy
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            Javascript + React + Material UI
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://timely-cajeta-f97d89.netlify.app/'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}

      {/* Card ---------------------------------------> */}
      <Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        marginTop:4   
        }} 
        >
        <CardMedia
          component="img"
          height="100%"
          image={vinos}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            Vinos
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            Javascript + React + Material UI
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://wondrous-licorice-a82eb6.netlify.app/'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}

      {/* Card ---------------------------------------> */}
      <Card sx={{ width:"100%", maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        marginTop:4   
        }} 
        >
        <CardMedia
          component="img"
          height="100%"
          image={spotifyApp}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            SpotifyApp Copy
          </Typography>
          <Typography variant="h5" color="#5F50FF" fontWeight="bold">
            API(Spotify) + Firebase + Javascript + React + Material UI
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button color="success" variant="contained" onClick={()=>{window.open('https://master--deluxe-manatee-ab087e.netlify.app/'); }}>Watch</Button>
        </CardActions>
      </Card>
      {/* Card ---------------------------------------> */}
    </Box>
  )
}

export default Feed