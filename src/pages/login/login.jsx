import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoffeeIcon from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'
import Google from '../../assets/img/icons/google-icon.png'
import './login.css'

class Login extends Component {
    render() {
        return (
            <div className="flex-container">
                <aside className="aside-image"></aside>
                <main className="main">
                    <section className="top-content">
                        <img src={CoffeeIcon} alt="coffee-icon" />
                        <a href="sdfasd">Coffee Shop</a>
                        <p className="sign-up">Login</p>
                    </section>
                    <section className="main-content">
                        <form action="" className="mx-5 px-5">
                            <div className="mb-3">
                                <label for="" className="form-label fw-bold">Email Addres:</label>
                                <input type="email" name="email" className="form-control fs-6"
                                    placeholder="Enter your email address" />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label fw-bold">Password:</label>
                                <input type="password" name="password" className="form-control" placeholder="Enter your password" />
                            </div>
                            <div className="form-text">
                                <Link to='/forgot'>Forgot Password?</Link>
                            </div>
                            <div className="d-grid pt-3">
                                <button className="btn btn-warning fw-bold">Login</button>
                            </div>
                            <div className="d-grid pt-3">
                                <a className="btn btn-light" href="asd">
                                    <img src={Google} alt="google-icon" width="20px" />
                                    Sign up with Google
                                </a>
                            </div>
                        </form>
                    </section>
                    <section className="has-account pt-3">
                        <div className="underline"></div>
                        <p className="has-account-text">Don't have an account?</p>
                        <div className="underline"></div>
                    </section>
                    <section className="login-here d-grid py-3 mb-5">
                        <a href="asd" className="button fw-bold text-white text-sm">Sign up here</a>
                    </section>
                    <section className="footer-login text-start py-3">
                        <div className="coffee-shop">
                            <div className="coffee">
                                <img src={CoffeeIcon} alt="" />
                                <strong className="fw-bold">Coffee Shop</strong>
                                <p className="mt-2">Coffee Shop is a store that sells some good meals, and especially coffee. We
                                    provide
                                    high quality
                                    beans</p>
                                <div className="sosmed my-5">
                                    <a href="asd"><img src={Fb} alt="fb-vektor" /></a>
                                    <a href="asd"><img src={Twitter} alt="twitter-vector" /></a>
                                    <a href="asd"><img src={Ig} alt="ig-vector" /></a>
                                </div>
                                <div className="copyright mt-5">
                                    <p>{'&'}copy2022CoffeeStore</p>
                                </div>
                            </div>
                            <div className="product-engage">
                                <strong>Product</strong>
                                <div className="product">
                                    <div className="product-one">
                                        <a href="asd">Download</a>
                                        <a href="asd">Locations</a>
                                        <a href="asd">Blog</a>
                                    </div>
                                    <div className="product-two">
                                        <a href="asd">Pricing</a>
                                        <a href="ads">Countries</a>
                                    </div>
                                </div>
                                <strong>Engage</strong>
                                <div className="engage">
                                    <div className="engage-one">
                                        <a href="sdf">Coffee Shop ?</a>
                                        <a href="sdf">FAQ</a>
                                        <a href="sdf">Terms of Services</a>
                                    </div>
                                    <div className="engage-two">
                                        <a href="sdf">About Us</a>
                                        <a href="sdf">Privacy Policy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Login;