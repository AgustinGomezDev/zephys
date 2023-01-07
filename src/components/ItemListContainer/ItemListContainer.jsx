import {useEffect, useState } from "react"
import { requestData } from "../../helpers/requestData"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        requestData()
            .then((res) => {
                if(!categoryId){
                    setProducts(res)
                }else{
                    setProducts(res.filter(prod => prod.category === categoryId))
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])

    return(
        <div className="container mx-auto">
            <ItemList  products={products}/>
        </div>
    )
}