import './footer.css'
import Logo from '../../assets/img/icons/coffee-icon.png'
import Fb from '../../assets/img/icons/fb-vektor.png'
import Twitter from '../../assets/img/icons/twitter-vector.png'
import Ig from '../../assets/img/icons/ig-vector.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <section className="footer-bottom py-5">
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
                                    <Link to=""><img src={Fb} alt="fb" /></Link>
                                    <Link to=""><img src={Twitter} alt="twitter" /></Link>
                                    <Link to=""><img src={Ig} alt="ig" /></Link>
                                </div >
                                <div className="copyright mt-5" >
                                    <p>{'&'}copy2022CoffeeStore</p>
                                </div >
                            </div >
                        </div >
                        <div className="col-lg-6 col-md-6" >
                            <div className="home-right-content" >
                                <div className="row" >
                                    <div className="col-lg-6 col-md-6" >
                                        <div className="home-product-footer" >
                                            <strong>Product</strong>
                                            <Link to="">Download</Link>
                                            <Link to="">Locations</Link>
                                            <Link to="">Blog</Link>
                                            <Link to="">Pricing</Link>
                                            <Link to="">Countries</Link>
                                        </div >
                                    </div >
                                    <div className="col-lg-6 col-md-6" >
                                        <div className="home-engage-footer" >
                                            <strong>Engage</strong>
                                            <Link to="">Coffee Shop ?</Link>
                                            <Link to="">FAQ</Link>
                                            <Link to="">Terms of Services</Link>
                                            <Link to="">About Us</Link>
                                            <Link to="">Privacy Policy</Link>
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

export default Footer