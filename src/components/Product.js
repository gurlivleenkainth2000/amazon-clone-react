import React from 'react';
import './../assets/Product.css';
import { useStateValue } from './../StateProvider';

function Product({ id, title, image, price, rating }) {
    const [ { basket }, dispatch ] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <span>&#8377; </span>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (<span>⭐</span>))
                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;