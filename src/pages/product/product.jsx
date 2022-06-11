import React, { Component } from 'react';
import './product.css'

import VektorTiga from '../../assets/img/vektor-tiga.png'
import VektorDua from '../../assets/img/vektor-dua.png'
import VektorSatu from '../../assets/img/vektor-satu.png'

import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'
import axios from 'axios';
import Cardproduct from './cardproduct';
import withSearchParams from '../../helper/searchwithParams';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            // isFavorite: false,
            // isCoffee: false,
            // isNonCoffee: false,
            // isFood: false,
            // isAll: false,
            filter: false,
            iscategory: 'all',
            sort: 'name',
            order: 'asc',
            setSearchParams: this.props.setSearchParams.bind(this)
        };
    }
    componentDidMount() {
        this.state.setSearchParams('');
        axios
            .get('http://localhost:8080/product')
            .then((result) => {
                this.setState({
                    product: result.data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidUpdate() {
        if (this.state.filter) {
            let params = ''
            let url = "http://localhost:8080/product"
            if (this.state.iscategory === 'all') {
                url += '?'
            }
            // if (this.state.iscategory === 'favorite') {
            //     url += '/favorite?'
            params += 'category=favorite&'
            // }
            if (this.state.iscategory !== 'all' && this.state.iscategory !== 'favorite') {
                url += `?category_name=${this.state.iscategory}&`
                params += `category_name=${this.state.iscategory}&`
            }
            url += `sort=${this.state.sort}&order=${this.state.order}`
            params += `sort=${this.state.sort}&order=${this.state.order}`

            this.state.setSearchParams(params)


            axios
                .get(url)
                .then(result => {
                    console.log(result);
                    console.log(this.state.order);
                    this.setState({
                        product: result.data.data,
                        order: ''
                    });
                })
                .catch(error => {
                    console.log(error);
                })
            this.setState({
                filter: false
            })
        }

        // if (this.state.sort === 'name') {
        //     let url = "http://localhost:8080/product/?sort=name"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             console.log(result);
        //             console.log(this.state.sort);
        //             this.setState({
        //                 product: result.data.data,
        //                 sort: ''
        //             });
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // }
        // if (this.state.sort === 'price') {
        //     let url = "http://localhost:8080/product/?sort=price"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             console.log(result);
        //             console.log(this.state.sort);
        //             this.setState({
        //                 product: result.data.data,
        //                 sort: ''
        //             });
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // }
        // if (this.state.order === 'asc') {
        //     let url = "http://localhost:8080/product/?order=asc"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             console.log(result);
        //             console.log(this.state.order);
        //             this.setState({
        //                 product: result.data.data,
        //                 order: ''
        //             });
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // }
        // if (this.state.order === 'desc') {
        //     let url = "http://localhost:8080/product/?order=desc"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             console.log(result);
        //             console.log(this.state.order);
        //             this.setState({
        //                 product: result.data.data,
        //                 order: ''
        //             });
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // }
        // if (this.state.isAll) {
        //     let url = "http://localhost:8080/product"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             this.setState({
        //                 product: result.data.data,
        //             });
        //         }).catch(error => {
        //             console.log(error)
        //         })

        //     this.setState({
        //         isAll: false
        //     })
        // }
        // if (this.state.isFood) {
        //     let url = "http://localhost:8080/product?category_name=food"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             this.setState({
        //                 product: result.data.data,
        //             });
        //         }).catch(error => {
        //             console.log(error)
        //         })

        //     this.setState({
        //         isFood: false
        //     })
        // }
        // if (this.state.isCoffee) {
        //     let url = "http://localhost:8080/product?category_name=coffee"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             this.setState({
        //                 product: result.data.data,
        //             });
        //         }).catch(error => {
        //             console.log(error)
        //         })

        //     this.setState({
        //         isCoffee: false
        //     })
        // }
        // if (this.state.isNonCoffee) {
        //     let url = "http://localhost:8080/product?category_name=tea"
        //     axios
        //         .get(url)
        //         .then(result => {
        //             this.setState({
        //                 product: result.data.data,
        //             });
        //         }).catch(error => {
        //             console.log(error)
        //         })

        //     this.setState({
        //         isNonCoffee: false
        //     })
        // }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <section className='container'>
                        <div className="row">
                            <div className="col-lg-4 container-left ">
                                <h3 className="">Promo Today</h3>
                                <p>Coupons will be updated every weeks. Check them out! </p>
                                <div className="aside-content">
                                    <div className="promo-one">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4">
                                                <img src={VektorTiga} alt="vektortiga" />
                                            </div>
                                            <div className="col-lg-8 col-sm-8">
                                                <p><strong>HAPPY MOTHER’S DAY!</strong><br />Get one of our favorite menu for
                                                    free!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="promo-two">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4">
                                                <img src={VektorDua} alt="vektordua" />
                                            </div>
                                            <div className="col-lg-8 col-sm-8">
                                                <p><strong>Get a cup of coffee for free on sunday morning</strong><br />Only at 7
                                                    to 9 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="promo-three">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4">
                                                <img src={VektorTiga} alt="vektortiga" />
                                            </div>
                                            <div className="col-lg-8 col-sm-8">
                                                <p><strong>HAPPY MOTHER’S DAY!</strong><br />Get one of our favorite menu for
                                                    free!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="promo-four">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4">
                                                <img src={VektorSatu} alt="vektorsatu" />
                                            </div>
                                            <div className="col-lg-8 col-sm-8">
                                                <p><strong>HAPPY HALLOWEEN!</strong><br />Do you like chicken wings? Get 1 free
                                                    only if you buy pinky promise</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="apply-coupon">
                                        <button>Apply Coupon</button>
                                    </div>
                                    <div className="footer-aside">
                                        <p><strong>Terms and Condition</strong><br />1. You can only apply 1 coupon per day<br />2.
                                            It only for dine in<br />3. Buy 1 get
                                            1 only for new user<br />4. Should make member card to apply coupon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="product-container-right">
                                    <div className="navbar navbar-expand-lg">
                                        <ul className="navbar-nav nav-product-nav">
                                            <li className="nav-item mx-2">
                                                <button className="nav-link text-secondary"
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            iscategory: "favorite"
                                                        })
                                                    }}
                                                >Favorite {'&'} promo</button>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <button className="nav-link text-secondary"
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            iscategory: "coffee"
                                                        })
                                                    }}
                                                >Coffee</button>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <button className="nav-link text-secondary"
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            iscategory: "tea"
                                                        })
                                                    }}
                                                >Non Coffee</button>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <button className="nav-link text-secondary"
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            iscategory: "food"
                                                        })
                                                    }}
                                                >Foods</button>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <button className="nav-link text-secondary"
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            iscategory: 'all'
                                                        })
                                                    }}
                                                >All</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className='navbar navbar-expand-lg'>
                                            <ul className='navbar-nav'>
                                                <p>Sort By</p>
                                                <li className='nav-item mx-1'>
                                                    <button className='nav-item btn btn-outline-secondary'
                                                        onClick={() => {
                                                            this.setState({
                                                                filter: true,
                                                                sort: 'name',
                                                            })
                                                        }}
                                                    >
                                                        Name</button>
                                                </li>
                                                <li className='nav-item mx-1'>
                                                    <button className='nav-item btn btn-outline-secondary'
                                                        onClick={() => {
                                                            this.setState({
                                                                filter: true,
                                                                sort: 'price',
                                                            })
                                                        }}
                                                    >Price</button>
                                                </li>
                                                <p>Order By</p>
                                                <li className='nav-item mx-1'>
                                                    <button className='nav-item btn btn-outline-secondary'
                                                        onClick={() => {
                                                            this.setState({
                                                                filter: true,
                                                                order: 'asc',
                                                            })
                                                        }}
                                                    >Asc</button>
                                                </li>
                                                <li className='nav-item mx-1'>
                                                    <button className='nav-item btn btn-outline-secondary'
                                                        onClick={() => {
                                                            this.setState({
                                                                filter: true,
                                                                order: 'desc',
                                                            })
                                                        }}
                                                    >Desc</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main-product">
                                        <div className="row">
                                            {this.state.product.map((product, idx) => (
                                                <Cardproduct key={idx} id={product.id} photo={`http://localhost:8080${product.photo}`} name={product.name} category={product.category_name} price={product.price} />
                                            ))}
                                        </div>
                                        <div className="pagination-button">
                                            <button className='btn btn-success'>Previous</button>
                                            <p>1/3</p>
                                            <button className='btn btn-success'>Next</button>
                                        </div>
                                        <p>*the price has been cutted by discount appears</p>
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

export default withSearchParams(Product);