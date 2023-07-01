import Header from '../Header';
import Footer from '../Footer';
import CartListView from '../CartListView';
import CartEmptyView from '../CartEmptyView';
import FoodItemContext from '../../context/FoodItemsContext';

import './style.css';

const Cart = (props) => {
    return(
        <FoodItemContext.Consumer>
            {value => {
                const {cartList} = value;
                const cartItemsLength = cartList.length === 0;
                return(
                    <>
                        <Header activeTabId="Cart"/>
                        <div className='cart-main-container'>
                            {cartItemsLength ? <CartEmptyView/> : <CartListView/>}
                        </div>
                        <Footer/>
                    </>
                )
            }}
        </FoodItemContext.Consumer>
    )
}

export default Cart;