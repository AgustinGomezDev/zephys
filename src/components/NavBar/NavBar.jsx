import { CartWidget } from "../CartWidget/CartWidget"
import { BsSearch } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
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
                <RxHamburgerMenu className="block md:hidden text-white cursor-pointer text-4xl font-extrabold hover:text-primaryColor ease-in-out duration-200 "/>
                <ul className="md:flex gap-8 text-xl uppercase text-white flex-col md:flex-row">
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