import React from 'react'
import {
    Button,
    Center
} from '@chakra-ui/react'
import './home.css'
import logo from '../../assets/logo.png'

const Home = () => {
  return (
    <>
    <div className = 'container'>
        Title
        <Center><img src = {logo} alt = 'dietimg'></img></Center>
        <h1 style = {{fontSize: 'max(3vw, 30px)'}}>Change your life through diet</h1>
        <Center>
            <Button className = 'btn' colorScheme='green' marginTop = '25px' marginBottom = '-20px'>Get Started</Button>
        </Center>
        <Button className = 'btn' colorScheme='green'>Post a Recipe</Button>
    </div>
    </>
    )
}

export default Home