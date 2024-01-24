import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navigate,Outlet } from 'react-router-dom'

const useAuth=()=>{
    const authenticated = localStorage.getItem('authenticated');
    if(authenticated){
        if(localStorage.getItem('role')==="User")
            return true;
        else return false;
    }
    else{
        return false;
    }

}

function UserRoute() {
    const auth = useAuth();
  return auth? <Outlet/> : <Navigate to ="/"/>
}

export default UserRoute