//import logo from './logo.svg';
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
  "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": "https://g7sswfrfxfgjflzcefrcvf6l2i.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-tlfbtbjwavekrhta5rid54zzee",
  "aws_cognito_identity_pool_id": "us-east-2:d7047dd8-258f-4675-a711-b94540445a2a",
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_85Vj5661d",
  "aws_user_pools_web_client_id": "15oko5qc44q1gu9kvb7s0cdplv",
  "oauth": {},
  "aws_cognito_username_attributes": [
      "EMAIL"
  ],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
      "NAME",
      "PROFILE"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": [
          "REQUIRES_LOWERCASE",
          "REQUIRES_NUMBERS",
          "REQUIRES_SYMBOLS",
          "REQUIRES_UPPERCASE"
      ]
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
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
