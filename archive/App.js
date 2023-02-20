import { ChakraProvider } from '@chakra-ui/react'
import { Timeline } from './Timeline';
import { Card } from './Card';


function App() {
  return (
    <ChakraProvider>
        <h1>Hello World</h1> 
      <Timeline>
        { 
            ({post}) =>(
            <Card key={post.id}>
                 {console.log(post.id)} 
              {/* <Card.Main content={post.content}/> */}
                <Card.Main data={ post.content}/> 
            </Card>
          )
        }
      </Timeline>
    </ChakraProvider>
  );
}

export default App;
