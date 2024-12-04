import React, { useEffect, useState } from 'react'
import APIUrl from '../utils/Environment'
import axios from 'axios'

const Prodect = () => {

    const [first, setfirst] = useState([])
    let APIREQ =  APIUrl.GetAPIUrl
    const APIURL = async () =>{
        const response =  await axios.get(`${APIREQ}/posts`)
        try{
            console.log(response.data)
            setfirst(response.data)
        } catch(error){
            console.error('Error fetching data:', error)
        } 
       
    } 
    useEffect(() => {
      APIURL()
    }, [])
    
       
  return (
    <div>Prodect</div>
  )
}

export default Prodect;

 