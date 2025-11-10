import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { LuArrowDownToLine } from "react-icons/lu";
import { HiBars3 } from "react-icons/hi2";
import { BsYoutube } from "react-icons/bs";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="sidebar">
    <h3><HiBars3/>  &nbsp;<BsYoutube/>   YouTube<sup> IN</sup> </h3>
    <a href="#home"> <FaHome/>  Home</a>
    <a href="#services"><SiYoutubeshorts/>  Shorts</a>
    <a href="#about"> <MdSubscriptions/>  Subscription</a>
    <a href="#contact"><SiYoutubemusic/>  YouTube Music</a>
    <a href="#contact"><CgProfile/>  You</a>
    <a href="#Downloads"><LuArrowDownToLine/>  Downloads</a>
  </div>
 

  </>
  )
}
