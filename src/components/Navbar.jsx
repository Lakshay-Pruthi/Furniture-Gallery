import logo from '../assets/Navbar/logo.png'
import wishlist from '../assets/Navbar/wishlist.png'
import cart from '../assets/Navbar/cart.png'
import About from '../assets/Navbar/About.png'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <Link to={'Home'}> <div id='logoContainer'>
                    <img src={logo} alt="Logo" id="Logo" />
                    <h4>The Furniture Gallery</h4>
                </div>
                </Link>
                <ul id="navCatagory">
                    <NavLink to={'/Furniture-Gallery/Category/Office'}><li>Office</li></NavLink>
                    <NavLink to={'Category/Living Room'}><li>Living Room</li></NavLink>
                    <NavLink to={'Category/Kitchen'}><li>Kitchen</li></NavLink>
                    <NavLink to={'Category/Bedroom'}><li>Bedroom</li></NavLink>
                    <NavLink to={'Category/Kids'}><li>Kids</li></NavLink>
                    <NavLink to={'Category/Dining'}><li>Dining</li></NavLink>
                </ul>
                <div id='otherOptions'>
                    <Link to='About'><img src={About} alt="" /></Link>
                    <Link to='Wishlist'><img src={wishlist} alt="" /></Link>
                    <Link to='Cart'><img src={cart} alt="" /></Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;