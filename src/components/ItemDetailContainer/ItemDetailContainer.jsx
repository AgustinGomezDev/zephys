import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { requestDataById } from "../../helpers/requestData"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        requestDataById( Number(itemId) )
            .then((data) => {
                setItem(data)
            })
    }, [itemId])

    return(
        <div className="container mx-auto">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )
}