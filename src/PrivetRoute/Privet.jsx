import React, { useContext } from 'react'
import { MyContext } from '../ContextApiProvider/CreateMyContext'
import { Navigate } from 'react-router-dom';

export default function Privet({ children }) {
    let { user , loader } = useContext(MyContext);

    if(loader){
        return <p className='text-center'>Loading...</p>
    }


    if(user){
        return children ;
    }

    return (
       <Navigate to={"/login"}></Navigate>
    )
}
