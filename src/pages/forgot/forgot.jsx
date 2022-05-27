import React, { Component } from 'react';
import CoffeeIcon from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'
import './forgot.css'

class Forgot extends Component {
    render() {
        return (
            <div className="flex-container">
                <aside className="aside-image"></aside>
                <main className="main">
                    <section className="top-content-forgot">
                        <img src={CoffeeIcon} alt="coffee-icon" />
                        <a href="sdfasd">Coffee Shop</a>
                    </section>
                    <section className="forgot-text">
                        <h1>Forgot your password?</h1>
                        <p>Don’t worry, we got your back!</p>
                    </section>
                    <section className="main-content">
                        <form action="" className="mx-5 px-5">
                            <div className="mb-3">
                                <input type="email" name="email" className="form-control fs-6"
                                    placeholder="Enter your email address to get link" />
                            </div>
                            <div className="d-grid pt-3">
                                <button className="btn-lg btn-warning fw-bold">Send</button>
                            </div>
                        </form>
                    </section>
                    <section className="forgot-click pt-3">
                        <p>Click here if you didn't recieve any link in 2 minutes</p>
                        <strong>01:52</strong>
                    </section>
                    <section className="resend-link d-grid py-3 mb-5">
                        <a href="asd" className="button fw-bold text-white text-sm">Resend Link</a>
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
                                    <p>&copy2022CoffeeStore</p>
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

export default Forgot;