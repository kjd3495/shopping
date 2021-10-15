import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
const Header = () => {
    const[{basket, user},dispatch] = useStateValue(); 
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }

    }
    return (
        <div className="header">
            <Link to = "/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
        <div className=" header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"/>

        </div>

    <div className="header_nav">
        
        <div className="header_option">
            <span className="header_optionLineOne">{!user?'guest':user.email}</span>
            <Link to = {!user && '/login'} className="homelogin">
            <span className="header_optionLineTwo"onClick={handleAuthentication}>{user?'로그아웃':'로그인'}</span>
            </Link>
        </div>
        <div className="header_option">
            <span className="header_optionLineOne">돌아가기</span>
            <span className="header_optionLineTwo">주문내역</span>
        </div>
        <div className="header_option">
            <span className="header_optionLineOne">환영합니다</span>
            <span className="header_optionLineTwo">시작해보세요</span>
        </div>
        <div className="header_optionBasket">
            <Link to = "/checkout">
            <ShoppingBasketIcon/>
            </Link>
            <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
            </span>
        </div>
    </div>
        </div>
    )
}

export default Header; 