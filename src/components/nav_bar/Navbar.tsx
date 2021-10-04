import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavTitle,
} from "./NavbarElements";

function Navbar() {
    return (
           <Nav>
            <NavTitle to='/'>
                NECTER
            </NavTitle>
            <NavMenu>
                <NavLink to="/">
                    Home
                </NavLink>
                {/* <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    Sign In
                </NavLink> */}
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav>
    );
};

export default Navbar;