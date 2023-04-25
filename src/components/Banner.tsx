import React from 'react'
import logo from '../cyberfilm_logo.jpg';
import "./Banner.css"


// rafce
const Banner = () => {
  return (
    <div className="header">
        <img src={logo} className="logo"/>
        <span className="heading">Film Lookbook</span>
    </div>
  )
}

export default Banner