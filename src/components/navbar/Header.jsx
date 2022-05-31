import React, { Component } from 'react'
import Logo from '../../assets/img/icons/coffee-icon.png'
import { Link } from 'react-router-dom'
import './header.css';
import searchIcon from '../../assets/img/icons/search-icon.svg'
import chatIcon from '../../assets/img/icons/chat-icon.svg'
import profilImg from '../../assets/img/profil.png'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedin: localStorage.getItem("user-info") ? true : false
        }
    }
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
                                        <Link className='nav-link' to='/payment'>You Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/history">History</Link>
                                    </li>
                                </ul>
                            </div>
                            {this.state.isLoggedin ?
                                <div className="col-lg-4 col-md-4 offset-lg-3">
                                    <ul className="navbar-nav">
                                        <li className="nav-item px-2">
                                            <a className="nav-link" href="">
                                                <img src={searchIcon} alt="" />
                                            </a>
                                        </li>
                                        <li className="nav-item px-2 position-relative chat-icon">
                                            <a className="nav-link" href="">
                                                <span>1</span>
                                                <img src={chatIcon} alt="" />
                                            </a>
                                        </li>
                                        <li className="nav-item px-2">
                                            <Link className="nav-link" to="/profil">
                                                <img className="nav-profil-img" src={profilImg} alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                :
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
                            }
                        </div>
                    </div>
                </nav>
            </header >
        )
    }
}

export default Header