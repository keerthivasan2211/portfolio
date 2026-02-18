import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa' 
import { FaEnvelope} from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6' 

const Navbar = () => {
  return (
    
    <nav className=" mb-15 flex items-center justify-between py-6">

    <div className='flex flex-shrink-0 items-center'>
      <a className="mx-2 w-10  text-4xl " alt="logo">KV</a>
    </div>
    <div className='m-8 flex items-center justify-center gap-4'>
        <a href="https://www.linkedin.com/in/keerthi-vasan-a9b393216"><FaLinkedin/></a>
       
       <a href="mailto:keerthivasan903@gmail.com"> <FaEnvelope/></a>
       <a href="https://github.com/keerthivasan2211"><FaGithub/></a>

    </div>
    </nav>
  )
}

export default Navbar
