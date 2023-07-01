import { Component } from "react";
import Header from '../Header/index';
import RestaurantsOffer from "../RestaurantsOffer";
import RestaurantsList from '../RestaurantsList';
import Footer from "../Footer";


class Home extends Component{
    render(){
        return(
            <>
                <Header activeTabId="Home"/>
                <RestaurantsOffer/>
                <RestaurantsList/>
                <Footer/>
            </>
        )
    }
}

export default Home;