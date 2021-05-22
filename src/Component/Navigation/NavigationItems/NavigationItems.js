import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navigationItems=(props)=>{
    return(
        <ul className="navigationItems">
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/add">Add</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
        </ul>
        
    )
    }
export default navigationItems