import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/CheckoutProduct.css'
const CheckoutProduct = ({id, image, title, price, rating}) => {
    const[{basket}, dispatch]= useStateValue();
    
    const onRemove= (id) => {
        dispatch ({
            type:'BASKET_REMOVE',
            id : id
        })

    }
    return (
        <div className="checkoutProduct">
            
            <img className='checkoutProduct_image' src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <div className="checkoutProduct_rating">
                    {
                    Array(rating)
                    .fill()
                    .map( () => (
                        <p>★</p>
                    )
                    )
                    
                    }
                </div>
                </p>
                <button onClick={()=> onRemove(id)}>제거하기</button>
            </div>
            

        </div>
    )
}

export default CheckoutProduct
