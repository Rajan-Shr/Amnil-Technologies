import '../App.css';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-ul">
                <li><NavLink className={(e)=>{return e.isActive ? "active" : ""}} to="/">Home</NavLink></li>
                <li><NavLink className={(e)=>{return e.isActive ? "active" : ""}} to="/about">About</NavLink></li>
                <li><NavLink className={(e)=>{return e.isActive ? "active" : ""}} to="/contact">Contact</NavLink></li>
                <li><NavLink className={(e)=>{return e.isActive ? "active" : ""}} to="/company/randomCompany">Company</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
