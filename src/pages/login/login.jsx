import React, { Component } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal'

// import gambar
import CoffeeIcon from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'
import Google from '../../assets/img/icons/google-icon.png'
import { Eye, EyeSlash } from "react-bootstrap-icons"
import './login.css'
// import axios from 'axios';

import { connect } from 'react-redux';
import { loginAction } from '../../redux/actionCreator/login';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            // isSuccess: false,
            isLoggedIn: false,
            showPassword: false,
            isShow: false
        }
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handlerSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state;
        const body = { email, password };
        this.props.dispatch(loginAction(body))
        // axios
        //     .post("http://localhost:8080/auth", body)
        //     .then(result => {
        //         console.log(result.data);
        //         localStorage.setItem("user-info", JSON.stringify(result.data.data));
        //         console.log(result.data.data.msg);
        //         this.setState({
        //             isSuccess: true,
        //             successMsg: `${result.data.data.msg}`
        //         })

        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({
        //             errorMsg: `${error.response.data.err.msg}`
        //         })

        //     })
    }
    componentDidMount() {
        document.title = "Login"
        const { state = null } = this.props.location;
        if (state !== null && !state.isAuthenticated) {
            this.setState({
                isShow: true,
            });
        }

    }
    render() {
        console.log("LOCATION", this.props.location);
        if (this.state.isLoggedIn === true) {
            return <Navigate to="/" />
        }
        return (
            <React.Fragment>
                <div className="flex-container">
                    <aside className="aside-image"></aside>
                    <main className="main">
                        <section className="top-content">
                            <img src={CoffeeIcon} alt="coffee-icon" />
                            <Link to="/">Coffee Shop</Link>
                            <p className="sign-up">Login</p>
                        </section>
                        <section className="main-content">
                            <form action="" className="mx-5 px-5" onSubmit={this.handlerSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label fw-bold">Email Addres:</label>
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
                                            {this.state.showPassword ? <Eye alt="show" className='showpass-login' /> : <EyeSlash alt="hide" className='hidepass-login' />}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-text">
                                    <Link to='/forgot'>Forgot Password?</Link>
                                </div>
                                <div className="d-grid pt-3">
                                    <button className="btn btn-warning fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                                </div>
                                <div className="d-grid pt-3">
                                    <Link className="btn btn-light" to="asd">
                                        <img src={Google} alt="google-icon" width="20px" />
                                        Sign up with Google
                                    </Link>
                                </div>
                            </form>
                        </section>
                        <section className="has-account pt-3">
                            <div className="underline"></div>
                            <p className="has-account-text">Don't have an account?</p>
                            <div className="underline"></div>
                        </section>
                        <section className="login-here d-grid py-3 mb-5">
                            <Link className="button fw-bold text-white text-sm" to='/signup'>Sign up here</Link>
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
                                        <Link to="asd"><img src={Fb} alt="fb-vektor" /></Link>
                                        <Link to="asd"><img src={Twitter} alt="twitter-vector" /></Link>
                                        <Link to="asd"><img src={Ig} alt="ig-vector" /></Link>
                                    </div>
                                    <div className="copyright mt-5">
                                        <p>{'&'}copy2022CoffeeStore</p>
                                    </div>
                                </div>
                                <div className="product-engage">
                                    <strong>Product</strong>
                                    <div className="product">
                                        <div className="product-one">
                                            <Link to="asd">Download</Link>
                                            <Link to="asd">Locations</Link>
                                            <Link to="asd">Blog</Link>
                                        </div>
                                        <div className="product-two">
                                            <Link to="asd">Pricing</Link>
                                            <Link to="ads">Countries</Link>
                                        </div>
                                    </div>
                                    <strong>Engage</strong>
                                    <div className="engage">
                                        <div className="engage-one">
                                            <Link to="sdf">Coffee Shop ?</Link>
                                            <Link to="sdf">FAQ</Link>
                                            <Link to="sdf">Terms of Services</Link>
                                        </div>
                                        <div className="engage-two">
                                            <Link to="sdf">About Us</Link>
                                            <Link to="sdf">Privacy Policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <Modal show={this.state.isShow} onHide={() => this.setState({ isShow: false },
                    () => this.props.navigate("/login", { replace: true, state: null }))} className='modal-warning'>
                    <Modal.Title className='modal-title-warning'>Warning</ Modal.Title>
                    <Modal.Body className='modal-body-warning'>Login First</Modal.Body>
                </Modal>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                {this.props.isSuccess ? <p>{this.props.userInfo.msg}</p> : <p>{this.props.error}</p>}
                            </div>
                            <div className="modal-footer">
                                {this.props.isSuccess ?
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick={() => {
                                            this.setState({
                                                isLoggedIn: true
                                            })
                                        }}
                                    >Go Home</button>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}
const withLocation = (Component) => {
    const WithLocation = (props) => {
        const location = useLocation()
        const navigate = useNavigate();
        return <Component location={location} navigate={navigate} {...props} />
    }
    return WithLocation
}
const mapStateToProps = (state) => {
    // const { auth: { userInfo, error, isSuccess } } = state
    return {
        userInfo: state.auth.userInfo,
        error: state.auth.error,
        isSuccess: state.auth.isSuccess,

    }
}
export default connect(mapStateToProps)(withLocation(Login));