import React, { useState } from 'react';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import './Body.css';

export default function Body() {
  const [query, setQuery] = useState('');

  const searchVideo = () => {
    if (query.trim() !== '') {
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
    }
  };
    const Signinbro = () => {
      };
        
  return (
    <>
    <div className="search-container">
      <input
        type="text"
        id="searchInput"
        className="search-input"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={searchVideo}><FaSearch/></button>
    
    </div>&nbsp;&nbsp;&nbsp;&nbsp;
    <MdOutlineKeyboardVoice className='hi'/>
    <button className="bi"><FaPlus/>&nbsp;&nbsp;Create</button>
    <FaRegBell className='bell'/>
    <button className="signin" onClick={Signinbro}>SIGN IN</button>
    </>
  );
}
