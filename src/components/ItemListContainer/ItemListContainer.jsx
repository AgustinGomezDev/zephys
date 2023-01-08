import {useEffect, useState } from "react"
import { requestData } from "../../helpers/requestData"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const { categoryId, search } = useParams()

    useEffect(() => {
        requestData()
            .then((res) => {
                if(search){
                    setProducts(res.filter(prod => prod.name.toLowerCase().includes(search.toLowerCase())))
                }else if(categoryId){
                    setProducts(res.filter(prod => prod.category === categoryId))
                }else{
                    setProducts(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId, search])

    return(
        <div className="container mx-auto">
            <ItemList  products={products}/>
        </div>
    )
}