import { Item } from "../Item/Item"

export const ItemList = ({products}) => {
    return (
        <div>
            <h2 className="text-center text-6xl mt-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-900 leading-tight">¡Welcome to Zephys!</h2>
            <h3 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-900 leading-tight">Take a look at our products</h3>
            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-9">
                {products.map((prod) => <Item key={prod.id} prod={prod} />)}
            </section>
        </div>
    )
}