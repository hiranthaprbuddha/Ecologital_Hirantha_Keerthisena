import React, { useState } from "react";
import{
    FaTh,
    FaBars,
    FaTag,
    FaCircle,
    FaBoxes,
    FaIdBadge
    
}from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuitem=[
        {
            path:"/product",
            name:"Product",
            icon:<FaTag/>
        },
        {
            path:"/offers",
            name:"Offers",
            icon:<FaCircle/>
        },
        {
            path:"/",
            name:"Category",
            icon:<FaBoxes/>
        },
        {
            path:"/brand",
            name:"Brand",
            icon:<FaIdBadge/>
        },
    ]
    return(
        <div className="container">
            <div style={{width: isOpen ? "190px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}}  className="logo">W.</h1>
                    <div style={{marginLeft: isOpen ? "110px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuitem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="linktext">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;