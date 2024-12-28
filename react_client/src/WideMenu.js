import React from "react";
import './styles/WideMenu.css';

export class WideMenu extends React.Component {
    render() {
        return (
            <nav class="wide-menu" id="nav">
            <span class="nav-item active">
               <a href="#">Home</a>
            </span>
            <span class="nav-item">
                <a href="#">Games</a>
            </span>
            <span class="nav-item">
                 <a href="#">Notifications</a>
            </span>
            <span class="nav-item">
                 <a href="#">Your Profile</a>
            </span>
            <span class="nav-item">
                <a href="#">About</a>
            </span>
            <span class="nav-item">
                <a href="#">Log In</a>
            </span>
            <span class="nav-item">
                 <a href="#">Register</a>
            </span>
            <span class="nav-item">
                <a href="#">Language</a>
            </span>
        </nav>
        );
    }
}

export default WideMenu;