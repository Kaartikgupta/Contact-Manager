import React from "react";
import "./Toolbar.css"
import NavigationItems from "../NavigationItems/NavigationItems"

const toolbar=(props)=>(
    <header className="Toolbar">
        <div>Contact Manager</div>
        <nav className="DesktopOnly"><NavigationItems /></nav>
    </header>
);

export default toolbar;