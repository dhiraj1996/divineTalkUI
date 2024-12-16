
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import logo from "/Dark_logo.png"

const Header = () => {
    const [toggle, setToggle] = useState('true')

    const handleMenu = () => {
        setToggle(!toggle);
    }
  return (
    <>
        <nav className="flex lg:h-32 lg:shadow-xl">
            <div className=" flex my-5 mx-5 w-full h-7 lg:mx-32 lg:justify-between items-center lg:h-12 lg:my-auto">

                <div className="flex w-full justify-between items-center lg:hidden">
                    
                    <p className="lg:hidden flex items-center justify-center gap-6"><IoIosArrowBack className="text-xl" />Connect with astrologer</p>
                        <div className='lg:hidden text-3xl' 
                            onClick={handleMenu}>
                                {toggle ? <RxHamburgerMenu /> : <IoClose />}
                        </div>
                </div>

                <div>
                    <img className="hidden lg:block lg:h-12" src={logo} alt="Divine Talk Logo"/>
                    
                </div>
                <div className="hidden lg:flex flex-col lg:gap-8 lg:flex-row items-center">
                    
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Astrologers</a>
                    <a href="#">Blogs</a>
                    <select name="language">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <button className="bg-secondary p-1 rounded-md w-[130px] h-10 text-white">Get App</button>
                </div>

                {/* hidden navbar  */}
                    {!toggle ? 
                        <div className="fixed top-16 w-full left-0 lg:hidden">
                            <div className="bg-white w-full flex flex-col justify-center align-center text-center">
                                <a href="/" className="font-semibold text-xl hover:bg-gray-100 py-4">Home</a>
                                <a href="/" className="font-semibold text-xl hover:bg-gray-100  py-4">Services</a>
                                <a href="/" className="font-semibold text-xl hover:bg-gray-100  py-4">Astrologers</a>
                                <a href="/" className="font-semibold text-xl hover:bg-gray-100  py-4">Blog</a>
                                <select className="font-semibold text-xl hover:bg-gray-100 py-4 text-center" name="language">
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                </select>
                                <button className="bg-secondary my-9 p-1 rounded-md w-[130px] h-10 text-white mx-auto">Get App</button>
                            </div>
                         </div> 
                         : 
                         null
                        }
                
            </div>
            
        </nav>
    </>
  )
}

export default Header