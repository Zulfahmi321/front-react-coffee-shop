import React, { Component } from 'react'
import Logo from '../../assets/img/icons/coffee-icon.png'
import './header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-4">
                    <div className="container">
                        <div className="logo">
                            <a className="navbar-brand fw-bold" href="">
                                <img src={Logo} alt="logo"
                                    width="30px" />Coffee Shop</a>
                        </div>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#kolep">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="kolep">
                            <div className="col-lg-4 col-md-4 offset-lg-2">
                                <ul className="navbar-nav fw-bold">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            Product
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            Your Cart
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            History
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4 offset-lg-2">
                                <ul className="navbar-nav">
                                    <li className="nav-item position-relative chat-icon">
                                        <a className="nav-link button-login" href="/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link button-signup" href="/signup">Sign Up</a>
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