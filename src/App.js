import { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/index';
import LoginForm from './components/LoginForm/index';
import ProtectedRoute from './components/ProtectedRoute';
import RestaurantDetails from "./components/RestaurantDetails";
import FoodItemContext from './context/FoodItemsContext';
import Cart from './components/Cart';
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import './App.css';

const getCartDataFromLocalStorage = () => {
  const storedCartData = localStorage.getItem('cartData');
  const convertedCartData = JSON.parse(storedCartData);

  if (convertedCartData === null){
    return []
  }
  return convertedCartData
}

class App extends Component{
  state = {
    cartList:getCartDataFromLocalStorage(),
  }

  addCartItem = product => {
    const {cartList} = this.state;

    const checkFoodItem = cartList.find(eachFoodItem => eachFoodItem.id === product.id);
    
    if (checkFoodItem){
      this.setState(prevState =>({
        cartList: prevState.cartList.map(eachItem => {
          if (eachItem.id === product.id){
            const updateQuantity = product.quantity;
            return {...eachItem, quantity: updateQuantity}
          }
          return eachItem
        }),
      }))
    }else{
      const updateCartItem = [...cartList, product];
      this.setState({
        cartList: updateCartItem
      })
    }
  }

  removeCartItem = (id) => {
    const {cartList} = this.state;

    const filteredItems = cartList.filter(eachItem => eachItem.id !== id);

    this.setState({
      cartList:filteredItems,
    })
  }

  removeAllCartItems = () => {
    this.setState({
      cartList: [],
    })
  }

  increaseQuantity = (itemId) => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem => {
        if (eachItem.id === itemId){
          const increaseQuantity = eachItem.quantity + 1;
          return {...eachItem, quantity: increaseQuantity}
        }
        return eachItem
      })
    }))
  }

  decreaseQuantity = (itemId) => {
    const {cartList} = this.state;

    const foodItem = cartList.find(eachItem => eachItem.id === itemId);

    if (foodItem.quantity > 1){
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          if (eachItem.id === itemId){
            const decreaseQuantity = eachItem.quantity - 1;
            return {...eachItem, quantity : decreaseQuantity}
          }
          return eachItem
        }),
      }))
    } else {
      this.removeCartItem(itemId)
    }
  }

  render(){
    const {cartList} = this.state;
    localStorage.setItem('cartData', JSON.stringify(cartList));
    return(
      <FoodItemContext.Provider 
        value ={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
        }}
    >
      <Switch>
        <Route path ='/login' component={LoginForm}/>
        <ProtectedRoute exact path ='/' component={Home}/>
        <ProtectedRoute exact path = '/restaurant/:id' component={RestaurantDetails}/>
        <ProtectedRoute exact path = '/cart' component={Cart}/>
        <ProtectedRoute exact path = '/profile' component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </FoodItemContext.Provider>
    )
  }
}

export default App;