import {Component} from 'react';
import {AiFillStar} from 'react-icons/ai';
import {BiRupee} from 'react-icons/bi';
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs';
import FoodItemContext from '../../context/FoodItemsContext';
import './style.css';

class FoodItemCard extends Component{
    state = {
        quantity : 0,
    }

    render(){
        return(
            <FoodItemContext.Consumer>
            {value => {
                const {addCartItem,increaseQuantity, decreaseQuantity} = value;
                const {itemsDetails} = this.props;   
                const {id, imageUrl, name, cost, rating} = itemsDetails;
                const {quantity} = this.state;

                const onClickAddItemButton = () => {
                    this.setState(prevState => ({
                        quantity: prevState.quantity + 1
                    }),
                    addCartItem({...itemsDetails, quantity: quantity + 1}))
                }
            
                const onClickDecreaseButton =  () => {
                    this.setState(prevState => ({
                        quantity: prevState.quantity - 1,
                    }))
                    decreaseQuantity(id)
                }
            
                const onClickIncreaseButton = () => {
                    this.setState(prevState => ({
                        quantity: prevState.quantity + 1,
                    }))
                    increaseQuantity(id)
                }

                return(
                    <li className='item-card-container'>
                        <img 
                            src={imageUrl} 
                            alt={name}
                            className='item-image' />
                        <div className="item-details">
                            <h1 className="item-name">{name}</h1>
                            <div className="cost-container">
                                <BiRupee className="icon"/>
                                <p className="cost">{cost}</p>
                            </div>
                            <div className="cost-container">
                                <AiFillStar className="star-icon"/>
                                <p className="item-rating">{rating}</p>
                            </div>
                            {quantity < 1 ? 
                                (<button 
                                    type="button"
                                    className='add-item-button'
                                    onClick={onClickAddItemButton}
                                >Add</button>)
                                : 
                                (<div className='arrow-buttons-container'>
                                    <button
                                    type="button" 
                                    className='i-button'
                                    onClick={onClickDecreaseButton}
                                    >
                                        <BsDashSquare className='item-add-remove-icon'/>
                                    </button>
                                    <p className='quantity-number'>
                                        {quantity}
                                    </p>
                                    <button
                                    type='button'
                                    className='i-button'
                                    onClick={onClickIncreaseButton}
                                    >
                                        <BsPlusSquare className='item-add-remove-icon'/>
                                    </button>
                                </div>)}
                        </div>
                    </li>
                )
            }}
        </FoodItemContext.Consumer>
        )
    }
}

export default FoodItemCard;