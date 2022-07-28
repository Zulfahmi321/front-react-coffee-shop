import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function withParams(Component) {
    function WithParams(props) {
        let params = useParams();
        const navigate = useNavigate()
        return <Component params={params} navigate={navigate} {...props} />;
    }
    return WithParams;
}

export default withParams;