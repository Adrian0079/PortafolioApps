import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Typography } from '@mui/material'
import React from 'react'




const MyApps = ({title, description, image_}) => {
  return (

    


    <Card sx={{ maxWidth: 750, maxHeight: 800,
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.9)',
        borderRadius: 3,
        margin:2    
    }} 
      
    >
        <CardMedia
          component="img"
          height="400"
          image="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_adf318cb5a8a4a499682bc899c11fc09.webp"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1111111111111
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button>Learn More</Button>
        </CardActions>
      </Card>
  )
}

export default MyApps