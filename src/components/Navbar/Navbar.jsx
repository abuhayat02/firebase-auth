import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../ContextApiProvider/CreateMyContext'

export default function Navbar() {
    let {user , logOut} = useContext(MyContext);
    
    let nav = <>
        <Link to={'/'} className='px-4 py-1' >Home</Link>
        <Link to={'/about'} className='px-4 py-1' >About</Link>
        <Link to={'/contact'} className='px-4 py-1' >Contact</Link>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow">
                        {
                           user && nav
                        }
                    </ul>
                </div>
                <a className=" text-xl">Welcome {user?.email.split('@')[0]}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                       user && nav
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={logOut} className='px-3 py-1'>Log-out</button> : <>
                    <Link to={'/login'} className='px-4 py-1' >Login</Link>
                    <Link to={'/register'} className='px-4 py-1' >Register</Link>
                    </>
                }
            </div>
        </div>
    )
}
