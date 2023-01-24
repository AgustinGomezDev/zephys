import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, getDoc, getDocs, doc, writeBatch, query, where, documentId } from "firebase/firestore";

export const Checkout = () => {
    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: ''
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const order = {
            buyer: values,
            items: cart,
            price: totalPrice()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productsRef = collection(db, "products")
        const itemsRef = query(productsRef, where( documentId(), 'in', cart.map(prod => prod.id) ))

        const outOfStock = []

        const products = await getDocs(itemsRef)
        products.docs.forEach( doc => {
            const item = cart.find(item => item.id === doc.id)
            if(doc.data().stock >= item.amount){
                batch.update( doc.ref, { stock: doc.data().stock - item.amount } )
            }else{
                outOfStock.push(item)
            }
        } )

        if(outOfStock.length === 0){
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, order)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptyCart()
                        })
                        .catch((err) => console.log(err))
                })
        }else{
            alert("There is no stock available for any product, sorry!")
        }
    }

    if(orderId){
        return (
            <div className="container mx-auto" style={{minHeight: "900px"}}>
                <h2 className="mb-2 inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Your purchase has been entered successfully</h2>
                <hr />
                <p className="my-4 text-xl">Your order code is <b>{orderId}</b>, thanks for shopping at Zephys!</p>
                <Link to="/" className="rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-40 font-bold text-white bg-darkBgColor hover:border-primaryColor focus:outline-none">Back</Link>
            </div>
        )
    }

    if(cart.length === 0){
        return <Navigate to="/" />
    }

    return (
        <div className="container mx-auto" style={{minHeight: "900px"}}>   
            <h2 className="mb-2 inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Finishing my purchase</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Your name"
                        className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        required
                    />
                    <input
                        onChange={handleInputChange}
                        type="text"
                        name="address"
                        value={values.address}
                        placeholder="Your address"
                        className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        required
                    />
                    <input
                        onChange={handleInputChange}
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Your email"
                        className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        required
                    />
                </div>
                <button className="mt-5 block w-40 font-bold text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Send</button>
            </form>
        </div>
    )
}