import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer';
import ColdBrew from '../../assets/img-products/Cold Brew.png';


import './productdetail.css'

class Productdetail extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='container-product-details'>
                    <section className='container'>
                        <div className="row">
                            <div className="col-lg-4 left-product py-5">
                                <p>Favorite {'&'} Promo {'>'} Cold Brew</p>
                                <img src={ColdBrew} alt="coldbrew" />
                                <h1>COLD BREW</h1>
                                <h5>IDR 30.000</h5>
                                <div className='cart-button'>
                                    <Link to='' className='button-cart' >Add to Cart</Link><br />
                                </div>
                                <div className="staff-button">
                                    <Link to='' className='button-staff'>Ask to Staff</Link>
                                </div>
                            </div>
                            <div className="col-lg-8 right-product py-5">
                                <div className="card card-product-custom">
                                    <div className='card-product-details'>
                                        <p className='card-title'>Delivery only on <strong>Monday to friday at  1 - 7 pm</strong></p>
                                        <p className='card-text'>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                                        <strong className='size' >Choose a size</strong>
                                        <div className='container-size'>
                                            <div className='choose-size'>R</div>
                                            <div className='choose-size'>L</div>
                                            <div className='choose-size'>XL</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='delivery'>
                                    <h4>Choose Delivery Method</h4>
                                </div>
                                <div className='choose-delivery'>
                                    <div className='dine-in'>
                                        <p>Dine in</p>
                                    </div>
                                    <div className="door-delivery">
                                        <p>Door Delivery</p>
                                    </div>
                                    <div className="pick-up">
                                        <p>Pick Up</p>
                                    </div>
                                </div>
                                <div className="set-time">
                                    <label htmlFor="settime">Set Time:</label>
                                    <input type="text" name='settime' placeholder="Enter the time you'll arrived" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='container-cart'>
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="card">
                                    <div className="card-product-cart">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img src={ColdBrew} alt="coldbrew" className='product-cart-detail' />
                                            </div>
                                            <div className="col-lg-3">
                                                <div className='card-product-info'>
                                                    <strong>COLD BREW</strong>
                                                    <p>x1 (Large)</p>
                                                    <p>x1 (Regular)</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className='quantity'>
                                                    <button>-</button>
                                                    <strong>2</strong>
                                                    <button>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <button className='checkout'>CHECKOUT</button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment >
        );
    }
}

export default Productdetail;