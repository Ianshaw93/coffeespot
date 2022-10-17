import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMedium, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CvPdf from '../assets/cv.pdf'

export default function NavComponent() {

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav); // not working??

	const headings = [
		{ name: "Home", link: "home"},
		{ name: "Products", link: "products"},
		{ name: "Menu", link: "menu"},
		{ name: "Contact", link: "contact"},
]

	const desktopList = headings.map(item =>{
		return (
			<li className="text-[#40AAE8]">
				<a href={`#${item.link}`}>{item.name}</a>
			</li>
		)
	})

	const mobileList = headings.map(item => {
		return (
			<li className='py-6 text-4xl'>
				<a href={`#${item.link}`}>{item.name}</a>
			</li>
		)
	})
	return (
		<>
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
				<div className="flex-1">
					<a className="text-[#40AAE8] btn btn-ghost normal-case text-xl" href="#home">
						Coffee Stop
						<img src="" className="nav--logo" />
					</a>
				</div>
				{/* menu hidden mobile, visible big screen */}
				<div className='hidden md:flex'> 
					<ul className="menu menu-horizontal p-0">
						{desktopList}
					</ul>
				</div>
				{/* Burger Menu */}
				{/* <div className='md:hidden' onClick={props.handleClick}> */}
				<div onClick={handleClick} className='md:hidden z-10'>
					{!nav ? <FaBars style={{color:'#40AAE8'}}/> : <FaTimes /> } 
				</div>
				{/* mobile menu - burger content */}
				{/* to do add bg colour - same as nav bar colour */}
				<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen b flex flex-col justify-center items-center bg-[#CBD0D3]'} 
				onClick={handleClick}
				>
					{mobileList}
				</ul>

				{/* Social Icons */}
				<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
					<ul>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full' 
							>
								Facebook<FaFacebook size={30}/>
							</a>
						</li>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full'>
								Instagram <FaInstagram size={30}/>
							</a>
						</li>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full'>
								Whatsapp <FaWhatsapp size={30}/>
							</a>
						</li>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
							<a className='pl-8 flex justify-between items-center w-full'>
								Email <HiOutlineMail size={30}/>
							</a>
						</li>
					</ul>
				</div>
			</div>

		</>
	);
}
