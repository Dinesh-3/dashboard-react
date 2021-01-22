import React from "react"


class Header extends React.Component {
    render(){
        return (
            <div className="container">
                <h1>Population Dashboard</h1>
            <ul className="header"> 
                <li><a href="#population">Population</a></li>
                <li><a href="#density">Density</a></li>
                <li><a href="#landArea">Land Area</a></li>
            </ul>
            </div>
        )
    }
}

export default Header;