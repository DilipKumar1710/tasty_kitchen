import {Component} from 'react'
import FoodItemsContext from '../../context/FoodItemsContext';
import CartItem from '../CartItem';
import CartOrderSuccessView from '../CartOrderSuccessView';
import CartTotalCostView from '../CartTotalCostView';

import './style.css';

class CartListView extends Component{
    state = {
        isOrderPlaced : false,
    }

    orderPlaced = () => {
        this.setState(prevState => ({
            isOrderPlaced: !prevState.isOrderPlaced,
        }))
    }

    render(){
        const {isOrderPlaced} = this.state;
        return(
            <FoodItemsContext.Consumer>
                {value => {
                    const {cartList} = value;
                    
                    return isOrderPlaced ? 
                    (<CartOrderSuccessView/>
                    ) : (
                    <div className='cart-headings-container'>
                        <div className='cart-headings'>
                            <p className='cart-item-header'>Item</p>
                            <p className='cart-item-header'>Quantity</p>
                            <p className='cart-item-header'>Price</p>
                        </div>
                        <div>
                            {cartList.map(eachItem => (
                                <CartItem key={eachItem.id} itemDetails={eachItem}/>
                            ))}
                        </div>
                        <hr className="line"/>
                        <CartTotalCostView orderPlaced = {this.orderPlaced}/>
                    </div>)
                }}
            </FoodItemsContext.Consumer>
        )
    }
}

export default CartListView;