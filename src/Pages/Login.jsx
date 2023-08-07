import React, { useState }  from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { LoginApi } from "../Utilities/LoginApi";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

export const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [user] = useOutletContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await LoginApi(email, password, user)
        dispatch(login(data))
        navigate(`/${data.user.id}/dashboard`)

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Please enter your email and password to login.
                    </p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                            <label className="label">
                                <a href="/register" className="label-text-alt link link-hover">
                                    Register
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
