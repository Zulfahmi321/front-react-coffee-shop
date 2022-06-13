import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';
import Card from '../../assets/img-payment/card.png'
import Bank from '../../assets/img-payment/bank-account.png'
import Cod from '../../assets/img-payment/cod.png'


import './payment.css'
import { connect } from 'react-redux';

class Payment extends Component {
    componentDidMount() {
        document.title = "Cart"
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='background-payment'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h4 className='left-payment-title'>Checkout your item now!</h4>
                                <div className="card-payment">
                                    <div className="card-left-payment">
                                        <p className='card-title'>Order Summary</p>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3">
                                                    <img className='pay-product1' src={`http://localhost:8080${this.props.cart.photo}`} alt="" />
                                                </div>
                                                <div className="col-lg-3 col-md-3">
                                                    <p>{this.props.cart.name}</p>
                                                    <p>x {this.props.counter}</p>
                                                </div>
                                                <div className="col-lg-3 col-md-3">
                                                    <p className='payment-price'>{this.props.cart.price}</p>
                                                </div>
                                            </div>
                                            <div className="underline-payment">
                                                <span></span>
                                            </div>
                                            <div className="detail-payment">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <p>SUBTOTAL</p>
                                                        <p>TAX {'&'} FEES</p>
                                                        <p>SHIPPING</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <p>IDR {this.props.cart.price * this.props.counter}</p>
                                                        <p>IDR 20.000</p>
                                                        <p>IDR 10.000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="payment-total">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <p>TOTAL</p>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <p>IDR 150.000</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="container-delivery-all">
                                    <div className="container-right-delivery">
                                        <h3 className='right-payment-title'>Address details</h3>
                                        <div className="card-payment-delivery">
                                            <div className="card-payment-right">
                                                <p><strong>Delivery</strong> to Iskandar Street</p>
                                                <p>Km 5 refinery road oppsite re
                                                    public road, effurun, Jakarta</p>
                                                <p>+62 81348287878</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-right-delivery">
                                        <h3 className='right-payment-title'>Payment method</h3>
                                        <div className="card-payment-delivery">
                                            <div className="card-payment-right">
                                                <div className="container-radio-payment">
                                                    <div className="row">
                                                        <div className="col-lg-1 col-md-1">
                                                            <div className="img-card">
                                                                <img src={Card} alt="card" className='vektor-card' />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-11 col-md-11">
                                                            <label className="label-radio-payment">Card
                                                                <input type="radio" name="payment" />
                                                                <span className="checkmark-payment"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="container-radio-payment">
                                                    <div className="row">
                                                        <div className="col-lg-1 col-md-1">
                                                            <div className="img-bank">
                                                                <img src={Bank} alt="bank" className='vektor-bank' />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-11 col-md-11">
                                                            <label className="label-radio-payment">Bank Account
                                                                <input type="radio" name="payment" />
                                                                <span className="checkmark-payment"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="container-radio-payment">
                                                    <div className="row">
                                                        <div className="col-lg-1 col-md-1">
                                                            <div className="img-cod">
                                                                <img src={Cod} alt="cod" className='vektor-cod' />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-11 col-md-11">
                                                            <label className="label-radio-payment">Cash On Delivery
                                                                <input type="radio" name="payment" />
                                                                <span className="checkmark-payment"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-confirm-pay">
                                        <button>Confirm and Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
        cart: state.cart.cart
    }
}
export default connect(mapStateToProps)(Payment);