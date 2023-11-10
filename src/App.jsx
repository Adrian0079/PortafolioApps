import { Box, Button, Stack, createTheme} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Sbar from "./components/Sbar";
import Rbar from "./components/Rbar";
import Nvar from "./components/Nvar";
import Feed from "./components/Feed";
import { ThemeProvider } from "styled-components";

function App() {

  const [dmode, setDmode] = useState("dark")

  const darkTheme = createTheme({
    palette:{
      mode:dmode
    }
  })
  

  //Boton personalizado
  const BlueButton = styled(Button)({
    backgroundColor: "#31A688",
    color: "#fff",
    margin: 5,  
    "&:hover": {
      backgroundColor:"#3379D2"
    },
    
  });


  const RedButton = styled(Button)({
    backgroundColor: "#FF383B",
    color: "#fff",
    margin: 5,  
    "&:hover": {
      backgroundColor:"#F986A9"
    },
    
  });
  

  return (
    
 
    <Box bgcolor="#E7E7EA">
      <Nvar/>
      <Stack 
      direction="row" //Dirección en fila.
      spacing={2}  //Espacio entre componentes.
      justifyContent="space-evenly" //Ajustamos horizontalmente
      //(alignItems="center" // Centra verticalmente)
      
      >
      
      <Sbar/>
      <Feed />
      <Rbar/>
     
      

      </Stack>

    </Box>

  );
}

export default App;

