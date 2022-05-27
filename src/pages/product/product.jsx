import React, { Component } from 'react';
import './product.css'

import VektorTiga from '../../assets/img/vektor-tiga.png'
import VektorDua from '../../assets/img/vektor-dua.png'
import VektorSatu from '../../assets/img/vektor-satu.png'


import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'
class Product extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <section className='container'>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 container-left px-1">
                                <h3 className="">Promo Today</h3>
                                <p>Coupons will be updated every weeks. Check them out! </p>
                                <div className="aside-content">
                                    <div className="promo-one">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={VektorTiga} alt="vektortiga" />
                                            </div>
                                            <div className="col-lg-8">
                                                <p><strong>HAPPY MOTHER’S DAY!</strong><br />Get one of our favorite menu for
                                                    free!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="promo-two">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={VektorDua} alt="vektordua" />
                                            </div>
                                            <div className="col-lg-8">
                                                <p><strong>Get a cup of coffee for free on sunday morning</strong><br />Only at 7
                                                    to 9 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="promo-three">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={VektorTiga} alt="vektortiga" />
                                            </div>
                                            <div className="col-lg-8">
                                                <p><strong>HAPPY MOTHER’S DAY!</strong><br />Get one of our favorite menu for
                                                    free!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="promo-four">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={VektorSatu} alt="vektorsatu" />
                                            </div>
                                            <div className="col-lg-8">
                                                <p><strong>HAPPY HALLOWEEN!</strong><br />Do you like chicken wings? Get 1 free
                                                    only if you buy pinky promise</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="apply-coupon">
                                        <p>Apply Coupon</p>
                                    </div>
                                    <div className="footer-aside">
                                        <p><strong>Terms and Condition</strong><br />1. You can only apply 1 coupon per day<br />2.
                                            It only for dine in<br />3. Buy 1 get
                                            1 only for new user<br />4. Should make member card to apply coupon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="product-container-right">
                                    <div className="navbar navbar-expand-lg">
                                        <ul className="navbar-nav nav-product-nav">
                                            <li className="nav-item mx-2">
                                                <a href="as" className="nav-link text-secondary">Favorite & promo</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <a href="as" className="nav-link text-secondary">Coffee</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <a href="as" className="nav-link text-secondary">Non Coffee</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <a href="as" className="nav-link text-secondary">Foods</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <a href="as" className="nav-link text-secondary">Add-on</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-product">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="card card-custom">
                                                    <div className="card-body text-center">
                                                        <img src="assets/img-products/product-7.png" className="card-img-top"
                                                            alt="product-7" />
                                                        <p className="card-title-custom">Veggie tomato mix</p>
                                                        <p className="card-text-custom">IDR 34.000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="card card-custom">
                                                    <div className="card-body text-center">
                                                        <img src="assets/img-products/product-6.png" className="card-img-top"
                                                            alt="product-6" />
                                                        <p className="card-title-custom">Hazelnut Latte</p>
                                                        <p className="card-text-custom">IDR 25.000</p>
                                                    </div>
                                                </div>
                                            </div><div className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="card card-custom">
                                                    <div className="card-body text-center">
                                                        <img src="assets/img-products/product-6.png" className="card-img-top"
                                                            alt="product-6" />
                                                        <p className="card-title-custom">Hazelnut Latte</p>
                                                        <p className="card-text-custom">IDR 25.000</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p>*the price has been cutted by discount appears</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Product;