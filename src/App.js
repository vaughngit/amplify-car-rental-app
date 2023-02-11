import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Divider } from "@aws-amplify/ui-react"
import { DataStore } from '@aws-amplify/datastore';
//import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsConfig from './aws-exports';
import {NavBar, CarRentalCardCollection, AddCar} from "./ui-components";
import { useState } from 'react';
import { RentalCar } from './models';
/* 
Amplify.configure({
	//update these values with the deployed values from your CDK application once deployed (frontend-config.json via npm run deploy)
	Auth: {
		region: 'us-east-2',
		userPoolId: 'us-east-2_AkkrzF6sw',
		userPoolWebClientId: '1p7amgaqiumiv6sr74nedndpg4',
		identityPoolId: 'us-east-2:44b91e14-ca9a-4ec5-a870-e871699c12c2',
	},
	aws_project_region: 'us-east-2',
	aws_appsync_graphqlEndpoint:'https://g7sswfrfxfgjflzcefrcvf6l2i.appsync-api.us-east-2.amazonaws.com/graphql',
	aws_appsync_region: 'us-east-2',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
	aws_appsync_apiKey: null,
})
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

  return (
    <div className="App">
       <NavBar overrides={navbarOverrides} width="100%"/>
      <header className="App-header">
        <AddCar overrides={addCarOverrides} style={{textAlign: "left", margin: "1re"}} />
        <Divider />
        <CarRentalCardCollection />
      </header>
    </div>
  );
}

//export default App;
export default withAuthenticator(App);
