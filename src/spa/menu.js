import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/about">About</Link> &nbsp;
                <Link to="/services">Services</Link> &nbsp;
                <Link to="/contact">Contact</Link> &nbsp;

            </div>
        );
    }
}
 
export default Menu;