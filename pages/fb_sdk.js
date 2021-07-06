import {useEffect,useState} from "react"
import {Image,Box,VStack,HStack,Text,Button} from "@chakra-ui/react"
import axios from "axios"
import Head from "next/head"


function Test_func(){
const myToken="EAAPTIXZCfjZA8BAHXZBNDGZARNZCLnvXTD8bn8yiSsDdjvQLs4S3i69yERDiJ6sEEs5YcdKRZBxzV6tPZCBrxJn2BIOYZBhTZBqtlecPHl0wXxqdUZCOFaZA1ePw8ixSMzbhRR0HSU3XI9pUynWlwuICKjlZBZATTkkLBFbZCMsFzkpf2ntAZDZD"

const pageAccessToken="EAAPTIXZCfjZA8BAFJfr9BOiEjbPvGvoZBaocWR5wbdPnTaN3c4d0oeEJEHzZCcqHuEr0xJBQQICZAWIfX3djlpqvZBZB0wVKCkXeMmqwyuth8I3ekbWDylTJowdLgyinc1fA8wGb7te6wKotijdNSDrwSGPnZAhHbLGx1zYjWbGPn8bOh0oghpTW"

const userId="4326926627317297"

const [quote,setQuote]=useState("")
const [posts,setPosts]=useState("")
const [name,setName]=useState("")

//Fetch a Random Quote
useEffect(() => {
    axios.get('http://quotable.io/random').then(res =>{
        const result=res.data
        console.log(result.content)
        setQuote(result.content)
    })
    
}, [])

useEffect(() => {
    if(posts){
    console.log(typeof(posts));
    posts.forEach((element) => {

  // do stuff with data
  let id = element.id;
  let message = element.message || 'No message'
 // let total = element.total;

 // console.log(`${id}: ${message}`);
    })
}
  // or write in div/form with innerHtml etc..
}, [posts])

const fetchQuote= () => {axios.get('http://quotable.io/random').then(res =>{
        const result=res.data
        console.log(result.content)
        setQuote(result.content)
    })

}

//Create Comment In Post
const createComment=()=>{
axios.post("https://graph.facebook.com/109498587992769_128398512769443/comments?",{
        message:"Helo Friends V2",
        access_token:"EAAPTIXZCfjZA8BAFJfr9BOiEjbPvGvoZBaocWR5wbdPnTaN3c4d0oeEJEHzZCcqHuEr0xJBQQICZAWIfX3djlpqvZBZB0wVKCkXeMmqwyuth8I3ekbWDylTJowdLgyinc1fA8wGb7te6wKotijdNSDrwSGPnZAhHbLGx1zYjWbGPn8bOh0oghpTW"
    }).then(res =>{
        const result=res.data
        console.log(result);

     
        
        
    }),error=>{
        console.log(error);
    }
}

//Fetch The Posts of our page and their content


const fetchPagePosts=() =>{
    axios.get("https://graph.facebook.com/v11.0/109498587992769/feed?access_token=EAAPTIXZCfjZA8BAFJfr9BOiEjbPvGvoZBaocWR5wbdPnTaN3c4d0oeEJEHzZCcqHuEr0xJBQQICZAWIfX3djlpqvZBZB0wVKCkXeMmqwyuth8I3ekbWDylTJowdLgyinc1fA8wGb7te6wKotijdNSDrwSGPnZAhHbLGx1zYjWbGPn8bOh0oghpTW"
    ).then(res =>{
        const result=res.data
       setPosts(result.data);   

     
        
        
    }),error=>{
        console.log(error);
    }
/*{posts.forEach((element) => {

  // do stuff with data
  let id = element.id;
  let message = element.name || " ";
  //let total = element.total;

  console.log(`${id}: ${name}`);

  // or write in div/form with innerHtml etc..
})}*/

}

const getPostLikes=()=>{
    const public_post_id="109498587992769_128398512769443";
      axios.get("https://graph.facebook.com/109498587992769_128398512769443/reactions?access_token=EAAPTIXZCfjZA8BAFJfr9BOiEjbPvGvoZBaocWR5wbdPnTaN3c4d0oeEJEHzZCcqHuEr0xJBQQICZAWIfX3djlpqvZBZB0wVKCkXeMmqwyuth8I3ekbWDylTJowdLgyinc1fA8wGb7te6wKotijdNSDrwSGPnZAhHbLGx1zYjWbGPn8bOh0oghpTW&summary=total_count",{
        
    }).then(res =>{
        const result=res.data
        console.log(result.summary.total_count);
    },error =>{
        console.log(error);

    })
    
}

const postRandomQuote=() =>{

    axios.post("https://graph.facebook.com/109498587992769/feed?",{
        message:quote,
        access_token:"EAAPTIXZCfjZA8BAFJfr9BOiEjbPvGvoZBaocWR5wbdPnTaN3c4d0oeEJEHzZCcqHuEr0xJBQQICZAWIfX3djlpqvZBZB0wVKCkXeMmqwyuth8I3ekbWDylTJowdLgyinc1fA8wGb7te6wKotijdNSDrwSGPnZAhHbLGx1zYjWbGPn8bOh0oghpTW"
    }).then(res =>{
        const result=res.data
        const id=res.id
    },error =>{
        console.log(error);

    })

}




return(

<VStack>
<Head>
        <meta property="og:title" content="My new title" key="title" />
</Head>
<Box w='90%' align="center">
  
<Image  src="https://www.techadvisor.com/cmsdata/features/3668938/lord_of_the_rings_thumb800.jpg"  w='30%'/>
</Box>
<Box>
   <Text color='red'>My first facebook App</Text>
</Box>
<HStack>
<Button color='blue' bg='yellow' onClick={() =>fetchQuote()}>Fetch Quote</Button>
<Button color='blue' bg='green' onClick={() =>postRandomQuote ()}>Post to Facebook Page</Button>
<Button color='blue' bg='white' onClick={() =>fetchPagePosts ()}>Fetch Page Posts</Button>
<Button color='blue' bg='white' onClick={() =>getPostLikes ()}>Show likes of public Post</Button>
<Button color='yellow' bg='black' onClick={() =>createComment ()}>Comment in given page post</Button>
<Box>
    <Text bg ='black ' color='yellow' size='10px'>
        {quote}
    </Text>
</Box>
</HStack>
<Box>
{
<ul>
  		{Object.keys(posts).map(function(keyName, keyIndex) {
            if(posts[keyIndex].message){
    		return (
      			<li key={keyName}>
					{`Post number ${keyIndex+1},with id ${posts[keyIndex].id} and message ${posts[keyIndex].message || "No message"}`}
          		</li>
    		)
            }
		})}
	</ul>
}

</Box>
</VStack>)

}

export default Test_func;