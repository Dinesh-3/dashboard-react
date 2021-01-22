import React from "react"
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(){
        return (
            <div className="container">
                <h1>World Population Dashboard</h1>
            <ul className="header"> 
                {/* <li><a href="#population">Population</a></li>
                <li><a href="#density">Density</a></li>
                <li><a href="#landArea">Land Area</a></li> */}
                <li><Link to="/">Population</Link></li>
                <li><Link to="/density">Density</Link></li>
                <li><Link to="/land-area">Land Area</Link></li>
            </ul>
            </div>
        )
    }
}

export default Header;