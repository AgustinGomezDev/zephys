import './CartWidget.css'
import { FiShoppingCart } from "react-icons/fi";

export const CartWidget = () => {
    return(
        <div className="relative text-white">
            <FiShoppingCart className="text-4xl mr-2 cursor-pointer text-current hover:text-primaryColor"/>
            <p className="absolute leading-3 text-base text-current font-bold top-0 right-0 p-2 bg-violet-600 rounded-full cart-number">14</p>
        </div>
    )
}