import React from 'react'
import { Link } from 'react-router-dom'

function Cardproduct(props) {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-4">
                <Link to={`/product/${props.id}`} className='nav-link'>
                    <div className="card card-custom-product">
                        <div className="card-body text-center">
                            <img src={props.photo} className="card-img-top"
                                alt="product" />
                            <p className="card-title-custom">{props.name}</p>
                            <p className='card-title-custom'>{props.category_name}</p>
                            <p className="card-text-custom">{props.price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Cardproduct