import './style.css';

const Counter = (props) => {
    const {itemId, quantity, increaseQuantity, decreaseQuantity} = props;

    const onDecreseQuantity = () => {
        decreaseQuantity(itemId);
    }

    const onIncreaseQuantity = () => {
        increaseQuantity(itemId);
    }

    return(
        <div className='cart-arrow-buttons-container'>
            <button
            type='button'
            className='cart-button'
            onClick={onDecreseQuantity}
            >
                -
            </button>
            <p className="cart-quantity-number">
                {quantity}
            </p>
            <button
            type='button'
            className='cart-button'
            onClick={onIncreaseQuantity}
            >
                +
            </button>
        </div>
    )
}

export default Counter;