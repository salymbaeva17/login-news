import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/actions/userActions";
import {Redirect, useHistory} from "react-router-dom";

const Login = ({location}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {user: isAuth} = useSelector(store => store.user)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.email === "admin@admin.com" && user.password === "123456"){
            dispatch(login())
            history.push(location.state.from.pathname || "/")
        }
    }
    if(isAuth){
        return <Redirect to="/" />
    }
    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div
                        className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                        Login
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="username"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="email"
                            required
                            autoFocus
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                            type="submit">Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;