import React, { Component } from 'react';
import './profil.css'

import ProfDef from '../../assets/img/profil-default.png'
import Pencil from '../../assets/img/icons/pencil-icon.svg'
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/actionCreator/login';

class Profil extends Component {
    constructor() {
        super()
        this.state = {
            // isLoggedin: localStorage.getItem("user-info") ? true : false,
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            mobile_number: '',
            date_of_birth: '',
            gender: '',
            address: '',
            file: null,
            photo: null,
            isSuccess: false
        }
    }
    componentDidMount() {
        // console.log(this.props.userInfo);
        document.title = "Profil"
        const { token = null } = this.props.userInfo || {}
        // console.log(this.props);
        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios
            .get(`${process.env.REACT_APP_BE_HOST}/user`, config)
            .then((result) => {
                console.log(result.data.data.data[0]);
                this.setState({
                    file: result.data.data.data[0].photo,
                    username: result.data.data.data[0].username,
                    first_name: result.data.data.data[0].first_name,
                    last_name: result.data.data.data[0].last_name,
                    email: result.data.data.data[0].email,
                    mobile_number: result.data.data.data[0].mobile_number,
                    date_of_birth: result.data.data.data[0].date_of_birth,
                    gender: result.data.data.data[0].gender,
                    address: result.data.data.data[0].address
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerChangeImg = (e) => {
        // console.log(e.target.files[0]);
        // this.setState({
        //     file: e.target.files[0]
        // })
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                this.setState({ photo: reader.result, file: file })
            }
            reader.readAsDataURL(file)
        }
    }

    render() {
        const { isLoggedin, username, mobile_number, address, first_name, last_name, date_of_birth, email, file } = this.state
        // const { } = this.state.profilData

        if (isLoggedin === false) {
            return <Navigate to="/" />
        }
        return (
            <div>
                <Header />
                <main>
                    <div className="main-content-profil">
                        <section className="container">
                            <div className="py-5 px-1">
                                <h4 className="text-white">User Profile</h4>
                            </div>
                        </section>
                        <section className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-12 col-xs-12">
                                    <div className="card text-center">
                                        <div className="card-body card-body-profil">
                                            <form action="">
                                                <label className='label-upload'>
                                                    <img className="pencil" src={Pencil} alt="" />
                                                    {file ?
                                                        <img src={`${file}`} className="card-profil-img card-img-top mx-auto d-block" alt="" />
                                                        :
                                                        <img src={ProfDef} alt="" />
                                                    }
                                                    <input type="file" className='input-upload' name='file' onChange={this.handlerChangeImg} />
                                                </label>
                                            </form>
                                            <p className="card-title-name fs-5 fw-bold">{username}</p>
                                            <p className="card-text">{email}</p>
                                            <p className="card-text py-4">Has been ordered 15 products</p>
                                        </div>
                                        <div className="card-footer">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-12 col-xs-12">
                                    <div className="card">
                                        <div className="container">
                                            <div className="card-body card-body-contact">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                                        <p className="card-title-contact fs-5 fw-bold">Contacts</p>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                                        <img className="card-pencil-img" src={Pencil} alt="" />
                                                    </div>
                                                </div>
                                                <div className="row mx-3">
                                                    <div className="col-lg-6 col-sm-6 ">
                                                        <form action="">
                                                            <div className="p-3 text-secondary">
                                                                <label htmlFor="" className="form-label">Email address:</label><br />
                                                                <input type="email" name="email"
                                                                    placeholder='enter your email'
                                                                    value={email == null ? '' : email}
                                                                    onChange={this.handlerChange}
                                                                />
                                                            </div>
                                                            <div className="p-3 text-secondary">
                                                                <label htmlFor="" className="form-label">Delivery Address:</label><br />
                                                                <textarea name="address"
                                                                    placeholder='enter your address'
                                                                    value={address == null ? '' : address}
                                                                    onChange={this.handlerChange}
                                                                ></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <form action="">
                                                            <div className="p-3 text-secondary">
                                                                <label htmlFor="" className="form-label">Mobile number:</label><br />
                                                                <input type="text" pattern="[0-9]+" name="mobile_number"
                                                                    value={mobile_number == null ? '' : mobile_number}
                                                                    onChange={this.handlerChange}
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section >
                        <section className="bottom-content my-5 pb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="card">
                                            <div className="container">
                                                <div className="card-body card-body-detail">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <p className="card-title-details fs-5 fw-bold">Details</p>
                                                        </div>
                                                        <div className="col-lg-6 col-sm-6">
                                                            <img className="card-pencil-img" src={Pencil}
                                                                alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="row mx-3">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <form action="">
                                                                <div className="p-3 text-secondary">
                                                                    <label htmlFor="" className="form-label">Display name:</label><br />
                                                                    <input type="text" name="username"
                                                                        placeholder={username}
                                                                        value={username == null ? '' : username}
                                                                        onChange={this.handlerChange}
                                                                    />
                                                                </div>
                                                                <div className="p-3 text-secondary">
                                                                    <label htmlFor="" className="form-label">First name:</label><br />
                                                                    <input type="text" name="first_name" value={first_name == null ? '' : first_name}
                                                                        onChange={this.handlerChange}
                                                                    />
                                                                </div>
                                                                <div className="p-3 text-secondary">
                                                                    <label htmlFor="" className="form-label">Last name:</label><br />
                                                                    <input type="text" name="last_name" value={last_name == null ? '' : last_name}
                                                                        onChange={this.handlerChange}
                                                                    />
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-6 col-sm-6">
                                                            <form action="">
                                                                <div className="p-3 text-secondary">
                                                                    <label htmlFor="" className="form-label">Birthday</label><br />
                                                                    <input type="date" name="date_of_birth" value={date_of_birth == null ? '' : date_of_birth}
                                                                        onChange={this.handlerChange}
                                                                    />
                                                                </div>
                                                                <div className="container-radio">
                                                                    <label className="label-radio">Male
                                                                        <input type="radio" name="gender"
                                                                            value="male" onChange={this.handlerChange}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="container-radio">
                                                                    <label className="label-radio">Female
                                                                        <input type="radio" name="gender"
                                                                            value='female' onChange={this.handlerChange}
                                                                        />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="card-body text-white text-center fs-5">
                                            <div className="card-title-button">
                                                <strong>Do you want to save the change?</strong>
                                            </div>
                                            <div className="d-grid pt-4">
                                                <button className=" button-save" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                    onClick={() => {
                                                        const { username, first_name, last_name, date_of_birth, email, mobile_number, address, gender, file } = this.state;
                                                        let body = new FormData()
                                                        body.append('photo', file);
                                                        body.append('username', username);
                                                        body.append('first_name', first_name);
                                                        body.append('last_name', last_name);
                                                        body.append('date_of_birth', date_of_birth);
                                                        body.append('email', email);
                                                        body.append('mobile_number', mobile_number);
                                                        body.append('address', address);
                                                        body.append('gender', gender);

                                                        const { token = null } = this.props.userInfo || {}
                                                        const config = { headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' } }
                                                        axios
                                                            .patch(`${process.env.REACT_APP_BE_HOST}/user`, body, config)
                                                            .then((result) => {
                                                                console.log(result);
                                                                this.setState({
                                                                    isSuccess: true
                                                                })
                                                            })
                                                            .catch((error) => {
                                                                console.log(error);
                                                            })
                                                    }}
                                                >Save Change</button>
                                            </div>
                                            <div className="d-grid pt-4 ">
                                                <button className="button-cancel">Cancel</button>
                                            </div>
                                            <div className="d-grid pt-4 ">
                                                <button className="button-edit">Edit Password</button>
                                            </div>
                                            <div className="d-grid pt-4 ">
                                                <button className="button-logout" data-bs-toggle="modal" data-bs-target="#Modallogout">Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >
                </main >
                <Footer />
                {/* modal logout */}
                <div className="modal fade" id="Modallogout" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Are You Sure?</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <Link to="/"
                                    onClick={() => {
                                        this.props.dispatch(logoutAction())
                                    }}>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal Update success */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                {this.state.isSuccess ?
                                    <h5>Update Success</h5>
                                    :
                                    <h5>Update Failed "INSERT ALL DATA!!"</h5>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        isSuccess: state.auth.isSuccess,
        // isLoggedOut: state.auth.isLoggedOut
    }
}

export default connect(mapStateToProps)(Profil);