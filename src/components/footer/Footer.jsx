import React, { Component } from 'react'
import './footer.css'
import Logo from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'


export class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="footer-bottom py-5 text-start">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="left-content">
                                    <img src={Logo} alt="" />
                                    <strong className="fw-bold">Coffee Shop</strong>
                                    <p className="mt-3" > Coffee Shop is a store that sells some good meals, and especially coffee.We
                                        provide
                                        high quality
                                        beans</p >
                                    <div className="sosmed my-5" >
                                        <a href=""><img src={Fb} alt="fb" /></a>
                                        <a href=""><img src={Twitter} alt="twitter" /></a>
                                        <a href=""><img src={Ig} alt="ig" /></a>
                                    </div >
                                    <div className="copyright mt-5" >
                                        <p>&copy2022CoffeeStore</p>
                                    </div >
                                </div >
                            </div >
                            <div className="col-lg-6 col-md-6" >
                                <div className="right-content" >
                                    <div className="row" >
                                        <div className="col-lg-6 col-md-6" >
                                            <div className="product" >
                                                <strong>Product</strong>
                                                <a href="">Download</a>
                                                <a href="">Locations</a>
                                                <a href="">Blog</a>
                                                <a href="">Pricing</a>
                                                <a href="">Countries</a>
                                            </div >
                                        </div >
                                        <div className="col-lg-6 col-md-6" >
                                            <div className="engage" >
                                                <strong>Engage</strong>
                                                <a href="">Coffee Shop ?</a>
                                                <a href="">FAQ</a>
                                                <a href="">Terms of Services</a>
                                                <a href="">About Us</a>
                                                <a href="">Privacy Policy</a>
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </section >
            </footer >
        )
    }
}

export default Footer