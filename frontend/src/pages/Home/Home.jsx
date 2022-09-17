import React from 'react'
import {
    Button,
    Center
} from '@chakra-ui/react'
import './home.css'
import diet from '../../assets/diet.png'

const Home = () => {
  return (
    <>
    <div className = 'container'>
        Title
        <Center><img src = {diet} alt = 'dietimg'></img></Center>
        <h1 style = {{fontSize: 'max(3vw, 30px)'}}>Change your life through diet</h1>
        <Center>
            <Button className = 'btn' colorScheme='blue' marginTop = '25px' marginBottom = '-20px'>Get Started</Button>
        </Center>
        <Button className = 'btn' colorScheme='blue'>Post a Recipe</Button>
    </div>
    </>
    )
}

export default Home