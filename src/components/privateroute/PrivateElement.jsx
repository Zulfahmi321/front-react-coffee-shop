import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function PrivateElement({
    children,
    // allowedRole,
    redirectedTo = '/',
    isRouteReplaced = true,
    extraData = null,
}) {
    const { token = null } = useSelector((state) => state.auth.userInfo) || {};
    if (!token) {
        return (
            <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
        );
    }
    return children;
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        isSuccess: state.auth.isSuccess,
        // isLoggedOut: state.auth.isLoggedOut
    }
}
export default connect(mapStateToProps)(PrivateElement)