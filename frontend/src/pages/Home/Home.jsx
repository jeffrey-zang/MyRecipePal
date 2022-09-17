import React from 'react'
import {
    Button,
    Center
} from '@chakra-ui/react'
import './home.css'
import logo from '../../assets/logo.png'
import diet from '../../assets/diet.png'

const Home = () => {
  return (
    <>
    <div className = 'container'>
        Title
        <Center><img className = 'logo' src = {logo} alt = 'logo'></img></Center>
        <h1 style = {{fontSize: 'max(3vw, 30px)'}}>Change your life through diet</h1>
        <Center>
            <Button className = 'btn' colorScheme='green' marginTop = '25px' marginBottom = '-20px'>Get Started</Button>
        </Center>
        <Button className = 'btn' colorScheme='green'>Post a Recipe</Button>
    </div>
    <div className = 'container' style = {{padding: '0px 80px'}}>
        Our inspiration
        <p className = 'text'>
            As university students, we all understand that one of the biggest struggles of living by yourself is cooking food. We wanted to make it easy to find and craft new recipes, while still eating healthy. 
        </p>
        <Center><img src = {diet} alt = 'dietimg' className = 'img'></img></Center>
    </div>
    </>
    )
}

export default Home