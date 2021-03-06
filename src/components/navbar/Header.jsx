import React, { Component } from 'react'
import Logo from '../../assets/img/icons/coffee-icon.png'
import { Link, NavLink } from 'react-router-dom'
import './header.css';
// import searchIcon from '../../assets/img/icons/search-icon.svg'
import chatIcon from '../../assets/img/icons/chat-icon.svg'
import profilImg from '../../assets/img/profil-default.png'
import { connect } from 'react-redux';
import { getUserDataAction } from '../../redux/actionCreator/userdata';

class Header extends Component {
    constructor(props) {
        super(props)
        const { isSuccess } = this.props
        this.state = {
            isLoggedIn: isSuccess ? true : false,
            setSearchName: props,
        }
    }
    componentDidMount() {
        const { isSuccess, dispatch } = this.props
        if (isSuccess) {
            const { token = null } = this.props.userInfo || {}
            dispatch(getUserDataAction(token))
        }
    }
    render() {
        // console.log(this.props.profPict);
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
                    <div className="container">
                        <div className="logo">
                            <Link className='navbar-brand fs-3' to='/'><img src={Logo} alt="logo"
                                width="30px" />Coffee Shop</Link>
                        </div>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#kolep">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="kolep">
                            <div className="col-lg-4 col-md-4 offset-lg-3" id='navbar'>
                                {this.props.roles !== "admin" ?
                                    <ul className="navbar-nav fs-5 fw-bold justify-content-between">
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to='/'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to='/product'>Product</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to='/payment'>Cart</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to="/history">History</NavLink>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="navbar-nav fw-bold justify-content-between">
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to='/'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to='/product'>Product</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to='/payment'>Orders</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link' to="/dashboard">Dashboard</NavLink>
                                        </li>
                                    </ul>
                                }
                            </div>
                            {this.state.isLoggedIn ?
                                <div className="col-lg-4 col-md-4 offset-lg-1">
                                    <ul className="navbar-nav">
                                        <li className="nav-item px-2">
                                            {/* <Link className="nav-link" to="">
                                                <img src={searchIcon} alt="" />
                                            </Link> */}
                                            <input type="text" className='form-control fs-5' placeholder='Search'
                                                onKeyUp={(e) => {
                                                    if (e.key === "Enter") {
                                                        this.props.setSearchName(e.target.value)
                                                    }
                                                }
                                                }
                                            />
                                        </li>
                                        <li className="nav-item px-2 position-relative chat-icon">
                                            <Link className="nav-link" to="">
                                                <span>1</span>
                                                <img src={chatIcon} alt="" />
                                            </Link>
                                        </li>
                                        <li className="nav-item px-2">
                                            <Link className="nav-link" to="/profil">
                                                <img className="nav-profil-img" src={this.props.profPict !== null ? `${this.props.profPict}` : profilImg} alt="" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <div className="col-lg-4 col-md-4 offset-lg-1">
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
const mapStateToProps = (state) => {
    return {
        isSuccess: state.auth.isSuccess,
        user: state.user.data,
        profPict: state.user.data.photo,
        userInfo: state.auth.userInfo,
        roles: state.user.data.roles,
    }
}
export default connect(mapStateToProps)(Header)