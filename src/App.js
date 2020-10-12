import React, { useState, useEffect } from "react";
import Product from "./Components/product";
import ContactFrom from "./Components/contactFrom";
import Checkout from "./Components/Checkout";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart([...cart, data]);
  };

  const handleOrder = () => {
    //axios api request
  };

  const removeFromCart = (data) => {
    setCart((prevCart) => {
      let ignore = prevCart.findIndex((item) => item.id === data.id);
      return prevCart.filter((item, index) => index !== ignore);
    });
  };

  const total = () => {
    return cart.reduce((current, item) => {
      return parseInt(item.unit_price) + current;
    }, 0);
  };

  useEffect(() => {
    setProducts(() => {
      return [
        {
          id: 1,
          name: "Demo Product 1",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          unit_price: "250",
          has_discount: false,
          discount: 0,
          is_available: true,
          product_image: "https://picsum.photos/200/300",
        },
        {
          id: 2,
          name: "Demo Product 2",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          unit_price: "450",
          has_discount: true,
          discount: 100,
          is_available: true,
          product_image: "https://picsum.photos/200/300",
        },
        {
          id: 3,
          name: "Demo Product 3",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          unit_price: "450",
          has_discount: true,
          discount: 100,
          is_available: true,
          product_image: "https://picsum.photos/200/300",
        },
      ];
    });
  }, []);

  return (
    <Container maxWidth="xs">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            data={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
      {/* <h1>Total amount:</h1> {total()}
     <ContactFrom />
      <Button variant="contained" color="primary" onClick={handleOrder}>
        Order
      </Button> */}
      <Checkout qty={cart.length} onClick={handleOrder} total={total()} />
    </Container>
  );
}

export default App;
