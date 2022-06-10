import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';
// import Product from '../../assets/img-products/product-1.png'
import Cardhistory from './cardhistory';
import './history.css'

class History extends Component {
    constructor() {
        super();
        this.state = {
            transaction: [],
        }
    }

    componentDidMount() {
        const { token } = JSON.parse(localStorage.getItem('user-info'))
        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios
            .get('http://localhost:8080/transaction/', config)
            .then((result) => {
                console.log(result);
                this.setState({
                    transaction: result.data.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='background-history'>
                    <div className="container container-history">
                        <div className="history-title">
                            <h4>Let’s see what you have bought!
                                <p>Long press to delete item</p></h4>
                        </div>
                        <div className='row'>
                            {this.state.transaction.map((transaction, idx) => (
                                <Cardhistory key={idx} id={transaction.id} name={transaction.product} price={transaction.price} />
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default History;