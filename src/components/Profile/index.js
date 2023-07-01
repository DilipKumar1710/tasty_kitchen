import React from 'react';
import {BsFillPersonCheckFill} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {FcApproval, FcCheckmark} from 'react-icons/fc';
import {FaRupeeSign} from 'react-icons/fa';
import Header from '../Header';
import './style.css';

const Profile = () => {
  return (
    <>
        <Header activeTabId='Profile'/>
        <div className='profile-main-container'>
            <div className='username-container'>
                <div className='name-and-edit-container'>
                    <div className='name-and-icon-container'>
                        <h1 className='username'>Dilip Kumar</h1>
                        <BsFillPersonCheckFill className='username-check-icon'/>
                    </div>
                    <button className='profile-edit-button'>
                        EDIT
                    </button>
                </div>
                <p className='username-emailid'>dilipkumar.vaddepally141@gmail.com</p>
                <hr className='section-seperate-line'/>
            </div>
            <div className='heading-container'>
                <div className='heading-and-dropdown-icon-container'>
                    <h1 className='heading'>My Account</h1>
                    <IoIosArrowDown className='dropdown-icon'/>    
                </div>
                <p className='details'>Address, Favorites, Offers & Settings...</p>
            </div>
            <hr className='section-seperate-line'/>
            <div className='heading-container'>
                <div className='heading-and-dropdown-icon-container'>
                    <h1 className='heading'>Payments & Refunds</h1>
                    <IoIosArrowDown className='dropdown-icon'/>    
                </div>
                <p className='details'>Manage your Refunds, Payment Modes...</p>
            </div>
            <hr className='section-seperate-line'/>
            <div className='heading-container'>
                <div className='membership-container'>
                    <FcApproval className='approval-icon'/>
                    <h1 className='heading'>PRO membership</h1>
                </div>
                <p className='details'>Get Unlimited Free Delivery & Extra Discounts with Tasty Kitchens PRO. Buy @199 for 1 month.</p>
            </div>
            <hr className='section-seperate-line'/>
            <div username-container></div>
            <div className='username-container'>
                <h1 className='past-orders'>PAST ORDERS</h1>
                <div className='name-and-edit-container'>
                    <h1 className='heading'>Cream Stone</h1>
                    <p className='username-emailid'>Delivered
                    <FcCheckmark className='dropdown-icon'/>
                    </p>
                </div>
                <p className='location'>Keerthi nagar</p>
                <p className='rupees'><FaRupeeSign className='rupees-icon'/> 525</p>
            </div>
        </div>
    </>
  )
}

export default Profile;