
import logo from "/Dark_logo.png"

const Header = () => {
  return (
    <>
        <nav className="h-32 flex shadow-xl">
            <div className="flex w-full mx-32 justify-between items-center h-12 my-auto">
                <div>
                    <img className="h-12" src={logo} alt="Divine Talk Logo"/>
                </div>
                <div className="flex gap-8 items-center">
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
            </div>
            
        </nav>
    </>
  )
}

export default Header