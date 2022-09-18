import React from 'react'
import question from '../assets/question.png'

import { Center } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <div style = {{textAlign: 'center'}}>
        <h1 style = {{fontSize: 'max(3vw, 30px)', marginTop:'25px'}}>Page Not Found</h1>
        <a href = '/' style = {{textDecoration: 'underline', fontSize: 'max(1.5vw, 15px)', marginTop:'25px'}}>Back to home</a>
        <Center>
        <img src = {question} alt = 'question'></img>
        </Center>
    </div>
  )
}

export default NotFound