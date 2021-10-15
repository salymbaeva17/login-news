import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/userActions";

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.user.user)
    return (
        <header className="bg-red-500 p-4 mb-10">
            <div className="container mx-auto flex justify-between align-middle">
                <Link to="/" className="text-white font-bold text-xl">Your logo</Link>
                <ul className="flex ">
                    <li><NavLink to="/" className="text-white">Home</NavLink></li>
                    <li><NavLink to="/news" className="mx-3 text-white">News</NavLink></li>
                    {
                       !user && <li><NavLink to="/login" className="text-white">Login</NavLink></li>
                    }
                    {
                        user && <li><button onClick={()=>dispatch(logout())} className="text-white">Logout</button></li>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;