import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="isActive" exact={true} to="/">Home</NavLink>
        <NavLink activeClassName="isActive" to="/create">Create</NavLink>
        <NavLink activeClassName="isActive" to="/edit">Edit</NavLink>
        <NavLink activeClassName="isActive" to="/help">Help</NavLink>
    </div>
)

export default Header;