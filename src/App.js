import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
//import awsConfig from './aws-exports';
import {NavBar} from "./ui-components";

Amplify.configure({
	//update these values with the deployed values from your CDK application once deployed (frontend-config.json via npm run deploy)
	Auth: {
		region: 'us-east-2',
		userPoolId: 'us-east-2_AkkrzF6sw',
		userPoolWebClientId: '1p7amgaqiumiv6sr74nedndpg4',
		identityPoolId: 'us-east-2:44b91e14-ca9a-4ec5-a870-e871699c12c2',
	},
	aws_project_region: 'us-east-2',
	aws_appsync_graphqlEndpoint:'https://6wh64s2heratlirnifqg6fculy.appsync-api.us-east-2.amazonaws.com/graphql',
	aws_appsync_region: 'us-east-2',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
	aws_appsync_apiKey: null,
})


function App() {
  return (
    <div className="App">
       <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
