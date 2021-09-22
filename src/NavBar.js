import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { FaPlusCircle } from 'react-icons/fa'
function NavBar () {
    return (
        <Navbar expand="lg" className = {"light-green"}>
            <Navbar.Brand href="#" className = "brand" > <FaPlusCircle fill = "#54436B" size = "35" className = "logo"/> <div className="header">Medicon Pharmacy</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <a className = "no-style" href="#home">Home</a>
                    <a className = "no-style" href="#products">Products</a>
                    <a className = "no-style" href="#aboutus"> Contact us </a>
                    
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar