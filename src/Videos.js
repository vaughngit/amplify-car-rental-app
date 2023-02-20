import {useState, useEffect} from 'react'
import {DataStore} from '@aws-amplify/datastore'
//import { Container } from '@chakra-ui/react' //so the content doesnt take up whole page
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import {RentalCar} from './models'

export function Videos({children}) {
    const [videos, setVideos] = useState([])


    useEffect(()=>{
        const getVideos = async () =>{
            const videoData = await DataStore.query(RentalCar) //query datastore to get each instance of the timeline model
            setVideos(videoData)
        }
        getVideos()
    }, [])

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(2),
    //    // textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));


    return (
    
      //  <Container>
      //<Grid xs={6}>
      <container>
            {videos.map(vid => children({vid}))}
      </container>
    // </Grid>
      //  </Container>
        
        
    )
 }