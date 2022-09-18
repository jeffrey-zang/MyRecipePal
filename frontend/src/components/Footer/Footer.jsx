import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className = 'footer'>
      <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 10vw'}}>
        <h1>MyRecipePal</h1>
        <img src = {logo} alt = 'logo' width = '100px' style = {{borderRadius:'50%'}}></img>
      </div>
      <a href = 'https://hackthenorth.com/'>Submitted to Hack the North</a><br></br>
      <a href = 'https://github.com/jeffrey-zang/MyRecipePal/'>Source</a><br></br>
      <a href = 'https://hackthenorth2022.devpost.com/'>Devpost</a><br></br><br></br>
      <p>Made with React, CockroachDB, and Express</p>
    </div>
  )
}

export default Footer