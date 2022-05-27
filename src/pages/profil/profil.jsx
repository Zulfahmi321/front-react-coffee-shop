import React, { Component } from 'react';
import './profil.css'

import Pencil from '../../assets/img/icons/pencil-icon.svg'
import Profilimg from '../../assets/img/profil.png'
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'

class Profil extends Component {
    render() {
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
                                            <a href=""><img className="pencil" src={Pencil} alt="" /></a>
                                            <a href=""><img src={Profilimg}
                                                className="card-profil-img card-img-top mx-auto d-block" alt="" /></a>
                                            <p className="card-title fs-5 fw-bold">Zulaikha</p>
                                            <p className="card-text">zulaikha17@gmail.com</p>
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
                                                        <p className="card-title fs-5 fw-bold">Contacts</p>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                                        <img className="card-pencil-img" src={Pencil} alt="" />
                                                    </div>
                                                </div>
                                                <div className="row mx-3">
                                                    <div className="col-lg-6 col-sm-6 ">
                                                        <form action="">
                                                            <div className="p-3 text-secondary">
                                                                <label for="" className="form-label">Email address:</label><br />
                                                                <input type="email" name="email" value="zulaikha17@gmail.com" />
                                                            </div>
                                                            <div className="p-3 text-secondary">
                                                                <label for="" className="form-label">Delivery Address:</label><br />
                                                                <textarea name="address"
                                                                    id="">Iskandar Street no. 67 Block A Near Bus Stop</textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <form action="">
                                                            <div className="p-3 text-secondary">
                                                                <label for="" className="form-label">Mobile number:</label><br />
                                                                <input type="text" pattern="[0-9]+" name="phone"
                                                                    value="(+62)813456782" />
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
                        </section>
                        <section className="bottom-content my-5 pb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="card">
                                            <div className="container">
                                                <div className="card-body card-body-detail">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <p className="card-title fs-5 fw-bold">Details</p>
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
                                                                    <label for="" className="form-label">Display name:</label><br />
                                                                    <input type="text" name="displayName" value="Zulaikha" />
                                                                </div>
                                                                <div className="p-3 text-secondary">
                                                                    <label for="" className="form-label">First name:</label><br />
                                                                    <input type="text" name="firstName" value="Zulaikha" />
                                                                </div>
                                                                <div className="p-3 text-secondary">
                                                                    <label for="" className="form-label">Last name:</label><br />
                                                                    <input type="text" name="lastName" value="Zulaikha" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-6 col-sm-6">
                                                            <form action="">
                                                                <div className="p-3 text-secondary">
                                                                    <label for="" className="form-label">DD/MM/YY</label><br />
                                                                    <input type="date" name="date" value="03/04/90" />
                                                                </div>
                                                                <div className="container-radio">
                                                                    <label className="label-radio">Male
                                                                        <input type="radio" name="male" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="container-radio">
                                                                    <label className="label-radio">Female
                                                                        <input type="radio" name="female" checked />
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
                                            <div className="card-title">
                                                <strong>Do you want to save the change?</strong>
                                            </div>
                                            <div className="d-grid pt-4">
                                                <button className=" button-save">Save Change</button>
                                            </div>
                                            <div className="d-grid pt-4 ">
                                                <button className="button-cancel">Cancel</button>
                                            </div>
                                            <div className="d-grid pt-4 ">
                                                <button className="button-edit">Edit Password</button>
                                            </div>
                                            <div className="d-grid pt-4 ">
                                                <button className="button-logout">Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main >
                <Footer />
            </div>
        );
    }
}

export default Profil;