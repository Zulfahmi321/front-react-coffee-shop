import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';
import Product from '../../assets/img-products/product-1.png'
import './history.css'

class History extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='background-history'>
                    <div className="container container-history">
                        <div className="history-title">
                            <h4>Let’s see what you have bought!
                                <p>Long press to delete item</p></h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="card-history-product">
                                    <div className="row">
                                        <div className="col-4 col-md-4 col-sm-4">
                                            <img src={Product} alt="producthistory" className='product-history' />
                                        </div>
                                        <div className="col-8 col-md-8">
                                            <div className="history-info">
                                                <h4>Veggie tomato mix</h4>
                                                <p>IDR 34.000</p>
                                                <p>Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="card-history-product">
                                    <div className="row">
                                        <div className="col-4 col-md-4 col-sm-4">
                                            <img src={Product} alt="producthistory" className='product-history' />
                                        </div>
                                        <div className="col-8 col-md-8 col-sm-8">
                                            <div className="history-info">
                                                <h4>Veggie tomato mix</h4>
                                                <p>IDR 34.000</p>
                                                <p>Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="card-history-product">
                                    <div className="row">
                                        <div className="col-4 col-md-4 col-sm-4">
                                            <img src={Product} alt="producthistory" className='product-history' />
                                        </div>
                                        <div className="col-8 col-md-8 col-sm-8">
                                            <div className="history-info">
                                                <h4>Veggie tomato mix</h4>
                                                <p>IDR 34.000</p>
                                                <p>Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 ">
                                <div className="card-history-product">
                                    <div className="row">
                                        <div className="col-4 col-md-4 col-sm-4">
                                            <img src={Product} alt="producthistory" className='product-history' />
                                        </div>
                                        <div className="col-8 col-md-8 col-sm-8">
                                            <div className="history-info">
                                                <h4>Veggie tomato mix</h4>
                                                <p>IDR 34.000</p>
                                                <p>Delivered</p>
                                            </div>
                                        </div>
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

export default History;