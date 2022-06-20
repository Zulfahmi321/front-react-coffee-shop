import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import pencil from '../../assets/img/icons/pencil.png'

function Cardproduct(props) {
    const roles = useSelector(state => state.user.data.roles)
    // console.log(roles);
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-4 col-6">
                {roles !== 'admin' ?
                    <div>
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
                    </div>
                    :
                    <div>
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
                        <div className="edit-product">
                            <Link to={`/product/edit/${props.id}`}>
                                <div className='btn-edit-product'>
                                    <img src={pencil} alt="" className='pencil-edit' />
                                </div>
                            </Link>
                        </div>
                    </div>
                }
            </div >
        </React.Fragment >
    )
}

export default Cardproduct