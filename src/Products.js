import React from 'react'
import products from './Products.json'
import Product from './Product'
function Products() {
    return (
        <div id = "products">
            <h1 style= {{fontFamily: 'Oswald, sans-serif', textAlign: 'center', color: "#50CB93", margin: "20px 0"}} >Products</h1>
            <div className = "products">
            {
                products.map((val) => {
                    return <Product name = {val.name} url = {val.url} price = {val.price} />
                })
            }
            </div>
        </div>
    )
}

export default Products
