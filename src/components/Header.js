// http://pngimg.com/uploads/amazon/amazon_PNG25.png
import React from 'react';
import './../assets/Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './../StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i className="fa fa-search header__searchIcon"></i>
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, Gurlivleen</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <i className="fa fa-shopping-basket header_basketIcon"></i>
                        <span className="header__optionLineTwo header_basketCount">{ basket?.length }</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;