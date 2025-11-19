import React from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import './Shorts.css'
import { useNavigate } from 'react-router-dom';
export default function Shorts() {
  const [query, setQuery] = useState('');
  const searchVideo = () => {
    if (query.trim() !== '') {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, 'self');
    }
  };
   function Bell()
{alert("You Have No Notifications");

  
}
function bro(){
  alert("First enable access to your memory");
  alert("Try to make a good video")
}
function Signinbro(){
  Navigate('/Signin')
}
function Voice(){
}
  return (
    <>
    <Navbar/>
     <div className="search-container">
            <input type="text" id="searchInput" className="search-input" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className="search-button" onClick={searchVideo}><FaSearch /></button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <MdOutlineKeyboardVoice className='hi' onClick={searchVideo} />
          <button className="bi" onClick={bro}><FaPlus />&nbsp;&nbsp;Create</button>
          <button className='bell' onClick={Bell}><FaRegBell style={{height:'55px'}}/></button>
          <button className="signin" onClick={Signinbro}>SIGN IN</button>
        <br /><br /><br />  
          <div className='Videos-two'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cn9nxCZpIvM?si=nmUHr9XPZunjlhhm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>        
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Et15x3Gvw0E?si=kVYHEW1OlsXf99zf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/y4rbM1I6NvE?si=jFk2MgoFiqTw2stI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>       
     <iframe width="560" height="315" src="https://www.youtube.com/embed/yFlarM35vxA?si=_guGY1PzMVAusfrS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/wkC22r05WkU?si=B6HnX5YrqFB6RMBZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>      
     <iframe width="560" height="315" src="https://www.youtube.com/embed/Jqo1BM0TfBY?si=YkRhSh3utc5WkhC-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4Bsc2uI_LsM?si=fCUoClHF7BazLSKG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_e45NEdNMXE?si=lmGgppHmPA_B6apv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Y1J9_9-vNcU?si=LQNQlqZVQmk8W2f9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/o6-6WWUfY8U?si=z3oAV4kXtZTNAhX-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/PImGfI5yaVY?si=vizVysn4RpoQsc4u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TZ78SFvWGS0?si=eXsVzLR5HsZ_dwe2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FzCkLjduhFs?si=0-DV_DA_jtWlMjSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/he1KGC9dkeE?si=Vdu89iHKFfpBTLN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-C3AeqT3Dss?si=ns-sD0u0P_l4VGq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WOZSI2_m-3o?si=Cg1JF8_dHAVrPalf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fqkItFCrSg0?si=CP1HwzqpWCw6tM7t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6CnwHC4ubZQ?si=LJqOaJe4PT9VtR0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yta_B6tq2VQ?si=oxIBBOJa5lbkolWF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/h6qoje68inc?si=nsf7jwkMkcwrAayx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VQpTVVsNHQs?si=7Z_Dpx0UCeTO7qBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gTo-lPOGPdg?si=2ZfYPV6AUZVFNuaN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>     
       <iframe width="560" height="315" src="https://www.youtube.com/embed/Wp8_0FS-Ts4?si=UhcjF5I5NsJmw-Fz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullScreen></iframe>   
          </div>
    </>
  )
}
