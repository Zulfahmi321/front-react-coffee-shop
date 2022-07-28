import React, { Component } from 'react';
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer';
import withParams from '../../helper/withparams';
import { connect } from 'react-redux';
import axios from 'axios';

import './productdetail.css'
import { counterDown, counterUp } from '../../redux/actionCreator/counter';
import { addToCart } from '../../redux/actionCreator/addtocart';
import { Modal } from 'react-bootstrap';
import { currencyFormatter } from '../../helper/formatter';

class Productdetail extends Component {
    constructor() {
        super()
        this.state = {
            product: [],
            size: '',
            delivery: '',
            isShow: false,
        }
    }
    componentDidMount() {
        document.title = "Product Detail"
        const { params } = this.props;
        axios
            .get(`${process.env.REACT_APP_BE_HOST}/product/${params.id}`)
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
                                <div className='product-detail-photo'>
                                    <img src={`${this.state.product.photo}`} alt="product" />
                                </div>
                                <h1>{this.state.product.name}</h1>
                                <h5 className='fw-semibold'>{currencyFormatter.format(this.state.product.price)}</h5>
                                <div className='cart-button'>
                                    <button className='button-cart'
                                        onClick={() => {
                                            const { size, delivery, product } = this.state
                                            if (!size) {
                                                this.setState({
                                                    isShow: true
                                                })
                                                return
                                            }
                                            if (!delivery) {
                                                this.setState({
                                                    isShow: true
                                                })
                                                return
                                            }

                                            // const addSize = this.state.size !== "" ? this.state.size : null
                                            // const addDeliv = this.state.delivery !== "" ? this.state.delivery : null
                                            // const addProd = this.state.product !== "" ? this.state.product : null
                                            // addSize !== null && addDeliv !== null ?
                                            cart(product, size, delivery)
                                            this.setState({
                                                isShow: true
                                            })
                                            this.props.navigate("/payment")
                                        }}
                                    >Add to Cart</button><br />
                                </div>
                                <div className="staff-button">
                                    <button className='button-staff'>Ask to Staff</button>
                                </div>
                            </div>
                            <div className="col-lg-6 right-product">
                                <div className='card-product-detail'>
                                    <p className='card-text'>Delivery only on <strong>{this.state.product.delivery_info}</strong></p>
                                    <div className='card-product-description'>
                                        <p className='card-text'>{this.state.product.description}</p>
                                    </div>
                                    <strong className='size-title' >Choose a size</strong>
                                    <div className="size-button">
                                        <label className="size-label">
                                            <input type="radio" name="size-input" className='size-input' />
                                            <span className="size-checkmark fw-bold"
                                                onClick={() => {
                                                    this.setState({ size: "Reguler" })
                                                }}
                                            >R</span>
                                        </label>
                                        <label className="size-label">
                                            <input type="radio" name="size-input" className='size-input' />
                                            <span className="size-checkmark fw-bold"
                                                onClick={() => {
                                                    this.setState({ size: "Large" })
                                                }}
                                            >L</span>
                                        </label>
                                        <label className="size-label">
                                            <input type="radio" name="size-input" className='size-input' />
                                            <span className="size-checkmark fw-bold"
                                                onClick={() => {
                                                    this.setState({ size: "Extra Large" })
                                                }}
                                            >XL</span>
                                        </label>
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
                    <section className='container container-custom-cart'>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="card card-custom-cart">
                                    <div className="card-body card-product-cart">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <img src={`${this.state.product.photo}`} alt="product" className='product-cart-detail' />
                                            </div>
                                            <div className="col-lg-4">
                                                <div className='card-product-info'>
                                                    <h4>{this.state.product.name}</h4>
                                                    <h5>x{counter} {this.state.size} <br /> {this.state.delivery} </h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
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
                                <button className='checkout'
                                    onClick={() => {
                                        const { size, delivery, product } = this.state
                                        if (!size) {
                                            this.setState({
                                                isShow: true
                                            })
                                            return
                                        }
                                        if (!delivery) {
                                            this.setState({
                                                isShow: true
                                            })
                                            return
                                        }

                                        // const addSize = this.state.size !== "" ? this.state.size : null
                                        // const addDeliv = this.state.delivery !== "" ? this.state.delivery : null
                                        // const addProd = this.state.product !== "" ? this.state.product : null
                                        // addSize !== null && addDeliv !== null ?
                                        cart(product, size, delivery)
                                        this.setState({
                                            isShow: true
                                        })
                                        this.props.navigate("/payment")
                                    }}
                                >CHECKOUT</button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                <Modal
                    show={this.state.isShow}
                    onHide={() => {
                        this.setState({ isShow: false },
                        );
                    }}>
                    <Modal.Header>
                        <Modal.Title className='profile-modal-title'>Please Insert Size and Delivery Method</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body></Modal.Body> */}
                    <Modal.Footer>
                        {/* <Button></Button> */}
                    </Modal.Footer>
                </Modal>
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