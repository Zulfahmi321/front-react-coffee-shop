import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';

// import gambar
import Product from '../../assets/img-products/product-1.png'

// import css
import './editpromo.css'
import axios from 'axios';

class Editpromo extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            normal_price: '',
            description: '',
            code: '',
            discount: '',
            expired_start: '',
            expired_end: '',
        }
    }
    componentDidMount() {
        document.title = "Edit Product"
        const { params } = this.props;
        axios
            .get(`${process.env.REACT_APP_BE_HOST}/product/${params.id}`)
            .then((result) => {
                // console.log(result);
                this.setState({
                    // product: result.data.data.data[0],
                    photo: result.data.data.data[0].photo,
                    name: result.data.data.data[0].name,
                    price: result.data.data.data[0].price,
                    description: result.data.data.data[0].description,
                    delivery_info: result.data.data.data[0].delivery_info,
                    stock: result.data.data.data[0].stock,
                    category: result.data.data.data[0].category_id === 'Coffee' ? 1 : result.data.data.data[0].category_id === 'Non Coffee' ? 2 : result.data.data.data[0].category_id === 'Snack' ? 3 : 4,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handlerChangeImg = (e) => {
        // console.log(e.target.files[0]);
        this.setState({
            photo: e.target.files[0]
        })
    }

    handlerSubmit = (e) => {
        // console.log(this.state.category);
        e.preventDefault()
        const { name, price, description, delivery_info, stock, category, photo } = this.state
        let body = new FormData()
        body.append('photo', photo);
        body.append('name', name);
        body.append('price', price);
        body.append('description', description);
        body.append('delivery_info', delivery_info);
        body.append('stock', stock);
        body.append('category_id', category);

        const { token = null } = this.props.userInfo || {}
        const config = { headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' } }
        const { params } = this.props;
        axios
            .patch(`${process.env.REACT_APP_BE_HOST}/product/${params.id}`, body, config)
            .then(result => {
                console.log(result)
                this.setState({
                    successMsg: `${result.data}`
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    errorMsg: `${error}`
                })
            })
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='container-create-product'>
                    <section className='container'>
                        <div className='row'>
                            <div className='col-lg-6 left-create-promo'>
                                <h4>Favorite {'&'} Promo {'>'} Edit promo</h4>
                                <div className='card-promo'>
                                    <img src={Product} alt="" className='product-img' />
                                    <div className="card-title">
                                        <p>Beef Spaghetti</p>
                                        <p>20% OFF</p>
                                    </div>
                                    <div className="card-body-promo">
                                        <p>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                                    </div>
                                    <div className='card-footer-promo'>
                                        <h4>COUPON CODE</h4>
                                        <h3>FNPR15RG</h3>
                                        <p>Valid untill October 10th 2020</p>
                                    </div>
                                </div>
                                <div className='take-picture'>
                                    <button className='take-picture-button-promo'>Take a picture</button>
                                </div>
                                <div className="choose-from-gallery">
                                    <button className='choose-from-gallery-button-promo'>Choose from gallery</button>
                                </div>
                                <div className='enter-discount form-create-product'>
                                    <label htmlFor="" className='form-label-title'>Enter the discount :</label>
                                    <input type="text" className='create-promo-input' />
                                    <label htmlFor="" className='form-label-title'>Expire date :</label>
                                    <input type="text" className='create-promo-input' />
                                    <input type="text" className='create-promo-input' />
                                    <label htmlFor="" className='form-label-title'>Input coupon code :</label>
                                    <input type="text" className='create-promo-input' />
                                </div>
                            </div>
                            <div className='col-lg-6 right-create-product'>
                                <div>
                                    <form action='' className='form-create-product'>
                                        <label htmlFor="" className='form-label-title'>Name :</label>
                                        <input type="text" className='create-product-input' placeholder='Type product name min. 50 characters' />
                                        <label htmlFor="" className='form-label-title'>Normal Price :</label>
                                        <input type="text" className='create-product-input' placeholder='Type the price' />
                                        <label htmlFor="" className='form-label-title'>Description :</label>
                                        <input type="text" className='create-product-input' placeholder='Describe your product min. 150 characters' />
                                    </form>
                                </div>
                                <strong className='cpromo-size-title' >Input product size :</strong>
                                <p>Click product size you want to use for this promo</p>
                                <div className="cpromo-size-button">
                                    <label className="cpromo-size-label">
                                        <input type="radio" name="cpromo-size-input" className='cpromo-size-input' />
                                        <span className="cpromo-size-checkmark"
                                        // onClick={() => {
                                        //     this.setState({ size: "Reguler" })
                                        // }}
                                        >R</span>
                                    </label>
                                    <label className="cpromo-size-label">
                                        <input type="radio" name="cpromo-size-input" className='cpromo-size-input' />
                                        <span className="cpromo-size-checkmark"
                                        // onClick={() => {
                                        //     this.setState({ size: "Large" })
                                        // }}
                                        >L</span>
                                    </label>
                                    <label className="cpromo-size-label">
                                        <input type="radio" name="cpromo-size-input" className='cpromo-size-input' />
                                        <span className="cpromo-size-checkmark"
                                        // onClick={() => {
                                        //     this.setState({ size: "Extra Large" })
                                        // }}
                                        >XL</span>
                                    </label>
                                </div>
                                <div className="delivery-container-create-product">
                                    <h4 className='title-delivery'>Input delivery methods :</h4>
                                    <p>Click methods you want to use for this product</p>
                                    <div className="delivery-button">
                                        <label className="delivery-label">
                                            <input type="radio" name="delivery-input" className='delivery-input' />
                                            <span className="delivery-checkmark"
                                            // onClick={() => {
                                            //     this.setState({ delivery: "Dine In" })
                                            // }}
                                            >Dine in</span>
                                        </label>
                                        <label className="delivery-label">
                                            <input type="radio" name="delivery-input" className='delivery-input' />
                                            <span className="delivery-checkmark"
                                            // onClick={() => {
                                            //     this.setState({ delivery: "Door Delivery" })
                                            // }}
                                            >Door Delivery</span>
                                        </label>
                                        <label className="delivery-label">
                                            <input type="radio" name="delivery-input" className='delivery-input' />
                                            <span className="delivery-checkmark"
                                            // onClick={() => {
                                            //     this.setState({ delivery: "Pick Up" })
                                            // }}
                                            >Pick up</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='form-create-product'>
                                    <label htmlFor="" className='form-label-title'>Enter the discount :</label>
                                    <input type="text" className='create-promo-input' />
                                </div>
                                <div className='save-create-promo'>
                                    <button className='save-create-promo-button'>Save Promo</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Editpromo;