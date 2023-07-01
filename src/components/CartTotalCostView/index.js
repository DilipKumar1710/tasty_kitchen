import {BiRupee} from 'react-icons/bi';
import FoodItemContext from "../../context/FoodItemsContext";
import './style.css';

const CartTotalCostView = (props) => {
    const {orderPlaced} = props;

    return(
        <FoodItemContext>
            {value => {
                const {cartList} = value;

                const onClickPlaceOrderButton = () => {
                    orderPlaced();
                }

                let totalCost = 0;

                cartList.forEach(eachItem => {
                    totalCost += eachItem.quantity * eachItem.cost;
                });

                return(
                    <>
                    <div className="total-price-container">
                        <h1 className='total-price-heading'>Order Total: </h1>
                        <div className="total-price-icon-and-price">
                            <BiRupee className="total-price-icon"/>
                            <p className="total-price">
                                {totalCost}.00
                            </p>
                        </div>
                    </div>
                    <button
                        type='button'
                        className="place-order-button"
                        onClick={onClickPlaceOrderButton}
                    >
                        Place Order
                    </button>
                    </>
                )
            }}
        </FoodItemContext>
    )
}

export default CartTotalCostView;
