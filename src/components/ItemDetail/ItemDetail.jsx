import { useContext } from "react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"

export const ItemDetail = ( {id, name, description, image, price, stock, category} ) => {
    const { addToCart, isInCart } = useContext(CartContext);

    const [amount, setAmount] = useState(1)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleAdd = () => {
        const item = { id, name, description, image, price, stock, category, amount }
        addToCart(item)
    }

    return (
        <div className="grid lg:grid-cols-2 mt-14 justify-items-center gap-8 min-h-screen">
            <div>
                <img className="detail-image" src={image} alt="product image" />
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <h2 className="font-bold text-5xl">{name}</h2>
                    <small>Category: {category}</small>
                </div>
                <p className="text-xl font-medium">{description}</p>
                <p className="text-5xl font-bold">${price}</p>
                {
                    !isInCart(id)
                        ?  <ItemCount
                                amount={amount}
                                setAmount={setAmount}
                                max={stock}
                                onAdd={handleAdd}
                            />
                            
                        : <div className="flex items-center gap-5">
                            <Link to="/cart" className="rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-60 text-white bg-primaryColor hover:border-violet-200 active:bg-violet-800 focus:outline-none">Finish my purchase</Link>
                            <button onClick={handleBack} className="rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-60 text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Keep buying</button>
                          </div>
                        
                        
                } 
               
                <hr />
                <button className="block w-60 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}