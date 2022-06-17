import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';

// import gambar
import Kamera from '../../assets/img/icons/kamera.png'

// import css
import './createpromo.css'

class Createpromo extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='container-create-product'>
                    <section className='container'>
                        <div className='row'>
                            <div className='col-lg-6 left-create-promo'>
                                <h4>Favorite {'&'} Promo {'>'} Add new promo</h4>
                                <div className='kamera-promo'>
                                    <img src={Kamera} alt="product" className='kamera-img' />
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
                                <div className='save-create-promo'>
                                    <button className='save-create-promo-button'>Save Promo</button>
                                </div>
                                <div className="cancel-create-promo">
                                    <button className='cancel-create-promo-button'>Cancel</button>
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

export default Createpromo;