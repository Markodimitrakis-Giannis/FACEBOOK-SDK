import {useEffect,useState} from "react"
import {Image,Box,VStack,HStack,Text,Button} from "@chakra-ui/react"

import {
  FacebookShareButton,
  FacebookMessengerShareButton
 
} from "react-share";

function ShareComponent(){
    const [count,setCount]=useState(0);

    const shareFunc=()=>{
        setCount(count+1);
        console.log(count);
    }

    return(<Box background='red' w='15%'>
        
        <FacebookShareButton url='http://147.27.70.120:3000/story/3' quote="Test1" hashtag="Test" onShareWindowClose={() => shareFunc()}>
        <Text>
            Share To facebook

        </Text>
        </FacebookShareButton>
    </Box>)
}

export default ShareComponent;