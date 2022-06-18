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
            page: 1,
            limit: 12,
            totalPage: 1,
            meta: null,
            filter: false,
            iscategory: 'all',
            sort: 'name',
            order: 'asc',
            searchName: '',
            setSearchParams: this.props.setSearchParams.bind(this)
        };
    }
    componentDidMount() {
        document.title = "Product"
        axios
            .get(`${process.env.REACT_APP_BE_HOST}/product`)
            .then((result) => {
                console.log(result.data.data);
                this.setState({
                    product: result.data.data,
                    totalPage: result.data.meta.totalPage,
                });
            })
            .catch((error) => {
                console.log(error);
            })
        this.state.setSearchParams('page=1&limit=12&sort=name&order=asc')
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
        if (this.state.filter) {
            let params = ''
            let url = `${process.env.REACT_APP_BE_HOST}/product`
            // let urlBest = `${process.env.REACT_APP_BE_HOST}/product/best`

            if (this.state.iscategory === 'all') {
                url += `?page=${this.state.page}&limit=${this.state.limit}&`
                params += `page=${this.state.page}&limit=${this.state.limit}&`
            }
            if (this.state.iscategory === 'favorite') {
                url += `/best?page=${this.state.page}&limit=${this.state.limit}&`
                params += `category_name=${this.state.iscategory}&page=${this.state.page}&limit=${this.state.limit}&`
            }
            if (this.state.iscategory !== 'all' && this.state.iscategory !== 'favorite') {
                url += `?category_name=${this.state.iscategory}&page=${this.state.page}&limit=${this.state.limit}&`
                params += `category_name=${this.state.iscategory}&page=${this.state.page}&limit=${this.state.limit}&`
            }
            if (this.state.searchName !== '') {
                url += `name=${this.state.searchName}&`
                params += `name=${this.state.searchName}&`
            }
            url += `sort=${this.state.sort}&order=${this.state.order}`
            params += `sort=${this.state.sort}&order=${this.state.order}`

            this.state.setSearchParams(params)

            axios
                .get(url)
                .then(result => {
                    this.setState({
                        product: result.data.data,
                        totalPage: !result.data.meta ? "1" : result.data.meta.totalPage
                    });
                })
                .catch(error => {
                    console.log(error);
                })
            this.setState({
                filter: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <section className='row'>
                        <div className="col-lg-4 col-sm-12 container-left ">
                            <h3 className="">Promo Today</h3>
                            <p>Coupons will be updated every weeks. Check them out! </p>
                            <div className="aside-content row">
                                <div className="promo-one col-md-6 p-1">
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
                                <div className="promo-two col-md-6 p-1">
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
                                <div className="promo-three col-md-6 p-1">
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
                                <div className="promo-four col-md-6 p-1">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-xs-6">
                                            <img src={VektorSatu} alt="vektorsatu" />
                                        </div>
                                        <div className="col-lg-8 col-sm-8 col-xs-6">
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
                        <div className="col-lg-8 col-sm-12">
                            <div className="product-container-right container">
                                <div className="navbar navbar-expand-lg navbar-expand-md">
                                    <ul className="navbar-nav nav-product-nav">
                                        <li className="nav-item mx-2">
                                            <div className={this.state.iscategory === 'favorite' ? "nav-active" : "nav-non-active"}
                                                onClick={() => {
                                                    this.setState({
                                                        filter: true,
                                                        iscategory: "favorite",
                                                    })
                                                }}
                                            >Favorite {'&'} promo</div>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <div className={this.state.iscategory === 'coffee' ? "nav-active" : "nav-non-active"}
                                                onClick={() => {
                                                    this.setState({
                                                        filter: true,
                                                        iscategory: "coffee"
                                                    })
                                                }}
                                            >Coffee</div>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <div className={this.state.iscategory === 'tea' ? "nav-active" : "nav-non-active"}
                                                onClick={() => {
                                                    this.setState({
                                                        filter: true,
                                                        iscategory: "tea"
                                                    })
                                                }}
                                            >Non Coffee</div>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <div className={this.state.iscategory === 'food' ? "nav-active" : "nav-non-active"}
                                                onClick={() => {
                                                    this.setState({
                                                        filter: true,
                                                        iscategory: "food"
                                                    })
                                                }}
                                            >Foods</div>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <div className={this.state.iscategory === 'all' ? "nav-active" : "nav-non-active"}
                                                onClick={() => {
                                                    this.setState({
                                                        filter: true,
                                                        iscategory: 'all'
                                                    })
                                                }}
                                            >All</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='container'>
                                    <div className='navbar navbar-expand-lg navbar-expand-sm'>
                                        <ul className='navbar-nav navbar-custom-two'>
                                            <strong>Sort By</strong>
                                            <li className='nav-item mx-1'>
                                                <div className={this.state.sort === 'name' ? "nav-active" : "nav-non-active"}
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            sort: 'name',
                                                        })
                                                    }}
                                                >
                                                    Name</div>
                                            </li>
                                            <li className='nav-item mx-1'>
                                                <div className={this.state.sort === 'price' ? "nav-active" : "nav-non-active"}
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            sort: 'price',
                                                        })
                                                    }}
                                                >Price</div>
                                            </li>
                                            <strong>Order By</strong>
                                            <li className='nav-item mx-1'>
                                                <div className={this.state.order === 'asc' ? "nav-active" : "nav-non-active"}
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            order: 'asc',
                                                        })
                                                    }}
                                                >Asc</div>
                                            </li>
                                            <li className='nav-item mx-1'>
                                                <div className={this.state.order === 'desc' ? "nav-active" : "nav-non-active"}
                                                    onClick={() => {
                                                        this.setState({
                                                            filter: true,
                                                            order: 'desc',
                                                        })
                                                    }}
                                                >Desc</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='row g-3 mx-5'>
                                        <div className='col-auto'>
                                            <p>Search</p>
                                        </div>
                                        <div className="col-auto">
                                            <input type="text" className='form-control'
                                                onChange={e => this.setState({
                                                    filter: true,
                                                    searchName: e.target.value
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="main-product">
                                    <div className="row">
                                        {this.state.product.map((product, idx) => (
                                            <Cardproduct key={idx} id={product.id} photo={`${process.env.REACT_APP_BE_HOST}${product.photo}`} name={product.name} category={product.category_name} price={product.price} />
                                        ))}
                                    </div>
                                    <div className="pagination-button">
                                        {this.state.page === 1 ?
                                            <button disabled className='btn btn-secondary'>Previous</button> :
                                            <button className='btn btn-success'
                                                onClick={() => {
                                                    this.setState({
                                                        page: this.state.page - 1,
                                                        filter: true
                                                    })
                                                    // window.scrollTo(0, 0)
                                                }}

                                            >Previous</button>
                                        }
                                        <div className='page-number'>{this.state.page}</div>
                                        {this.state.page === Number(this.state.totalPage) ?
                                            <button disabled className='btn btn-secondary'>Next</button> :
                                            <button className='btn btn-success'
                                                onClick={() => {
                                                    this.setState({
                                                        page: this.state.page + 1,
                                                        filter: true
                                                    })
                                                    // window.scrollTo(0, 0)
                                                }}
                                            >Next</button>
                                        }
                                    </div>
                                    <p>*the price has been cutted by discount appears</p>
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