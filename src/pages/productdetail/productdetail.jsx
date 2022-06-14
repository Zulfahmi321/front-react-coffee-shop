import React, { Component } from 'react';
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer';
import withParams from '../../helper/withparams';
import { connect } from 'react-redux';
import axios from 'axios';

import './productdetail.css'
import { counterDown, counterUp } from '../../redux/actionCreator/counter';
import { addToCart } from '../../redux/actionCreator/addtocart';

class Productdetail extends Component {
    constructor() {
        super()
        this.state = {
            product: [],
            size: '',
            delivery: ''
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
        const { counter, counterDown, counterUp, cart } = this.props
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
                                    <button className='button-cart'
                                        onClick={() => {
                                            cart(this.state.product, this.state.size, this.state.delivery)
                                        }}
                                    >Add to Cart</button><br />
                                </div>
                                <div className="staff-button">
                                    <button className='button-staff'>Ask to Staff</button>
                                </div>
                            </div>
                            <div className="col-lg-6 right-product">
                                <div className="card card-product-custom">
                                    <div className='card-product-details'>
                                        <p className='card-title'>Delivery only on <strong>Monday to friday at  1 - 7 pm</strong></p>
                                        <p className='card-text'>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                                        <strong className='size-title' >Choose a size</strong>
                                        <div className="size-button">
                                            <label className="size-label">
                                                <input type="radio" name="size-input" className='size-input' />
                                                <span className="size-checkmark"
                                                    onClick={() => {
                                                        this.setState({ size: "Reguler" })
                                                    }}
                                                >R</span>
                                            </label>
                                            <label className="size-label">
                                                <input type="radio" name="size-input" className='size-input' />
                                                <span className="size-checkmark"
                                                    onClick={() => {
                                                        this.setState({ size: "Large" })
                                                    }}
                                                >L</span>
                                            </label>
                                            <label className="size-label">
                                                <input type="radio" name="size-input" className='size-input' />
                                                <span className="size-checkmark"
                                                    onClick={() => {
                                                        this.setState({ size: "Extra Large" })
                                                    }}
                                                >XL</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="delivery-container">
                                    <h4>Choose Delivery Methods</h4>
                                    <div className="delivery-button">
                                        <label className="delivery-label">
                                            <input type="radio" name="delivery-input" className='delivery-input' />
                                            <span className="delivery-checkmark"
                                                onClick={() => {
                                                    this.setState({ delivery: "Dine In" })
                                                }}
                                            >Dine in</span>
                                        </label>
                                        <label className="delivery-label">
                                            <input type="radio" name="delivery-input" className='delivery-input' />
                                            <span className="delivery-checkmark"
                                                onClick={() => {
                                                    this.setState({ delivery: "Door Delivery" })
                                                }}
                                            >Door Delivery</span>
                                        </label>
                                        <label className="delivery-label">
                                            <input type="radio" name="delivery-input" className='delivery-input' />
                                            <span className="delivery-checkmark"
                                                onClick={() => {
                                                    this.setState({ delivery: "Pick Up" })
                                                }}
                                            >Pick up</span>
                                        </label>
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
                                                    <p>x{counter} {this.state.size} <br /> {this.state.delivery} </p>
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
                                <button className='checkout' onClick={() => {
                                    cart(this.state.product, this.state.size, this.state.delivery)
                                }}>CHECKOUT</button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
        cart: state.cart.cart,
        size: state.cart.size,
        delivery: state.cart.delivery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        counterDown: () => {
            dispatch(counterDown())
        },
        counterUp: () => {
            dispatch(counterUp())
        },
        cart: (product, size, delivery) => {
            dispatch(addToCart(product, size, delivery))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Productdetail));