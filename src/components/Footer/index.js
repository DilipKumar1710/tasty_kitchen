import {
    FaPinterestSquare,
    FaInstagram,
    FaTwitter,
    FaFacebookSquare,
  } from 'react-icons/fa'
import './style.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-name-container">
                <img 
                    src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662271193/Frame_275footer_logo_virrgu.png" 
                    alt="website-footer-logo"
                    className = "footer-logo" 
                />
                <h1 className="footer-heading">Tasty Kitchens</h1>
            </div>
            <p className="footer-description">The only thing we are serious about is food.
                <br/>Contact Us on
            </p>
            <div className="icons-container">
                <FaPinterestSquare className='social-media-icon'/>
                <FaInstagram className='social-media-icon'/>
                <FaTwitter className='social-media-icon'/>
                <FaFacebookSquare className='social-media-icon'/>
            </div>
        </div>
    )
}

export default Footer;