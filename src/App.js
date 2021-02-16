import React,{useState,useEffect} from 'react'
import Products from './components/Products/Products'
import NavBar from './components/NavBar/NavBar'
import Checkout from './components/Checkout/Checkout'
import {commerce} from './lib/commerce'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState({});

    

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };
    
      const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };

    const handleAddToCart = async (productId,quantity) => {
        const { cart } = await commerce.cart.add(productId,quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId,quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity});

        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();

        setCart(cart)
    }

    
    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    return (
        <Router>
            <div>
                <Route path="/login">
                    <Login />
                </Route>
                <Switch>
                    <Route exact path="/">
                        <NavBar totalItems={cart.total_items}/> 
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path='/cart'>
                        <NavBar totalItems={cart.total_items}/>
                        <Cart 
                            cart={cart} 
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        /> 
                    </Route>
                    <Route exact path='/checkout'>
                        <NavBar totalItems={cart.total_items}/>
                        <Checkout  handleEmptyCart={handleEmptyCart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
