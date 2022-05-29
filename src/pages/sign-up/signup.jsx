import React, { Component } from 'react';
import CoffeeIcon from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'
import Google from '../../assets/img/icons/google-icon.png'
import './signup.css'
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            mobile_number: '',
        };
    }
    render() {
        return (
            <div className="flex-container">
                <aside className="aside-image"></aside>
                <main className="main">
                    <section className="top-content">
                        <img src={CoffeeIcon} alt="coffee-icon" />
                        <a href="asd">Coffee Shop</a>
                        <p className="sign-up">Sign Up</p>
                    </section>
                    <section className="main-content">
                        <form action="" className="mx-5 px-5">
                            <div className="mb-3">
                                <label for="" className="form-label fw-bold">Email Addres:</label>
                                <input type="email" name="email" className="form-control fs-6"
                                    placeholder="Enter your email address"
                                    onChange={e => {
                                        this.setState({
                                            email: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label fw-bold">Password:</label>
                                <input type="password" name="password" className="form-control" placeholder="Enter your password"
                                    onChange={e => {
                                        this.setState({
                                            password: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label fw-bold">Phone Number:</label>
                                <input type="text" pattern="[0-9]+" name="phone" className="form-control"
                                    placeholder="Enter your phone number"
                                    onChange={e => {
                                        this.setState({
                                            mobile_number: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="d-grid pt-3">
                                <div className="btn btn-warning fw-bold"
                                    onClick={() => {
                                        const { email, password, mobile_number } = this.state;
                                        const body = { email, password, mobile_number };
                                        axios
                                            .post("http://localhost:8080/auth/new", body)
                                            .then(result => {
                                                console.log(result)
                                                alert(result.data.data.msg)
                                            })
                                            .catch(error => {
                                                console.log(error)
                                                alert(error.response.data.err.msg)
                                            })
                                    }
                                    }
                                >Sign Up</div>
                            </div>
                            <div className="d-grid pt-3 ">
                                <a href="asd" className="btn btn-light fw-bold">
                                    <img src={Google} alt="google-icon" width="20px" />
                                    Sign up with Google
                                </a>
                            </div>
                        </form>
                    </section>
                    <section className="has-account pt-3">
                        <div className="underline"></div>
                        <p className="has-account-text">Already have an account?</p>
                        <div className="underline"></div>
                    </section>
                    <section className="login-here d-grid py-3 mb-5">
                        <a href="asd" className="button fw-bold text-white text-sm">Login here</a>
                    </section>
                    <section className="footer-signup py-5 text-start">
                        <div className="coffee-shop">
                            <div className="coffee">
                                <img src={CoffeeIcon} alt="" />
                                <strong className="fw-bold">Coffee Shop</strong>
                                <p className="about-coffee mt-2">Coffee Shop is a store that sells some good meals, and especially
                                    coffee. We
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
                                        <a href="asd">Countries</a>
                                    </div>
                                </div>
                                <strong>Engage</strong>
                                <div className="engage">
                                    <div className="engage-one">
                                        <a href="asd">Coffee Shop ?</a>
                                        <a href="das">FAQ</a>
                                        <a href="ads">Terms of Services</a>
                                    </div>
                                    <div className="engage-two">
                                        <a href="asd">About Us</a>
                                        <a href="asd">Privacy Policy</a>
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

export default Signup;