import React from "react";
import "./styles/GeneralMenu.css";
import WideMenu from "./WideMenu";
import Navbar from "./MobileMenu";
export class GeneralMenu extends React.Component {
    render() {
        return (
            <div>
                <div className='general-menu'>
                    <Navbar/>
                    <WideMenu />
                </div>
            </div>
        );
    }
}