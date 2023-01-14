import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {
    const { cart, emptyCart } = useContext(CartContext)

    return(
        <div className="container mx-auto">
            <h2 className="inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Your purchase</h2>
            <hr />

            {
                cart.map(item => (
                    <div className="mt-3 w-full flex items-center justify-between" key={item.id}>
                        <div>
                            <h4 className="text-lg font-bold">{item.name}</h4>
                            <p className="text-lg font-medium">Amount: {item.amount}</p>
                            <p className="text-lg font-medium">Price: ${item.price * item.amount}</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <button className="block font-bold text-white bg-red-500 hover:border-red-200 active:bg-red-800 focus:outline-none">Remove from cart</button>
                            <button className="block font-bold text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">+</button>
                        </div>
                    </div>
                ))
            }
            <hr />
            <div className="flex items-center gap-8 mt-3">
                <button onClick={emptyCart} className="block w-40 font-bold text-white bg-red-500 hover:border-red-200 active:bg-red-800 focus:outline-none">Empty cart</button>
                <button className="block w-40 font-bold text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Buy cart</button>
            </div>
        </div>
    )
}