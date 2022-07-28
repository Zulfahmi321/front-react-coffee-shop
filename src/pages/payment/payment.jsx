import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';
import Card from '../../assets/img-payment/card.png'
import Bank from '../../assets/img-payment/bank-account.png'
import Cod from '../../assets/img-payment/cod.png'

import { currencyFormatter } from '../../helper/formatter'
import './payment.css'
import { connect } from 'react-redux';
import { getUserDataAction } from '../../redux/actionCreator/userdata';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { resetCart } from '../../redux/actionCreator/addtocart';
import { Modal } from 'react-bootstrap';

class Payment extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            payment: '',
            isShow: false,
            isShowCart: false,
            isSuccess: false

        }
    }
    handlePayment = () => {
        // console.log(this.props.idUser);    
        const { counter, delivery, idProduct, idUser, cart, userInfo, size } = this.props
        const product_id = idProduct
        const total_price = (cart.price * counter) + (cart.price * counter * 10 / 100) + (delivery === "Door Delivery" ? 10000 : 0)
        const quantity = counter
        const user_id = idUser
        const size_id = size === "Reguler" ? 1 : size === "Large" ? 2 : 3
        const payment_id = this.state.payment === "Card" ? 1 : this.state.payment === "Bank Account" ? 2 : 3
        const delivery_id = delivery === "Dine In" ? 3 : delivery === "Door Delivery" ? 1 : 2
        if (!this.state.payment) {
            this.setState(
                {
                    isShow: true
                }
            )
            return
        }
        const { token } = userInfo
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const body = { product_id, total_price, quantity, user_id, payment_id, delivery_id, size_id }
        axios
            .post(`${process.env.REACT_APP_BE_HOST}/transaction`, body, config)
            .then(result => {
                console.log(result);
                this.props.dispatch(resetCart())
                this.setState({
                    isSuccess: true
                })
            })
            .catch(error => {
                console.log(error);
            })

    }
    componentDidMount() {
        document.title = "Cart"
        const { isSuccess, dispatch } = this.props
        if (isSuccess) {
            const { token = null } = this.props.userInfo || {}
            dispatch(getUserDataAction(token))
        }
    }
    render() {
        // console.log(this.props);
        const { counter, cart, size, user, delivery } = this.props
        return (
            <React.Fragment>
                <Header />
                <main className='background-payment'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="container-left-payment">
                                    <h4 className='left-payment-title'>Checkout your item now!</h4>
                                    <div className="card-payment">
                                        {delivery !== "" && size !== "" ?
                                            <div className="card-left-payment">
                                                <p className='card-title'>Order Summary</p>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3">
                                                            <img className='pay-product1' src={`${cart.photo}`} alt="" />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <p>{cart.name}</p>
                                                            <p>{size}</p>
                                                            <p>x {counter}</p>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 text-end">
                                                            <p className='payment-price'>{currencyFormatter.format(cart.price)}</p>
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
                                                            <div className="col-lg-6 col-md-6 text-end">
                                                                <p>{currencyFormatter.format(cart.price * counter)}</p>
                                                                <p>{currencyFormatter.format(cart.price * counter * 10 / 100)}</p>
                                                                <p>{currencyFormatter.format(delivery === "Door Delivery" ? 10000 : 0)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="payment-total">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <p>TOTAL</p>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 text-end">
                                                                <p>{currencyFormatter.format((cart.price * counter) + (cart.price * counter * 10 / 100) + (delivery === "Door Delivery" ? 10000 : 0))}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <section className='cart-empty'>
                                                <p>Your Cart is Empty</p>
                                                <Link to="/product" className='order-here'>
                                                    <p>Click here to order</p>
                                                </Link>
                                            </section>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="container-delivery-all">
                                    <div className="container-right-delivery">
                                        <h3 className='right-payment-title'>Address details</h3>
                                        <div className="card-payment-delivery">
                                            <div className="card-payment-right">
                                                <p><strong>Delivery</strong> to {user.username} </p>
                                                <p>{user.address}</p>
                                                <p>{user.mobile_number}</p>
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
                                                                <input type="radio" name="payment-method"
                                                                    onClick={() => {
                                                                        this.setState({ payment: "Card" })
                                                                    }}
                                                                />
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
                                                                <input type="radio" name="payment-method"
                                                                    onClick={() => {
                                                                        this.setState({ payment: "Bank Account" })
                                                                    }}
                                                                />
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
                                                                <input type="radio" name="payment-method"
                                                                    onClick={() => {
                                                                        this.setState({ payment: "Cash On Delivery" })
                                                                    }}
                                                                />
                                                                <span span className="checkmark-payment"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {delivery !== "" && size !== "" ?
                                        <div className="button-confirm-pay">
                                            <button
                                                onClick={this.handlePayment}
                                            >Confirm and Pay</button>
                                        </div>
                                        :
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <Modal
                    show={this.state.isShow}
                    onHide={() => {
                        this.setState({ isShow: false },
                        );
                    }}>
                    <Modal.Header>
                        <Modal.Title className='profile-modal-title'>Please Insert Payment Method</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body></Modal.Body> */}
                    <Modal.Footer>
                        {/* <Button></Button> */}
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.isSuccess}
                    onHide={() => {
                        this.setState({ isSuccess: false },
                        );
                    }}>
                    <Modal.Header>
                        <Modal.Title className='profile-modal-title'>Order Success, Thanks</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body></Modal.Body> */}
                    <Modal.Footer>
                        {/* <Button></Button> */}
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
        cart: state.cart.cart,
        size: state.cart.size,
        user: state.user.data,
        delivery: state.cart.delivery,
        userInfo: state.auth.userInfo,
        idProduct: state.cart.cart.id,
        idUser: state.user.data.id,
        address: state.user.data.address,
        isSuccess: state.auth.isSuccess
    }
}
export default connect(mapStateToProps)(Payment);