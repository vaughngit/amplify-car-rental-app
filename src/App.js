//import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Divider } from "@aws-amplify/ui-react"
import { DataStore } from '@aws-amplify/datastore';
//import {AmplifyProvider} from "@aws-amplify/ui-react";
// 1. import `ChakraProvider` component
//import { ChakraProvider } from '@chakra-ui/react'
import awsConfig from './aws-exports';
import {NavBar, VideoCard, VideoCardCollection} from "./ui-components";
import { Videos } from './Videos';
import { useState } from 'react';
import { RentalCar } from './models';
import { Card } from './Card';
import VidPlayer from './VidPlayer';
//import { Box, Image } from "@chakra-ui/react";
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Unstable_Grid2';
import { Grid, GridItem } from '@chakra-ui/react'

/*  
Amplify.configure({})
  */
Amplify.configure(awsConfig)

function App({user, signOut}) {

  const [name, setName] =useState(""); 
  const [price, setPrice] =useState(""); 
  const [description, setDescription] =useState(""); 
  const [imageUrl, setImageUrl] =useState(""); 

  const saveRentalCar = async ()=>{
    try {
      await DataStore.save(
        new RentalCar({
          name: name, 
          price: parseFloat(price), 
          description, 
          imageUrl
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  const addCarOverrides = {
    "TextField29766922": {
      onChange: (event) =>{
        setName(event.target.value); 
      }
    }, 
    "TextField36592693": {
      onChange: (event) =>{
        setPrice(event.target.value); 
      }
    },
    "TextField29766923": {
      onChange: (event) =>{
        setDescription(event.target.value); 
      }
    },
    "TextField29766924": {
      onChange: (event) =>{
        setImageUrl(event.target.value); 
      }
    },
    "Button": {
      //onClick: ()=>{  }
      onClick: saveRentalCar
    }
  }; 

  const navbarOverrides = {
    "icons8-car-48 1": {
      src: "https://img.icons8.com/color/50/000000/car--v1.png", // app logo
    },
    "image": {
      //src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrevPVu9sSsE09oyZ3kxh-DBOpaCEauWOpDwQmUgqeng&s", // profile image
      src: user?.attributes?.profile
    },
    "Button": {
      onClick: signOut
    }
  };

  // const videoOverRides = {
  //   "Card Area"={
  //     <video width="100%" height="100%" controls>
  //      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> 
  //     {/* <source src={vid.imageUrl} type="video/mp4" /> */}
  //     </video>
  //   }
  // }



  return (
   // <ChakraProvider>
    <div className="App">
       <NavBar overrides={navbarOverrides} width="100%"/>
      <header className="App-header">
        {/* <AddCar overrides={addCarOverrides} style={{textAlign: "left", margin: "1re"}} /> */}
        <Divider />
        {/* <CarRentalCardCollection /> */}


      
        <VideoCard 
          // videoArea={
          //   <video width="100%" height="100%" controls>
          //     <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> 
          //   {/* <source src={vid.imageUrl} type="video/mp4" /> */}
          //   </video>
          // }
        />
        
        <VideoCardCollection
            overrideItems={({ item }) => ({
            
            videoArea: 
              <div>
                <video width="100%" height="100%" controls>
                  <source src={item.imageUrl} type="video/mp4" /> 
                {/* <source src={vid.imageUrl} type="video/mp4" /> */}
                </video>
              </div>
        })}

        />

        
      </header>
    </div>

  );
}

//export default App;
export default withAuthenticator(App, { hideSignUp: true });
