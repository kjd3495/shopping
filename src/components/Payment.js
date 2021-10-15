import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import '../styles/Payment.css'
import CheckoutProduct from './CheckoutProduct';
const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    
    return (
        <div className="payment">
            <div className="payment_container">
                <Link to ="/checkout">
                    <div className="payment_head">
                    <h1>장바구니로 돌아가기 ({basket?.length} 개의 상품목록이 존재합니다 )</h1>
                    </div>
                </Link>

        <div className="payment_section">
            <div className="payment_title">
            <h3> 배달 받을 곳</h3>
        </div>
                <div className="payment_address">
                    <p>{user?.email} 의 주소 </p>
                    <p>강원도</p>
                    <p>철원</p>  
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>상품 목록</h3>
                </div>
                <div className="payment_items">
                    {
                        basket.map( (a) => {
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
            <div className="payment_section">
                <div className="payment_title">
                    <h3>결제</h3>
                </div>
                <div className="payment_details">

                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Payment;
