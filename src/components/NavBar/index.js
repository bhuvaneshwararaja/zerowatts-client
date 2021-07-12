import {Link} from "react-router-dom";
const NavBar = () => {
    return <>
        <nav className="flex justify-between p-4 shadow-md fixed w-full bg-white z-10">
            <Link to="" className="text-2xl">{"</ZeroWatts>"}</Link>
            <div className="flex  justify-between">
            <ul className="flex justify-between w-2/4 text-xl items-center ">
                <li className="pr-4 hover:text-purple-700 text-2xl">
                    <Link to="">Home</Link>
                </li>
                <li className="pr-4 hover:text-purple-700 text-2xl">
                <Link to="">Practice</Link>
                </li>
                <li className="pr-4 hover:text-purple-700 text-2xl">
                <Link to="">Assessment</Link>
                </li>
                <li className="pr-4 hover:text-purple-700 text-2xl">
                <Link to="">TechBlog</Link>
                </li>
                <li className="pr-4 hover:text-purple-700 text-2xl" >
                <Link to="">Contribution</Link>
                </li>
            </ul>
            <button className="text-xl shadow-lg  transition-all duration-700 bg-purple-700 text-white pl-3 pr-3">Logout</button>
            </div>
        </nav>
    </>
}
export default NavBar;