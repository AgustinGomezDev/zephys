import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"

export const ItemDetail = ( {id, name, description, image, price, stock, category} ) => {
    const [amount, setAmount] = useState(1)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleAdd = () => {
        const item = { id, name, description, image, price, stock, category, amount }
    }

    return (
        <div className="grid grid-cols-2 mt-14 justify-items-center gap-8">
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
                <ItemCount
                    amount={amount}
                    setAmount={setAmount}
                    max={stock}
                    onAdd={handleAdd}
                />
                <hr />
                <button className="block w-60 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}