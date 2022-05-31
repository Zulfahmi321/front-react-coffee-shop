import React, { Component } from 'react';
import CoffeeIcon from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'
import Google from '../../assets/img/icons/google-icon.png'
import './signup.css'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            mobile_number: "",
            isSuccess: false
        };
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (e) => {
        e.preventDefault()
        const { email, password, mobile_number } = this.state
        const body = { email, password, mobile_number }
        await axios
            .post("http://localhost:8080/auth/new", body)
            .then(result => {
                console.log(result)
                alert(result.data.data.msg)
                this.setState({
                    isSuccess: true
                })
            })
            .catch(error => {
                console.log(error)
                alert(error.response.data.err.msg)
            })
    }
    render() {
        if (this.state.isSuccess === true) {
            return <Navigate to="/login" />
        }
        return (
            <div class="flex-container">
                <aside class="aside-image"></aside>
                <main class="main">
                    <section class="top-content">
                        <img src={CoffeeIcon} alt="coffee-icon" />
                        <a href="">Coffee Shop</a>
                        <p class="sign-up">Sign Up</p>
                    </section>
                    <section class="main-content">
                        <form action="" class="mx-5 px-5" onSubmit={this.handlerSubmit}>
                            <div class="mb-3">
                                <label for="" class="form-label fw-bold">Email Addres:</label>
                                <input type="email" name="email" class="form-control fs-6"
                                    placeholder="Enter your email address"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label fw-bold">Password:</label>
                                <input type="password" name="password" class="form-control" placeholder="Enter your password"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label fw-bold">Phone Number:</label>
                                <input type="text" pattern="[0-9]+" name="mobile_number" class="form-control"
                                    placeholder="Enter your phone number"
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div class="d-grid pt-3">
                                <button class="btn btn-warning fw-bold">Sign Up</button>
                            </div>
                            <div class="d-grid pt-3 ">
                                <a href="" class="btn btn-light fw-bold">
                                    <img src={Google} alt="google-icon" width="20px" />
                                    Sign up with Google
                                </a>
                            </div>
                        </form>
                    </section>
                    <section class="has-account pt-3">
                        <div class="underline"></div>
                        <p class="has-account-text">Already have an account?</p>
                        <div class="underline"></div>
                    </section>
                    <section class="login-here d-grid py-3 mb-5">
                        <Link to="/login" class="button fw-bold text-white text-sm">Login here</Link>
                    </section>
                    <section class="footer-signup py-5 text-start">
                        <div class="coffee-shop">
                            <div class="coffee">
                                <img src={CoffeeIcon} alt="" />
                                <strong class="fw-bold">Coffee Shop</strong>
                                <p class="about-coffee mt-2">Coffee Shop is a store that sells some good meals, and especially
                                    coffee. We
                                    provide
                                    high quality
                                    beans</p>
                                <div class="sosmed my-5">
                                    <a href=""><img src={Fb} alt="fb-vektor" /></a>
                                    <a href=""><img src={Twitter} alt="twitter-vector" /></a>
                                    <a href=""><img src={Ig} alt="ig-vector" /></a>
                                </div>
                                <div class="copyright mt-5">
                                    <p>{'&'}copy2022CoffeeStore</p>
                                </div>
                            </div>
                            <div class="product-engage">
                                <strong>Product</strong>
                                <div class="product">
                                    <div class="product-one">
                                        <a href="">Download</a>
                                        <a href="">Locations</a>
                                        <a href="">Blog</a>
                                    </div>
                                    <div class="product-two">
                                        <a href="">Pricing</a>
                                        <a href="">Countries</a>
                                    </div>
                                </div>
                                <strong>Engage</strong>
                                <div class="engage">
                                    <div class="engage-one">
                                        <a href="">Coffee Shop ?</a>
                                        <a href="">FAQ</a>
                                        <a href="">Terms of Services</a>
                                    </div>
                                    <div class="engage-two">
                                        <a href="">About Us</a>
                                        <a href="">Privacy Policy</a>
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