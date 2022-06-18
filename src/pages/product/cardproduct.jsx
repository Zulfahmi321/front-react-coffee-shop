import React from 'react'
import { Link } from 'react-router-dom'

function Cardproduct(props) {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-4 col-6">
                <Link to={`/product/${props.id}`} className='nav-link'>
                    <div className="card card-custom-product">
                        <div className="card-body text-center ">
                            <img src={props.photo} className="card-img-top mb-4"
                                alt="product" />
                            <h5 className="card-title-custom">{props.name}</h5>
                            {/* <h5 className='card-title-custom'>{props.category_name}</h5> */}
                            <h6 className="card-text-custom">{props.price}</h6>
                        </div>
                    </div>
                </Link>
            </div >
        </React.Fragment >
    )
}

export default Cardproduct