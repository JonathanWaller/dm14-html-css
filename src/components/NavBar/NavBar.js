import React from 'react';
import './NavBar.css';


const NavBar = () => (
    <nav>
        <p>DesignBetter.Co</p>
        <ul className="links">
            <li className = "link">BOOKS</li>
            <li className = "link">PODCAST</li>
            <li className = "link">WORK</li>
            <li className = "link">CONVERSATIONS</li>
        </ul>
        <div className = "subscribe">SUBSCRIBE</div>
    </nav>

);

export default NavBar;
