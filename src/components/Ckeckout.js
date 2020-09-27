import React from 'react';
import './../assets/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './../StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left mr-2">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/April/header/D16066823_IN_HETV_TV_CLP_TVHeader_BAUnewtheme_PC_CLP_1500x300"
                    alt=""
                    className="checkout__ad"
                />
                { basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is Empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2>Your Shopping Basket</h2>
                        {basket.map(product =>
                        <CheckoutProduct
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                        />
                        )}
                    </div>
                )}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;