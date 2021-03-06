import React, { Component } from 'react';
import './signup.css'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import 'bootstrap'
import CoffeeIcon from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'
import Google from '../../assets/img/icons/google-icon.png'
import ShowPass from '../../assets/img/icons/showpass.png'
import ShowPassOff from '../../assets/img/icons/showoffpass.png'



class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            mobile_number: "",
            isSuccess: false,
            registered: false,
            showPassword: false,
            successMsg: '',
            errorMsg: '',
            fvMsg: 'Email Not Valid!',
            isLoading: false

        };
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (e) => {
        try {
            e.preventDefault()
            this.setState({
                isLoading: true
            })
            const { email, password, mobile_number } = this.state
            const body = { email, password, mobile_number }
            let emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
            let phoneFormat = /^08[1-9][0-9]{7,10}$/

            if (!email.match(emailFormat)) {
                this.setState({
                    isLoading: false,
                    isSuccess: false,
                    fvMsg: 'Email Not Valid!'
                })
                return
            }
            if (password.length < 1) {
                this.setState({
                    isLoading: false,
                    isSuccess: false,
                    fvMsg: 'Password should not be empty!'
                })
                return
            }
            if (!mobile_number.match(phoneFormat)) {
                this.setState({
                    isLoading: false,
                    isSuccess: false,
                    fvMsg: 'Invalid phone number!'
                })
                return
            }
            const response = await axios.post(`${process.env.REACT_APP_BE_HOST}/auth/new`, body)
            console.log(response);
            this.setState({
                isLoading: false,
                isSuccess: true,
                fvMsg: response.data.data.msg
            })

        } catch (error) {
            console.log(error.response)
            this.setState({
                isLoading: false,
                isSuccess: false,
                fvMsg: error.response.data.err.msg
            })
        }
    }
    componentDidMount() {
        document.title = "Sign Up"
    }
    render() {
        if (this.state.registered === true) {
            return <Navigate to="/login" />
        }
        return (
            <React.Fragment>
                <div className="flex-container">
                    <aside className="aside-image"></aside>
                    <main className="main">
                        <section className="top-content">
                            <img src={CoffeeIcon} alt="coffee-icon" />
                            <Link to="">Coffee Shop</Link>
                            <p className="sign-up">Sign Up</p>
                        </section>
                        <section className="main-content">
                            <form action="" className="mx-5 px-5" onSubmit={this.handlerSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label fw-bold">Email Address:</label>
                                    <input type="email" name="email" className="form-control fs-6"
                                        placeholder="Enter your email address"
                                        onChange={this.handlerChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label fw-bold">Password:</label>
                                    <div className='input-group'>
                                        <input type={this.state.showPassword ? 'text' : 'password'} name="password" className="form-control" placeholder="Enter your password"
                                            onChange={this.handlerChange}
                                        />
                                        <div
                                            className='input-group-text' onClick={() => this.setState({ showPassword: !this.state.showPassword })}>
                                            {this.state.showPassword ? <img src={ShowPassOff} alt="show" className='showpass-signup' /> : <img src={ShowPass} alt="hide" className='hidepass-signup' />}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label fw-bold">Phone Number:</label>
                                    <input type="text" pattern="[0-9]+" name="mobile_number" className="form-control"
                                        placeholder="Enter your phone number"
                                        onChange={this.handlerChange}
                                    />
                                </div>
                                <div className="d-grid pt-3">
                                    <button className="btn btn-warning fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</button>
                                </div>
                                <div className="d-grid pt-3 ">
                                    <Link to="" className="btn btn-light fw-bold">
                                        <img src={Google} alt="google-icon" width="20px" />
                                        Sign up with Google
                                    </Link>
                                </div>
                            </form>
                        </section>
                        <section className="has-account pt-3">
                            <div className="underline"></div>
                            <p className="has-account-text">Already have an account?</p>
                            <div className="underline"></div>
                        </section>
                        <section className="login-here d-grid py-3 mb-5">
                            <Link to="/login" className="button fw-bold text-white text-sm">Login here</Link>
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
                                        <Link to=""><img src={Fb} alt="fb-vektor" /></Link>
                                        <Link to=""><img src={Twitter} alt="twitter-vector" /></Link>
                                        <Link to=""><img src={Ig} alt="ig-vector" /></Link>
                                    </div>
                                    <div className="copyright mt-5">
                                        <p>{'&'}copy2022CoffeeStore</p>
                                    </div>
                                </div>
                                <div className="product-engage">
                                    <strong>Product</strong>
                                    <div className="product">
                                        <div className="product-one">
                                            <Link to="">Download</Link>
                                            <Link to="">Locations</Link>
                                            <Link to="">Blog</Link>
                                        </div>
                                        <div className="product-two">
                                            <Link to="">Pricing</Link>
                                            <Link to="">Countries</Link>
                                        </div>
                                    </div>
                                    <strong>Engage</strong>
                                    <div className="engage">
                                        <div className="engage-one">
                                            <Link to="">Coffee Shop ?</Link>
                                            <Link to="">FAQ</Link>
                                            <Link to="">Terms of Services</Link>
                                        </div>
                                        <div className="engage-two">
                                            <Link to="">About Us</Link>
                                            <Link to="">Privacy Policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                {this.state.isLoading ?
                                    <p>Loading</p>
                                    :
                                    <p>{this.state.fvMsg}</p>
                                }
                            </div>
                            <div className="modal-footer">
                                {this.state.isSuccess ?
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick={() => {
                                            this.setState({
                                                registered: true
                                            })
                                        }}
                                    >Go Login</button>
                                    :
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Signup;