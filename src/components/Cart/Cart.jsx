import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

export const Cart = () => {
    const { cart, emptyCart, totalPrice, removeFromCart } = useContext(CartContext)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return(
        <div className="container mx-auto">
            <h2 className="inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Your purchase</h2>
            <hr />
            {
                cart.map(item => (
                    <div className="px-5 py-1 bg-white even:bg-gray-100 mt-3 w-full flex items-center justify-between" key={item.id}>
                        <div>
                            <h4 className="text-lg font-bold">{item.name}</h4>
                            <p className="text-lg font-medium">Amount: {item.amount}</p>
                            <p className="text-lg font-medium">Unit price: ${item.price}</p>
                            <p className="text-lg font-medium">Total price: ${(item.price * item.amount).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <button onClick={() => removeFromCart(item.id)} className="block font-bold text-white bg-red-500 hover:border-red-200 active:bg-red-800 focus:outline-none">Remove from cart</button>
                        </div>
                    </div>
                ))
            }
            <hr />
            <div className="mt-3">
                <h4 className="text-2xl font-extrabold">Total: ${ totalPrice().toFixed(2) }</h4>
                <div className="flex justify-between mt-3">
                    <div>
                        <button className="block w-40 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Back</button>
                    </div>
                    <div className="flex items-center gap-8">
                        <button onClick={emptyCart} className="block w-40 font-bold text-white bg-red-500 hover:border-red-200 active:bg-red-800 focus:outline-none">Empty cart</button>
                        <button className="block w-40 font-bold text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Buy cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}