import React,{useContext} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export default function ProtectedRoute({children,roles}){
    const {user}=useContext(AuthContext);
    console.log(roles)

    // const userRoles = user.roles;

    if(!user) return <Navigate to ="/login"/>

    // if(userRoles && userRoles !== 'admin' || userRoles !== 'editor'){
    //     return<h2>Access Denied</h2>
    // }
    return children
}