import {MdOutlineSort} from 'react-icons/md';
import './style.css';


const RestaurantSortingHeader = props =>{
    const {sortOptions,activeSortOption,changeSortOption} = props;

    const onChangeSortOption = (event) => {
        changeSortOption(event.target.value)
    }

    return(
        <div className='sort-options-main-container'>
            <div className='heading-container'>
                <h1 className="popular-restaurants-heading">Popular Restaurants</h1>
                <p className="popular-restaurants-description">Select Your favourite restaurant special dish and make your day
                happy....</p>
            </div>
            <div className='sort-by-container'>
                <div className='sort-icon-container'>
                    <MdOutlineSort className='sort-icon' color="#475569"/>
                    <p className='sort-by-heading'>Sort by</p>
                </div>
                <div className='select-options'>
                    <select
                    name='sort-select'
                    className='select-container'
                    value={activeSortOption}
                    onChange={onChangeSortOption}
                    >
                        {sortOptions.map(eachOption => (
                            <option key={eachOption.id} value={eachOption.value}>{eachOption.displayText}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default RestaurantSortingHeader;