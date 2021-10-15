import React from 'react'
import '../styles/CheckOut.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider';
const CheckOut = () => {
    const[{basket, user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
                alt=""/>
            <div>
            <h2 className="checkout_title">
                {user?.email}의 장바구니입니다
                </h2>
                    {
                        basket.map((a)=> {
                            return(
                                <CheckoutProduct id={a.id}
                                title={a.title}
                                price={a.price}
                                image={a.image}
                                rating={a.rating}
                                />
                            ) 
                        })
                    
                    }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
                </div> 
        </div>
    )
}

export default CheckOut
