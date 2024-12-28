import React from "react";
import './styles/Header.css';
export class Header extends React.Component {
    state = {
        headerText: "",
        index: 0,
    }

    componentDidMount() {
        const text = "PLAY WITH CONFIDENCE";
        const interval = setInterval(() => {
            this.setState((prevState) => {
                if (this.state.index < text.length) {
                    return {
                        headerText: prevState.headerText + text[prevState.index],
                        index: prevState.index + 1,
                    };
                } else {
                    clearInterval(interval);
                    return {
                        headerText: prevState.headerText,
                        index: prevState.index,
                    };
                }
            });
        }, 150);
    }

    render() {
        return (
            <div className="header-text">
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.state.headerText}
                </div>
            </div>
        )
    }
}
