import { useNavigate } from "react-router-dom"
import "./ItemDetail.css"

export const ItemDetail = ( {name, description, image, price, category} ) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="grid grid-cols-2 mt-14 justify-items-center gap-8">
            <div>
                <img className="detail-image" src={image} alt="product image" />
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="font-bold text-5xl">{name}</h2>
                {/* <small>{category}</small> */}
                <p className="text-xl font-medium">{description}</p>
                <p className="text-5xl font-bold">${price}</p>
                <div className="flex gap-8">
                    <button className="block w-60 text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Add to cart</button>
                    <button className="block w-60 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    )
}