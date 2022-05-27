import React, { Component } from 'react'
import Logo from '../../assets/img/icons/coffee-icon.png'
import { Link } from 'react-router-dom'
import './header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-4">
                    <div className="container">
                        <div className="logo">
                            <Link className='navbar-brand' to='/'><img src={Logo} alt="logo"
                                width="30px" />Coffee Shop</Link>
                        </div>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#kolep">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="kolep">
                            <div className="col-lg-4 col-md-4 offset-lg-2">
                                <ul className="navbar-nav fw-bold">
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/product'>Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/cart'>You Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/history">History</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4 offset-lg-2">
                                <ul className="navbar-nav">
                                    <li className="nav-item position-relative chat-icon">
                                        <Link className="nav-link button-login" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link button-signup" to="/signup">Sign Up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
        )
    }
}

export default Header