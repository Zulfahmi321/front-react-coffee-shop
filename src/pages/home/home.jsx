import React, { Component } from 'react';
import Header from '../../components/navbar/Header';
import Footer from '../../components/footer/Footer';

import Search from '../../assets/img/icons/search-icon.svg'
import User from '../../assets/img/icons/user.png'
import Location from '../../assets/img/icons/location.png'
import Love from '../../assets/img/icons/love.png'
import Teamwork from '../../assets/img/pict-1.png'
import Ceklist from '../../assets/img/icons/ceklist.png'
import Hazelnut from '../../assets/img-products/product-9.png'
import Pinky from '../../assets/img-products/product-4.png'
import Chicken from '../../assets/img-products/product-2.png'
import Rating1 from '../../assets/img/rating-1.png'
import Rating2 from '../../assets/img/rating-2.png'
import Rating3 from '../../assets/img/rating-3.png'
import Map from '../../assets/img/pict-2.png'
import Star from '../../assets/img/icons/vector-star.png'
import Left from '../../assets/img/icons/left.png'
import Right from '../../assets/img/icons/right.png'
import './home.css'
import { Link } from 'react-router-dom';


class Home extends Component {
    componentDidMount() {
        document.title = "Coffee Shop"
    }
    render() {
        return (
            <div>
                <Header />
                <main>
                    <section className="main-content-one">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="top-content-custom">
                                    <h1>Start Your Day with Coffee and Good Meals</h1>
                                    <p>We provide high quality beans, good taste, and healthy meals made by love just for you.
                                        Start
                                        your day with us for a bigger smile!</p>
                                    <Link to="" className="nav-link button-get">Get Started</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="top-content-search">
                                    <Link to=""><img src={Search} alt="search" />Search</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-content-two">
                        <div className="card card-content-two">
                            <div className="card-body card-body-content-two">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 custom-vector-container">
                                                <img src={User} alt="" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 custom-store-info-text">
                                                <p className="custom-store-info-number fw-bold fs-5">90+</p>
                                                <p className="custom-store-info-obj">Staff</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 custom-vector-container">
                                                <img src={Location} alt="" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 custom-store-info-text">
                                                <p className="custom-store-info-number fw-bold fs-5">30+</p>
                                                <p className="custom-store-info-obj">Stores</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 custom-vector-container">
                                                <img src={Love} alt="" width="60px" />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p className="custom-store-info-number fw-bold fs-5">800+</p>
                                                <p className="custom-store-info-obj">Customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="home-main-content-three">
                        <div className="row row-content-three">
                            <div className="col-lg-6 col-md-12">
                                <img src={Teamwork} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="home-right-custom">
                                    <h3>We Provide Good Coffee and Healthy Meals</h3>
                                    <p>You can explore the menu that we provide with fun and have their own taste and
                                        make
                                        your
                                        day
                                        better.</p>
                                    <p><img src={Ceklist} alt="ceklist" /> High quality beans</p>
                                    <p><img src={Ceklist} alt="ceklist" /> Healthy meals, you can request the
                                        ingredients</p>
                                    <p><img src={Ceklist} alt="ceklist" /> Chat with our staff to get better
                                        experience for ordering</p>
                                    <p><img src={Ceklist} alt="ceklist" /> Free member card with a minimum purchase
                                        of IDR 200.000.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-content-four bg-light">
                        <div className="container text-center py-3">
                            <h1>Here is People’s Favorite</h1>
                            <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                            <div className="row py-4">
                                <div className="col-lg-4 col-md-12">
                                    <div className="card card-custom-four">
                                        <div className="card-body text-center">
                                            <img src={Hazelnut} className="card-img-hazelnut" alt="" />
                                            <h3 className="card-title-custom">Hazelnut Latte</h3>
                                            <div className="text-start">
                                                <p><img src={Ceklist} alt="" />HazelnutSyrup</p>
                                                <p><img src={Ceklist} alt="" />Vanilla Whipped Cream</p>
                                                <p><img src={Ceklist} alt="" />Ice / Hot</p>
                                                <p><img src={Ceklist} alt="" />Sliced Banana on Top</p>
                                            </div>
                                            <div className="container">
                                                <h2 className="card-text-custom fw-bold">IDR 25.000</h2>
                                                <Link to="" className="order-now">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="card card-custom-four">
                                        <div className="card-body text-center">
                                            <img src={Pinky} className="card-img-pingky" alt="" />
                                            <h3 className="card-title-custom">Pinky Promise</h3>
                                            <div className="text-start">
                                                <p><img src={Ceklist} alt="" />1 Shot of Coffee</p>
                                                <p><img src={Ceklist} alt="" />Vanilla Whipped Cream</p>
                                                <p><img src={Ceklist} alt="" />Chocolate Biscuits</p>
                                                <p><img src={Ceklist} alt="" />Strawberry Syrup</p>
                                                <p><img src={Ceklist} alt="" />Sliced strawberry on Top</p>
                                            </div>
                                            <div className="container">
                                                <h2 className="card-text-custom fw-bold">IDR 30.000</h2>
                                                <Link to="" className="order-now">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="card card-custom-four">
                                        <div className="card-body text-center">
                                            <img src={Chicken} className="card-img-chicken" alt="" />
                                            <h3 className="card-title-custom">Chicken Wings</h3>
                                            <div className="text-start">
                                                <p><img src={Ceklist} alt="" />Wings</p>
                                                <p><img src={Ceklist} alt="" />Drum Sticks</p>
                                                <p><img src={Ceklist} alt="" />Mayonaise and Lemon</p>
                                                <p><img src={Ceklist} alt="" />Hot Fried</p>
                                                <p><img src={Ceklist} alt="" />Secret Recipe</p>
                                                <p><img src={Ceklist} alt="" />Buy 1 Get 1 only for Dine in</p>
                                            </div>
                                            <div className="container">
                                                <h2 className="card-text-custom fw-bold">IDR 40.000</h2>
                                                <Link to="" className="select">Select</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1>Visit Our Store in the Spot on the Map Below</h1>
                                <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
                                <img className="map" src={Map} alt="" />
                                <div className="container">
                                    <div className="row custom-review">
                                        <div className="col-lg-4 col-md-12 custom-review-card-selected">
                                            <div className="row custom-review-identity">
                                                <div className="col-lg-4 custom-review-profpict">
                                                    <img src={Rating1} alt="viezh-robert" className="custom-review-img" />
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="custom-review-name">Viezh Robert</p>
                                                    <p className="custom-review-from">Warsaw, Poland</p>
                                                </div>
                                                <div className="col-lg-4 custom-review-rating">
                                                    <p>4.5 <img src={Star} alt="" /></p>
                                                </div>
                                                <div className="custom-review-testimony">"Wow... I am very happy to spend my whole day here. the
                                                    Wi-fi is
                                                    good, and the coffee and meals tho. I like it here!! Very recommended!</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 custom-review-card">
                                            <div className="row custom-review-identity">
                                                <div className="col-lg-4 custom-review-profpict"><img src={Rating2}
                                                    alt="yessica" className="custom-review-img" /></div>
                                                <div className="col-lg-4">
                                                    <div className="custom-review-name">Yessica Christy</div>
                                                    <div className="custom-review-from">Shanxi, China</div>
                                                </div>
                                                <div className="col-lg-4 custom-review-rating">4.5 <img
                                                    src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="custom-review-testimony">"I like it because I like to travel far and still can
                                                make
                                                my day
                                                better just by drinking their Hazelnut Latte</div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 custom-review-card">
                                            <div className="row custom-review-identity">
                                                <div className="col-lg-4 custom-review-profpict"><img src={Rating3}
                                                    alt="yessica" className="custom-review-img" /></div>
                                                <div className="col-lg-4">
                                                    <div className="custom-review-name">Kim Young Jou</div>
                                                    <div className="custom-review-from">Seoul, South Korea</div>
                                                </div>
                                                <div className="col-lg-4 custom-review-rating">4.5 <img
                                                    src={Star} alt="" />
                                                </div>
                                            </div>
                                            <div className="custom-review-testimony">"This is very unusual for my taste, I haven't liked
                                                coffee
                                                before
                                                but their coffee is the best! and yup, you have to order the chicken wings, the best in
                                                town!</div>
                                        </div>
                                        <div className="row row-button-review">
                                            <div className="col-lg-6 col-md-12"></div>
                                            <div className="col-lg-6 col-md-12">
                                                <img className="left" src={Left} alt="" />
                                                <img className="right" src={Right} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="see-promo-container">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="custom-promo-today">
                                                        <h1>Check our promo today!</h1>
                                                        <p>Let's see the deals and pick yours!</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 button-promo">
                                                    <Link to="" className="btn btn-warning btn-lg">See
                                                        Promo</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div >
        )
    }
}

export default Home;
