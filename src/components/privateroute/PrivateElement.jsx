import React from "react";
import { Navigate } from "react-router-dom";


function PrivateElement({
    children,
    // allowedRole,
    redirectedTo = '/',
    isRouteReplaced = true,
    extraData = null,
}) {
    const { token = null } = JSON.parse(localStorage.getItem('user-info')) || {};
    if (!token) {
        return (
            <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
        );
    }
    return children;
}

export default PrivateElement