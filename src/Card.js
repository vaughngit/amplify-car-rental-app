//import { Box, Image } from "@chakra-ui/react";
//import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
//import Grid from '@mui/material/Unstable_Grid2';
//import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Unstable_Grid2';
import { Grid, GridItem } from '@chakra-ui/react'


export function Card({children}){

   return (
           // <Box maxW={'lg'} borderWidth={'1px'} borderRadius={'md'} overflow="hidden" m='5'>
           <Grid >
                {/* Hi */}
                {children}
                {/* {console.log(children)} */}
            </Grid>
          //  </Box>

            // <Grid xs={8}>
                // <Box>
                //  {children}
                //  </Box>
            // </Grid> 

   )
}


// Card.Main = function ({data}){

//    // let content  = data;
//     let content ; 
//      data.then(value => {
//         console.log(value); 
//        // return value
//        content = value; 
//       })

       
//       console.log(content)
      
//     let cardContent
   
//     if(content.type === 'VIDEO'){
//         cardContent = (
//         <video controls>
//             <source src={content.source} />
//         </video>
//         )
//     } else {
//         cardContent = <Image src={content.source} />
//     }
//     return (
//         <Box>
//             {cardContent  }
//             {/* {console.log(content)} */}
//         </Box>
//     )
// }

/* 

Card.Main = function ({data}){

    data.then(content => {
        console.log(content.type); 
    let cardContent

    if(content.type === 'VIDEO'){
        cardContent = (
        <video controls>
            <source src={content.source} />
        </video>
        )
    } else {
        cardContent = <Image src={content.source} />
    }
    return (
        <Box>
            {cardContent  }
            {console.log(cardContent)}
        </Box>
    )
}).catch(err => {
    console.log(err);
  });

}
 */