import {useEffect, useState } from "react"
import { requestData } from "../../helpers/requestData"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const { categoryId, search } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

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
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId, search])

    return(
        <div className="container mx-auto">
            {
                loading
                    ?
                    <div className="min-h-screen">
                        <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-900 leading-tight">Loading...</h2>
                    </div> 
                    : <ItemList  products={products}/>
            }
        </div>
    )
}