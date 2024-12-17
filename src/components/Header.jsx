
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
        <nav className="flex lg:h-24 lg:shadow-md 2xl:h-40">
            <div className=" flex my-5 mx-5 w-full h-7 lg:mx-32 lg:justify-between items-center lg:h-auto lg:my-auto 2xl:mx-48">

                {/* Hidden Heading, Arrow and Hamburger starts */}
                <div className="flex w-full justify-between items-center lg:hidden">
                    <p className="lg:hidden flex items-center justify-center gap-6"><IoIosArrowBack className="text-xl" />Connect with astrologer</p>
                    <div className='lg:hidden text-3xl' 
                            onClick={handleMenu}>
                                {toggle ? <RxHamburgerMenu /> : <IoClose />}
                    </div>
                </div>
                {/* Hidden Heading, Arrow and Hamburger ends */}
                
                {/* nav elements start from here  */}
                    <div>
                        <img className="hidden lg:block lg:h-12" src={logo} alt="Divine Talk Logo"/>
                        
                    </div>
                    <div className="hidden lg:flex flex-col lg:gap-8 lg:flex-row items-center font-metropolis 2xl:text-2xl">
                        <a href="#" className="hover:font-semibold">Home</a>
                        <a href="#" className="hover:font-semibold">Services</a>
                        <a href="#" className="font-semibold">Astrologers</a>
                        <a href="#" className="hover:font-semibold">Blogs</a>
                        <select className="border border-black rounded-lg px-2 py-1" name="language">
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
                        <button className="bg-secondary p-1 rounded-md w-[130px] h-10 text-white lg:h-auto lg:rounded-[10px] lg:px-5 lg:py-2 2xl:px-6 2xl:text-xl 2xl:py-[10px]  lg:font-semibold hover:bg-rose-600">Get App</button>
                    </div>
                {/* nav elements ends here  */}

                {/* hidden navbar starts here --> */}
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
                {/* hidden navbar ends --> */}
            </div>
            
        </nav>
    </>
  )
}

export default Header