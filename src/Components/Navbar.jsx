import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { LuArrowDownToLine } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { BsYoutube } from "react-icons/bs";
import { PiGreaterThanLight } from "react-icons/pi";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineNewspaper } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { TbHanger } from "react-icons/tb";
import { PiApplePodcastsLogoBold } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import './Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';

 
export default function Navbar() {
  const Navigate=useNavigate();
  function Goto(){
      Navigate('/Shorts')
  }
  function gohome(){
    Navigate('/')
  }
  function goSub(){
    Navigate('/Sub')
  }
  return (  
    <>
    <div className="sidebar">
    <h3><HiBars3/>  &nbsp;<BsYoutube className='red'/>   YouTube<sup style={{fontSize:'15px'}}> IN</sup> </h3>
    <a href="#home" onClick={gohome}> <FaHome/>  Home</a>
<button style={{background: 'transparent' , border: 'none'}}>
  <a className='siz' onClick={Goto}><SiYoutubeshorts /> Shorts</a>
</button>
    <a href="#Subscription" onClick={goSub}> <MdSubscriptions/>  Subscription</a>
    <div className='vetri'>_____________________________</div>
    <a href="#You"><CgProfile/>  You </a>
    <a href="#Downloads"><LuArrowDownToLine/>  Downloads</a>
    <a href="#History"><LuHistory/>  History</a>
    <a href="#Playlist"><CgPlayList/>  PlayList</a>
    <a href="#WatchLater"><MdOutlineWatchLater/>  Watch Later</a>
    <a href="#History"><AiOutlineLike/>  Liked Videos</a>
     <div className='vetri'>_____________________________</div> 
     <a href="#Subsription"><MdOutlineSubscriptions/>  Subscription</a>
      <div className='vetri'>_____________________________</div> 
     <a href="#Explore"> Explore</a>
       <a href="#Shopping"><AiOutlineShopping/>  Shopping</a>
       <a href="#Music"><IoMusicalNoteOutline/>  Music</a>
       <a href="#Films"><PiFilmSlateBold/>  Films</a>
       
       <a href="#Live"><MdLiveTv/>  Live</a>
       <a href="#Gaming"><SiYoutubegaming/>  Gaming</a>
       <a href="#News"><MdOutlineNewspaper/>  News</a>
       <a href="#Sport"><FaTrophy/>  Sport</a>
       <a href="#Coureses"><FaGraduationCap/>  Courses</a>
       <a href='#Fashion And Shopping'><TbHanger/> Fashion & Beauty</a>
       <a href="#Podcast"><PiApplePodcastsLogoBold/>  Podcast</a>
       <div className='vetri'>_____________________________</div> 
       <p>More From You Tube</p>
       <a href="#Premium"><BsYoutube className='red'/>  YouTube Premium</a>
       <a href="#Studio"><SiYoutubestudio className='red'/>  YouTube Studio</a>
       <a href="#Music"><SiYoutubemusic className='red'/>  YouTube Music</a>
       <a href="#Kids"><SiYoutubekids className='red'/>  YouTube Kids</a>
       <div className='vetri'>_____________________________</div> 
       <a href="#Settings"><IoMdSettings/>   Settings</a>
       <a href="#Report"><FaFlag/>  Report History</a>
       <a href="#Help"><IoIosHelpCircle/>   Help</a>
       <a href="#FeedBack"><MdOutlineFeedback/>   FeedBack</a>
       <div className='vetri'>_____________________________</div>
       <footer>About Press Copyright Contact us . Creator Advertise Developers
Terms Privacy Policy & SafetyHow YouTube worksTest new features .<br/><br/>
© 2025 Google LLC</footer>
  </div>
 

  </>
  )
}
