import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const useAuth = ()=>{
    const authenticated= localStorage.getItem("authenticated");
    const role = localStorage.getItem('role')
    if(authenticated){
        if(role==="Manager" || role ==="Admin" )
            return true;
        else return false;
    }
    else return false;
}
function ManagementRoute() {
    const auth = useAuth();
  return auth? <Outlet/> : <Navigate to ="/"/>
}

export default ManagementRoute
