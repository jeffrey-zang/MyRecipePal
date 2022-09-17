import React from 'react'
import "./signinsignout.css"

const Signup = () => {
  return (
    <form className="panel">
      <h2>Create an account</h2>
      <div className="subcontainer">
          <input type="text" id="fname" placeholder="First Name" />
          <input type="text" id="lname" placeholder="Last Name" />
      </div>
      <input type="email" id="email" placeholder="email" />
      <input type="password" id="password" placeholder="password" />
      <input type="password" id="confirm-password" placeholder="confirm password" />
      <input className="continue" type="button" id="continue" value="Sign Up" />
      <p>Already have an account? <a href="/signin">Log in!</a></p>
    </form>
  )
}

export default Signup