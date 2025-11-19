import React, { useState } from 'react';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './Body.css';
import Bell from './Bell';
import Navbar from './Navbar';

export default function Body() {
  const [query, setQuery] = useState('');
  const navigate =useNavigate()

  const searchVideo = () => {
    if (query.trim() !== '') {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, 'self');
    }
  };
    
        
        const videos = [
    { id: 1, title: "Virat's Cover drive..Bliss to watch..❄️", channel: "VK Edits", views: "2.3M views", time: "6 months ago", thumbnail: "https://packaged-media.redd.it/5dx8c49q1vud1/pb/m2-res_720p.mp4?m=DASHPlaylist.mpd&v=1&e=1763020800&s=6bb7ba9d5507ffb5835f6051b9c950903ef002d3" },
    { id: 2, title: "The Man🔥 the Myth ❤️", channel: "Cric Edits", views: "1.1M views", time: "1 year ago", thumbnail: "https://v1.pinimg.com/videos/mc/720p/7d/0d/5f/7d0d5fb1573e9550774a9fc334556991.mp4" },
    { id: 3, title: "Virat Kohli Training Session", channel: "ICC", views: "3.4M views", time: "2 weeks ago", thumbnail: "https://media.gettyimages.com/id/864964784/video/india-practice-ahead-of-nzealand-game-sunday.mp4?s=mp4-640x640-gi&k=20&c=ULQmvvTckNWb4rPfb7iSqAXC5BIiCkxOCPZ1nbXjTb0=" },
    { id: 4, title: "Virat Kohli PRactice Session", channel: "India Diaries", views: "5.2M views", time: "3 months ago", thumbnail: "https://media.gettyimages.com/id/1020572980/video/india-captain-speaks-ahead-of-the-third-test-against-england.mp4?s=mp4-640x640-gi&k=20&c=ETFlBMCapyzyjiyY6ZkY1y5FTcn3QHAoGFYkbM_PbZs=" },
    { id: 5, title: "VIrat KOhli Press Meet", channel: "City Explorer", views: "1.9M views", time: "4 months ago", thumbnail: "https://media.gettyimages.com/id/1019938714/video/india-train-ahead-of-third-test-against-england.mp4?s=mp4-640x640-gi&k=20&c=en0E0vFK5sT26totd79kKgu6_i58MTtKUJeE2Ky3HiI="},
    { id: 6, title: "Best of Hyderabad Biryani", channel: "Taste Hunters", views: "2.5M views", time: "5 months ago", thumbnail: "https://picsum.photos/seed/hyd/480/270" },
    { id: 7, title: "Exploring Kerala - God's Own Country", channel: "VK Travels", views: "2.3M views", time: "6 months ago", thumbnail: "https://picsum.photos/seed/kerala/480/270" },
    { id: 8, title: "Shimla Vlog | Snowy Adventure", channel: "Travel Buzz", views: "1.1M views", time: "1 year ago", thumbnail: "https://picsum.photos/seed/shimla/480/270" },
    { id: 9, title: "Bangalore Street Food Tour", channel: "Foodie World", views: "3.4M views", time: "2 weeks ago", thumbnail: "https://picsum.photos/seed/bangalore/480/270" },
    { id: 10, title: "Top 10 Places to Visit in Delhi", channel: "India Diaries", views: "5.2M views", time: "3 months ago", thumbnail: "https://picsum.photos/seed/delhi/480/270" },
    { id: 11, title: "Mumbai Marine Drive Night Walk", channel: "City Explorer", views: "1.9M views", time: "4 months ago", thumbnail: "https://picsum.photos/seed/mumbai/480/270" },
    { id: 12, title: "Best of Hyderabad Biryani", channel: "Taste Hunters", views: "2.5M views", time: "5 months ago", thumbnail: "https://picsum.photos/seed/hyd/480/270" },
    
  ];
  function Bell()
{alert("You Have No Notifications");

  
}
function bro(){
  alert("First enable access to your memory");
  alert("Try to make a good video")
}
function Signinbro(){
  navigate('/Signin')
}
function Voice(){
}

  return (
    <>
    <>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9AJsFRNJGZ8?si=sPoP3cc1bI25GRYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9AJsFRNJGZ8?si=sPoP3cc1bI25GRYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9AJsFRNJGZ8?si=sPoP3cc1bI25GRYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9AJsFRNJGZ8?si=sPoP3cc1bI25GRYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9AJsFRNJGZ8?si=sPoP3cc1bI25GRYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
      <Navbar/>
    </>

    </>
  );
}


// import React, { useState } from "react";
// import "./Body.css";

// export default function Body() {
//   const videos = [
//     {
//       id: 1,
//       title: "Virat's Cover drive..Bliss to watch..❄️",
//       channel: "VK Edits",
//       views: "2.3M views",
//       time: "6 months ago",
//       embed: "https://www.youtube.com/embed/9AJsFRNJGZ8"
//     },
//     {
//       id: 2,
//       title: "The Man🔥 The Myth ❤️",
//       channel: "Cric Edits",
//       views: "1.1M views",
//       time: "1 year ago",
//       embed: "https://www.youtube.com/embed/cn9nxCZpIvM"
//     },
//     {
//       id: 3,
//       title: "Exploring Kerala - God's Own Country 🌴",
//       channel: "VK Travels",
//       views: "980K views",
//       time: "2 months ago",
//       embed: "https://www.youtube.com/embed/3dLz47e1E2Q"
//     },
//     {
//       id: 4,
//       title: "Tech Tips for 2025",
//       channel: "Tech World",
//       views: "650K views",
//       time: "3 weeks ago",
//       embed: "https://www.youtube.com/embed/2vjPBrBU-TM"
//     }
//   ];

//   return (
//     <div className="Videos-two">
//       {videos.map((vid) => (
//         <div className="video-card" key={vid.id}>
//           <iframe
//             src={vid.embed}
//             title={vid.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>

//           <div className="video-info">
//             <img
//               src={`https://picsum.photos/seed/${vid.channel}/50`}
//               className="profile-pic"
//               alt="channel logo"
//             />

//             <div className="video-text">
//               <div className="video-title">{vid.title}</div>
//               <div className="video-meta">{vid.channel}</div>
//               <div className="video-meta">
//                 {vid.views} • {vid.time}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
