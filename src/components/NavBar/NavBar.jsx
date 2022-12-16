import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <div className="w-screen flex justify-between items-center p-4 bg-darkBgColor">
            <div>
                <a href="#">
                    <img className="w-14 hover:brightness-75 ease-in-out duration-200" src="./src/assets/zephys_color_min.png" alt="Zephys logo" />
                </a>
            </div>
            <div>
                <ul className="flex gap-8 text-xl uppercase text-white flex-col lg:flex-row">
                    <li> <a href="#" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Home</a> </li>
                    <li> <a href="#" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Products</a> </li>
                    <li> <a href="#" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">About us</a> </li>
                    <li> <a href="#" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Contact</a> </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}