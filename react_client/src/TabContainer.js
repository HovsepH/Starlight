import React from "react";
import { Header } from "./Header";
import './styles/TabContainer.css';

export class TabContainer extends React.Component {
    render() {
        return (
            <div className="header-bg">
                <Header title= {this.props.title}/>
            </div>
        );
    }
}

export default TabContainer;