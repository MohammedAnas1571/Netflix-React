import React, { useEffect, useState } from 'react'
import {API_KEY,imgUrl} from '../../constant/constant'
import "./Banner.css" 
import axios from '../../axios'
const Banner = () => {
    const [movie,setMovie]= useState([])
    
    useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        
        const randomPage = Math.floor(Math.random() *20);
       
       setMovie(response.data.results[randomPage])
     })
    
    },[])
  return (
    
    <div style={{ backgroundImage: `url(${imgUrl + movie.backdrop_path})` }} className='banner'>
   <div className='content'>
    <h1 className='title'>{movie?movie.title:""}</h1>
    <div className='banner-buttons'>
        <button className='button'>Play</button>
        <button className='button'>My list</button>
    </div>
    <h1 className='description'>{movie.overview} </h1>
   </div>
   <div className="fade"></div>
    </div>
  )
}

export default Banner