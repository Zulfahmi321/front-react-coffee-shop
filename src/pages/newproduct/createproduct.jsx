import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';

// import gambar
import Kamera from '../../assets/img/icons/kamera.png'

// import css
import './createproduct.css'
import { connect } from 'react-redux';
import axios from 'axios';

class Createproduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            description: '',
            delivery_info: '',
            stock: '',
            category: '',
            photo: null
        }
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
        // console.log(this.state);
        e.preventDefault()
        const { name, price, description, delivery_info, stock, category, photo } = this.state
        const category_id = category === 'Coffee' ? 1 : category === 'Non Coffee' ? 2 : category === 'Snack' ? 3 : 4
        let body = new FormData()
        body.append('photo', photo);
        body.append('name', name);
        body.append('price', price);
        body.append('description', description);
        body.append('delivery_info', delivery_info);
        body.append('stock', stock);
        body.append('category_id', category_id);

        const { token = null } = this.props.userInfo || {}
        const config = { headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' } }
        axios
            .post(`${process.env.REACT_APP_BE_HOST}/product`, body, config)
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
    componentDidMount() {
        document.title = "Create Product"
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='container-create-product'>
                    <section className='container'>
                        <div className='row'>
                            <div className='col-lg-6 left-create-product'>
                                <p>Favorite {'&'} Promo {'>'} Add new product</p>
                                <div className='kamera'>
                                    {/* <img src={Kamera} alt="product" className='kamera-img' /> */}
                                    <form action="">
                                        <label className='label-upload'>
                                            <img src={this.state.photo ? `${process.env.REACT_APP_BE_HOST}${this.state.photo}` : Kamera} className="kamera-img" alt="" />

                                        </label>
                                    </form>
                                </div>
                                <div className='take-picture'>
                                    <button className='take-picture-button'>Take a picture</button>
                                </div>
                                <div className="choose-from-gallery">
                                    <button className='choose-from-gallery-button'>
                                        <input type="file" className='input-upload' name='photo' onChange={this.handlerChangeImg} />
                                        Choose from gallery
                                    </button>
                                </div>
                                <div className='save-create-product'>
                                    <button className='save-create-product-button' onClick={this.handlerSubmit}>Save Product</button>
                                </div>
                                <div className="cancel-create-product">
                                    <button className='cancel-create-product-button'>Cancel</button>
                                </div>
                            </div>
                            <div className='col-lg-6 right-create-product'>
                                <div>
                                    <form action='' className='form-create-product'>
                                        <label htmlFor="" className='form-label-title'>Name :</label>
                                        <input type="text" name='name' className='create-product-input' placeholder='Type product name min. 50 characters' onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Price :</label>
                                        <input type="text" name='price' className='create-product-input' placeholder='Type the price' onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Description :</label>
                                        <input type="text" name='description' className='create-product-input' placeholder='Describe your product min. 150 characters' onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Delivery Info :</label>
                                        <input type="text" name='delivery_info' className='create-product-input' placeholder='' onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Stok :</label>
                                        <input type="number" name='stock' className='create-product-input' placeholder='' onChange={this.handlerChange} />
                                    </form>
                                </div>
                                {/* <strong className='size-title-cpd' >Choose a size</strong>
                                <div className="size-button-cpd">
                                    <label className="size-label-cpd">
                                        <input type="radio" name="size-input-cpd" className='size-input-cpd' />
                                        <span className="size-checkmark-cpd"
                                            onClick={() => {
                                                this.setState({ size: "Reguler" })
                                            }}
                                        >R</span>
                                    </label>
                                    <label className="size-label-cpd">
                                        <input type="radio" name="size-input-cpd" className='size-input-cpd' />
                                        <span className="size-checkmark-cpd"
                                            onClick={() => {
                                                this.setState({ size: "Large" })
                                            }}
                                        >L</span>
                                    </label>
                                    <label className="size-label-cpd">
                                        <input type="radio" name="size-input-cpd" className='size-input-cpd' />
                                        <span className="size-checkmark-cpd"
                                            onClick={() => {
                                                this.setState({ size: "Extra Large" })
                                            }}
                                        >XL</span>
                                    </label>
                                </div> */}
                                <div className="category-container-cpd">
                                    <h4 className='title-category-cpd'>Input category :</h4>
                                    <p>Click category you want to use for this product</p>
                                    <div className="category-button-cpd">
                                        <label className="category-label-cpd">
                                            <input type="radio" name="category-input-cpd" className='category-input-cpd' />
                                            <span className="category-checkmark-cpd"
                                                onClick={() => {
                                                    this.setState({ category: "Snack" })
                                                }}
                                            >Snack</span>
                                        </label>
                                        <label className="category-label-cpd">
                                            <input type="radio" name="category-input-cpd" className='category-input-cpd' />
                                            <span className="category-checkmark-cpd"
                                                onClick={() => {
                                                    this.setState({ category: "Food" })
                                                }}
                                            >Food</span>
                                        </label>
                                        <label className="category-label-cpd">
                                            <input type="radio" name="category-input-cpd" className='category-input-cpd' />
                                            <span className="category-checkmark-cpd"
                                                onClick={() => {
                                                    this.setState({ category: "Coffee" })
                                                }}
                                            >Coffee</span>
                                        </label>
                                        <label className="category-label-cpd">
                                            <input type="radio" name="category-input-cpd" className='category-input-cpd' />
                                            <span className="category-checkmark-cpd"
                                                onClick={() => {
                                                    this.setState({ category: "Non Coffee" })
                                                }}
                                            >Non Coffee</span>
                                        </label>
                                    </div>
                                </div>
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
        user: state.user.data,
        userInfo: state.auth.userInfo,
    }
}

export default connect(mapStateToProps)(Createproduct);