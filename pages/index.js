import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Test from './fb_sdk'
import ShareComponent  from './sharing'
import {Box} from "@chakra-ui/react"

export default function Home() {
  return (<Box>
   <Test>

     </Test> 
     <ShareComponent>

     </ShareComponent>
   </Box>
   
  )
}
