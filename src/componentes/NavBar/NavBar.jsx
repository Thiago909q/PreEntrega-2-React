import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header>
        
            <h1>Relojeria Neyra</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/"> Inicio </NavLink>
                </li>

                <li>
                    <NavLink to="categoria/casio"> Casio </NavLink>
                </li>

                <li>
                    <NavLink to="categoria/tisot"> Tisot </NavLink>
                </li>

                <li>
                    <NavLink to="categoria/tommy"> Tommy </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
        </header>
    )
}

export default NavBar