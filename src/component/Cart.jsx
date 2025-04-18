import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart, removeCart } from '../redux/handleCart';

export default function Cart() {
  const cart = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const increaseQty = (product) => {
    dispatch(addCart(product));
  };

  const decreaseQty = (product) => {
    dispatch(delCart(product));
  };

  const removeItem = (product) => {
    dispatch(removeCart(product));
  };

  return (
    <div className="container my-5">
      
      {cart.length === 0 ? (
        <h2 className='d-flex display-content-center'>Your cart is empty 😞 </h2>
      ) : (
        cart.map((product) => (
          <div className="row my-4" key={product.id}>
            <div className="col-md-3">
              <img src={product.image} alt={product.title} height="100" />
            </div>
            <div className="col-md-6">
              <h5>{product.title}</h5>
              <p className="lead fw-bold">
                ${product.price} x {product.qty} = ${product.price * product.qty}
              </p>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-dark me-2" onClick={() => decreaseQty(product)}>-</button>
              <button className="btn btn-outline-dark me-2" onClick={() => increaseQty(product)}>+</button>
              <button className="btn btn-danger" onClick={() => removeItem(product)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
