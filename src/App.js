import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { commerce } from './lib/commerce.js';
import { Products, Navbar, Cart, Checkout } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const data = await commerce.products.list();
        
        setProducts(data.data);
        
    };

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();

        setCart(cart);
    };

    const handleAddToCart = async ( productId, quantity ) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(products);

    return(
        <Router>
            <Navbar totalItems={cart.total_items} />
            <Routes>
                <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart} />} />
                <Route path='/cart' element={<Cart 
                                                cart={cart}
                                                handleUpdateCartQty={handleUpdateCartQty}
                                                handleRemoveFromCart={handleRemoveFromCart}
                                                handleEmptyCart={handleEmptyCart} 
                                            />} 
                />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;