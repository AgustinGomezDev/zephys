import { CartWidget } from "../CartWidget/CartWidget"
import { BsSearch } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="w-full flex justify-between items-center bg-darkBgColor p-4">
            <div>
                <Link to="/">
                    <img className="w-14 hover:brightness-75 ease-in-out duration-200" src="./src/assets/zephys_color_min.png" alt="Zephys logo" />
                </Link>
            </div>
            <div className="flex items-center gap-10">
                {/* <div className="flex items-center">
                    <select name="category" className="h-10 p-2 rounded-l-lg">
                        <option selected disabled>Category</option>
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                    <input type="search" placeholder="" className="h-10 focus:outline-none p-2"/>
                    <BsSearch className="bg-white h-10 w-10 p-2 rounded-r-lg cursor-pointer text-white bg-primaryColor"/>
                </div> */}
                <ul className="flex gap-8 text-xl uppercase text-white flex-col lg:flex-row">
                    <li> <NavLink to="/" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Home</NavLink> </li>
                    <li className="relative products-list-hover"> <p className="cursor-pointer text-current font-bold hover:text-primaryColor ease-in-out duration-200">Categories</p>    
                        <ul className="absolute bg-darkBgColor rounded-r-2xl rounded-l-2xl items-center p-5 products-list gap-10 text-xl uppercase text-white flex-col lg:flex-row">
                            <li> <NavLink to="/products/dogs" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Dogs</NavLink> </li>
                            <li> <NavLink to="/products/cats" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Cats</NavLink> </li>
                            <li> <NavLink to="/products/fishes" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Fishes</NavLink> </li>
                            <li> <NavLink to="/products/birds" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Birds</NavLink> </li>
                        </ul>
                    </li>
                    <li> <NavLink to="/about-us" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">About us</NavLink> </li>
                    <li> <NavLink to="/contact" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Contact</NavLink> </li>
                </ul>
            </div>
            <CartWidget />
        </div>
        
    )
}