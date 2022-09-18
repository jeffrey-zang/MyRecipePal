import React from 'react'
import "./signinsignout.css"

const Signin = () => {
  return (
    <form className="panel">
      <h2>Sign in to your account</h2>
      <input type="email" id="email" placeholder="email" />
      <input type="password" id="password" placeholder="password" />
      <input className="continue" type="button" id="continue" value="Sign In" />
      <p>Don't have an account? <a href="/signup">Create one!</a></p>
    </form>
  )
}

export default Signin