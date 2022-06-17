import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';

// import gambar
import Kamera from '../../assets/img/icons/kamera.png'

// import css
import './createproduct.css'

class Createproduct extends Component {
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
                                    <img src={Kamera} alt="product" className='kamera-img' />
                                </div>
                                <div className='take-picture'>
                                    <button className='take-picture-button'>Take a picture</button>
                                </div>
                                <div className="choose-from-gallery">
                                    <button className='choose-from-gallery-button'>Choose from gallery</button>
                                </div>
                                <div className='save-create-product'>
                                    <button className='save-create-product-button'>Take a picture</button>
                                </div>
                                <div className="cancel-create-product">
                                    <button className='cancel-create-product-button'>Choose from gallery</button>
                                </div>
                            </div>
                            <div className='col-lg-6 right-create-product'>
                                <div>
                                    <form action='' className='form-create-product'>
                                        <label htmlFor="" className='form-label-title'>Name :</label>
                                        <input type="text" className='create-product-input' placeholder='Type product name min. 50 characters' />
                                        <label htmlFor="" className='form-label-title'>Price :</label>
                                        <input type="text" className='create-product-input' placeholder='Type the price' />
                                        <label htmlFor="" className='form-label-title'>Description :</label>
                                        <input type="text" className='create-product-input' placeholder='Describe your product min. 150 characters' />
                                    </form>
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
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Createproduct;