import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';

// import gambar
import Kamera from '../../assets/img/icons/kamera.png'

// import css
import './editproduct.css'
import { connect } from 'react-redux';
import axios from 'axios';
import withParams from '../../helper/withparams';

class Editproduct extends Component {
    constructor() {
        super()
        this.state = {
            // product: [],
            name: '',
            price: '',
            description: '',
            delivery_info: '',
            stock: '',
            category: '',
            photo: null
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
                            <div className='col-lg-6 left-create-product'>
                                <p>Favorite {'&'} Promo {'>'} Edit product</p>
                                <div className='kamera'>
                                    <img src={this.state.photo ? `${this.state.photo}` : Kamera} alt="product" className='kamera-img' />
                                </div>
                                <div className='take-picture'>
                                    <button className='take-picture-button'>Take a picture</button>
                                </div>
                                <div className="choose-from-gallery">
                                    <button className='choose-from-gallery-button'>
                                        <input type="file" className='input-upload' name='photo' onChange={this.handlerChangeImg} />
                                        Choose from gallery</button>
                                </div>
                                <div className='save-create-product'>
                                    <button className='save-create-product-button' onClick={this.handlerSubmit}>Save Update</button>
                                </div>
                                <div className="cancel-create-product">
                                    <button className='cancel-create-product-button'>Cancel</button>
                                </div>
                            </div>
                            <div className='col-lg-6 right-create-product'>
                                <div>
                                    <form action='' className='form-create-product'>
                                        <label htmlFor="" className='form-label-title'>Name :</label>
                                        <input type="text" name='name' className='create-product-input' placeholder='Type product name min. 50 characters' value={this.state.name == null ? '' : this.state.name} onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Price :</label>
                                        <input type="text" name='price' className='create-product-input' placeholder='Type the price' value={this.state.price == null ? '' : this.state.price} onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Description :</label>
                                        <input type="text" name='description' className='create-product-input' placeholder='Describe your product min. 150 characters' value={this.state.description == null ? '' : this.state.description} onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Delivery Info :</label>
                                        <input type="text" name='delivery_info' className='create-product-input' placeholder='Input Delivery Info' value={this.state.delivery_info == null ? '' : this.state.delivery_info} onChange={this.handlerChange} />
                                        <label htmlFor="" className='form-label-title'>Stock :</label>
                                        <input type="text" name='stock' className='create-product-input' placeholder='Input Stock' value={this.state.stock == null ? '' : this.state.stock} onChange={this.handlerChange} />
                                    </form>
                                </div>
                                <div className="category-container-epd">
                                    <h4 className='title-category-epd'>Input category :</h4>
                                    <p>Click category you want to use for this product</p>
                                    <div className="category-button-epd">
                                        <label className="category-label-epd">
                                            <input type="radio" name="category" className='category-input-epd'
                                                value='snack' checked={this.state.category === "3" ? true : false}
                                                onClick={() => {
                                                    this.setState({ category: '3' })
                                                }}
                                            />
                                            <span className="category-checkmark-epd"
                                            >Snack</span>
                                        </label>
                                        <label className="category-label-epd">
                                            <input type="radio" name="category" className='category-input-epd'
                                                value='food' checked={this.state.category === "4" ? true : false}
                                                onClick={() => {
                                                    this.setState({ category: '4' })
                                                }}
                                            />
                                            <span className="category-checkmark-epd"
                                            >Food</span>
                                        </label>
                                        <label className="category-label-epd">
                                            <input type="radio" name="category" className='category-input-epd'
                                                value='coffee' checked={this.state.category === "1" ? true : false}
                                                onClick={() => {
                                                    this.setState({ category: '1' })
                                                }}
                                            />
                                            <span className="category-checkmark-epd">Coffee</span>
                                        </label>
                                        <label className="category-label-epd">
                                            <input type="radio" name="category" className='category-input-epd'
                                                value='tea' checked={this.state.category === "2" ? true : false}
                                                onClick={() => {
                                                    this.setState({ category: '2' })
                                                }}
                                            />
                                            <span className="category-checkmark-epd" >Non Coffee</span>
                                        </label>
                                    </div>
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
const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        isSuccess: state.auth.isSuccess,
        // isLoggedOut: state.auth.isLoggedOut
    }
}

export default connect(mapStateToProps)(withParams(Editproduct));