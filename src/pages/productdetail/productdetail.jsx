import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer';
import withParams from '../../helper/withparams';
import { connect } from 'react-redux';
import axios from 'axios';

import './productdetail.css'
import { counterDown, counterUp } from '../../redux/actionCreator/counter';

class Productdetail extends Component {
    constructor() {
        super()
        this.state = {
            product: []
        }
    }
    componentDidMount() {
        document.title = "Product Detail"
        const { params } = this.props;
        axios
            .get(`http://localhost:8080/product/${params.id}`)
            .then((result) => {
                this.setState({
                    product: result.data.data.data[0],
                });
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const { counter, counterDown, counterUp } = this.props
        // console.log(counter);
        return (
            <React.Fragment>
                <Header />
                <main className='container-product-details'>
                    <section className='container'>
                        <div className="row">
                            <div className="col-lg-6 left-product">
                                <p>Favorite {'&'} Promo {'>'} {this.state.product.name}</p>
                                <img src={`http://localhost:8080${this.state.product.photo}`} alt="product" />
                                <h1>{this.state.product.name}</h1>
                                <h5>{this.state.product.price}</h5>
                                <div className='cart-button'>
                                    <Link to='' className='button-cart' >Add to Cart</Link><br />
                                </div>
                                <div className="staff-button">
                                    <Link to='' className='button-staff'>Ask to Staff</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 right-product">
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
                    <section className='container'>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="card card-custom-cart">
                                    <div className="card-body card-product-cart">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img src={`http://localhost:8080${this.state.product.photo}`} alt="product" className='product-cart-detail' />
                                            </div>
                                            <div className="col-lg-3">
                                                <div className='card-product-info'>
                                                    <strong>{this.state.product.name}</strong>
                                                    <p>x1 (Large)</p>
                                                    <p>x1 (Regular)</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className='quantity'>
                                                    <button onClick={() => counterDown()}>-</button>
                                                    <p>{counter}</p>
                                                    <button onClick={() => counterUp()}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
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

const mapStateToProps = (reduxState) => {
    const { counter: { counter } } = reduxState
    return { counter, }
}

const mapDispatchToProps = (dispatch) => {
    return {
        counterDown: () => {
            dispatch(counterDown())
        },
        counterUp: () => {
            dispatch(counterUp())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Productdetail));