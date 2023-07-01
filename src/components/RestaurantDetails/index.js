import { Component } from "react";
import Cookies from "js-cookie";
import Loader from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import RestaurantDetailsCard from '../RestaurantDetailsCard';
import FoodItemCard from "../FoodItemCard";
import './style.css';

const apiStatusConstants = {
    initial:'INITIAL',
    success:'SUCCESS',
    inProgress:'IN_PROGRESS',

}

class RestaurantDetails extends Component{
    state = {
        apiStatus : apiStatusConstants.initial,
        restaurantDetails: {},
        restautantItems : [],
    }

    componentDidMount(){
        this.getRestaurantDetails()
    }

    getRestaurantDetails = async () => {
        this.setState({
            apiStatus:apiStatusConstants.inProgress,
        })

        const jwtToken = Cookies.get('jwt_token');
        const {match} = this.props 
        const {params} = match;
        const {id} = params ;
        const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`;
        const options = {
            method : "GET",
            headers : {
                Authorization : `Bearer ${jwtToken}`,
            }
        };

        const response = await fetch(apiUrl, options);

        if (response.ok){
            const data = await response.json();
            const fetchedDetails = {
                id : data.id,
                rating: data.rating,
                name : data.name,
                costForTwo : data.cost_for_two,
                cuisine : data.cuisine,
                imageUrl : data.image_url,
                itemsCount: data.items_count,
                location: data.location,
                opensAt: data.opens_at,
                reviewsCount: data.reviews_count, 
            }

            const foodItems = data.food_items.map(eachFood => ({
                cost: eachFood.cost,
                foodType: eachFood.food_type,
                id: eachFood.id,
                imageUrl: eachFood.image_url,
                name: eachFood.name,
                rating: eachFood.rating,
            }))

            this.setState({
                apiStatus: apiStatusConstants.success,
                restaurantDetails: fetchedDetails,
                restautantItems : foodItems,
            })
        }

    }

    renderRestaurantDetailsView = () => {
        const {restaurantDetails, restautantItems} = this.state;

        return(
            <div className="top-section">
                <RestaurantDetailsCard restaurantDetails={restaurantDetails}/>
                <ul className="food-items-container">
                    {restautantItems.map(eachItem => (
                        <FoodItemCard key={eachItem.id} itemsDetails={eachItem}/>))}
                </ul>
            </div>
        )
    }

    renderLoadingView = () => {
        <div className="details-loader">
            <Loader type="Oval" color="#F7931E" height="100%" width="100%"/>
        </div>
    }

    renderRestaurantAndFoodItemsPage = () => {
        const {apiStatus} = this.state;

        switch (apiStatus) {
            case apiStatusConstants.inProgress:
                return this.renderLoadingView();
            case apiStatusConstants.success:
                return this.renderRestaurantDetailsView();
            default:
                return null;
        }
    }
    

    render(){
        return(
            <>  
                <Header/>
                {this.renderRestaurantAndFoodItemsPage()}
                <Footer/>
            </>
        )
    }
}

export default RestaurantDetails;