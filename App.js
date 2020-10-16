import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items1 = [
    {
      id: 1,
      name: "milk",
      price: 10,
    },
    {
      id: 2,
      name: "coffee",
      price: 32,
    },
    {
      id: 3,
      name: "tea",
      price: 51,
    },
  ];
  const items = [
    {
      id: 1,
      name: "milk",
      price: 10,
    },
    {
      id: 2,
      name: "coffee",
      price: 32,
    },
    {
      id: 3,
      name: "tea",
      price: 51,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems1 = items1.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" className="Button" value="add" onClick={() => addToCart(el)} />
    </div>
  ));
  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" className="Button" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div class="style">
    <div>
      STORE
      <div>{listItems}</div>
  <div>{listItems1}</div>
      <div class= "cart" >CART
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div></div>
    </div></div>
  );
};

export default App;