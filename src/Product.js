import React, { useState } from 'react'
import { AiOutlinePlusCircle , AiOutlineMinusCircle , AiOutlineShoppingCart } from 'react-icons/ai'
function Product({ name, url, price}) {
    const [ num , setNum] = useState(0)
    return (
        <div className = "price-card">
            <img src = {url} alt = "" className="product-img" />
            <div className = "card-flex">
                <div>
                <h5 className = {"product-name"} >{name}</h5>
                <h6 className = {"product-price"} > {price}</h6>
                <div>
                    <AiOutlineMinusCircle size = {30} className = {"icons"} onClick={() => num === 0 ? num : setNum(num - 1)}/>
                    {num}
                    <AiOutlinePlusCircle size = {30} className = {"icons"} onClick={() => num >= 10 ? num : setNum(num + 1)}/>
                </div>
            </div>
            <button className = "btn button"> <AiOutlineShoppingCart style = {{ marginRight: "10px"}}/> Buy Now</button>
            </div>
        </div>
    )
}

export default Product
