import React from 'react'

function Cardhistory(props) {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-sm-6">
                <div className="card-history-product">
                    <div className="row">
                        <div className="col-4 col-md-4 col-sm-4">
                            <img src='{Product}' alt="producthistory" className='product-history' />
                        </div>
                        <div className="col-8 col-md-8">
                            <div className="history-info">
                                <h4>{props.name}</h4>
                                <p>{props.price}</p>
                                <p>Delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cardhistory