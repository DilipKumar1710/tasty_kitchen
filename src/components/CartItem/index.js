import {BiRupee} from 'react-icons/bi';
import FoodItemContext from '../../context/FoodItemsContext';
import Counter from '../Counter';
import './style.css';

const CartItem = (props) => (
        <FoodItemContext.Consumer>
            {value => {
                const {increaseQuantity, decreaseQuantity} = value;
                const {itemDetails} = props;
                const {id, imageUrl, name, cost, quantity} = itemDetails;
                const itemCost = quantity * cost;

                return(
                    <div className='food-details-container'>
                        <img src={imageUrl} alt={name} className="cart-image"/>
                        <div className="cart-details-container">
                            <h1 className="cart-food-name">{name}</h1>
                            <div className="cart-quantity-container">
                                <Counter
                                    key={id}
                                    quantity={quantity}
                                    increaseQuantity={increaseQuantity}
                                    decreaseQuantity={decreaseQuantity}
                                    itemId={id}
                                />
                                <div className='cart-food-item-price-container'>
                                    <BiRupee className="cart-food-item-price-icon" />
                                    <p className="cart-food-item-price">{itemCost}.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </FoodItemContext.Consumer>
    )

export default CartItem;