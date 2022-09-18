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
    <div className = 'container' id = 'home'>
        MyRecipePal
        <Center><img className = 'logo' src = {logo} alt = 'logo'></img></Center>
        <h1 style = {{fontSize: 'max(3vw, 30px)'}}>Unlock your inner chef</h1>
        <Center>
            <Button size = 'lg' onClick={() => {window.location.href='/MyRecipePal/findrecipe'}} colorScheme='green' marginTop = '25px' marginBottom = '-20px'>Get Started</Button>
        </Center>
        <Button size = 'lg' colorScheme='green' onClick={() => {window.location.href='/MyRecipePal/addrecipe'}}>Post a Recipe</Button>
    </div>
    <div className = 'container' style = {{padding: '0px 80px', color: '#fff'}}>
        Our Inspiration
        <p className = 'text'>
            As university students, we all understand that one of the biggest struggles of living by yourself is cooking food. We wanted to make it easy to find and craft new recipes, while still eating healthy. 
        </p>
        <Center><img src = {diet} alt = 'dietimg' className = 'img'></img></Center>
        <p className = 'text'>
            With MyRecipePal, we make it easy for you to find new recipes to try. By filtering using your preferences, allergies, and cooking time, it's ensured that you will always find the right recipe for you. MyRecipePal allows you to eat healthier, save time, and improve your cooking skills all at the same time.
        </p>
    </div>
    </>
    )
}

export default Home