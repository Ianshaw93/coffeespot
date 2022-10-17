import React from 'react'
import {FaFacebook, FaWhatsapp, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const socialIconContainer = (
        <div id={'socials'} className="flex items-center justify-center p-5">
            <div>    
              <div className="flex flex-wrap justify-center gap-2 cursor-pointer">
                <FaFacebook size={30}/>
                <FaWhatsapp size={30}/>   
                <FaInstagram size={30}/>         
              </div>
            </div>
        </div>)
  return (
    <>
    {socialIconContainer}
    </>
  )
}

export default Footer