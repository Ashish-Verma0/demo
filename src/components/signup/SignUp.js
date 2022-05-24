import React, { useState } from 'react'
import "../signup/SignUp.css"
import { axios } from "axios"
const SignUp = () => {
    const Url = "localhost/3000"
    const [data, setData] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    let name, value;
    const handleChange = (elem) => {
        const { name, value } = elem.target
        setData({ ...data, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        const res = await axios(Url, {
            method: "",
            body: data,
            headers: {
                "content-type": "application/json",
                "Authentication": "token"
            },
            withCredentials: true
        })
        console.log(res)
    }
    return (
        <div>
            <form method='POST'>
                <div className="body-background">
                    <div className="container-fluid d-flex justify-content-center align-items-center h-100">

                        <div className="card p-3 text-center py-4">
                            <h4>Create account</h4>
                            <div>
                                <span>Already have an account?</span>
                                <a href="#" className="text-decoration-none">Signin</a>
                            </div>

                            <div className="mt-3 px-3">
                                <input type="text" className="form-control" placeholder="Username" name="userName" onChange={handleChange} value={data.userName} />
                            </div>

                            <div className="input-group px-3 mt-3">
                                <input type="text" className="form-control" placeholder="First Name" aria-label="Username" name="firstName" onChange={handleChange} value={data.firstName} />
                                <span></span>
                                <input type="text" className="form-control" placeholder="Last Name" aria-label="Server" name="lastName" onChange={handleChange} value={data.lastName} />
                            </div>

                            <div className="mt-3 px-3">
                                <input type="email" className="form-control" placeholder="E-mail" name="email" onChange={handleChange} value={data.email} />
                            </div>
                            <div className="mt-3 px-3">
                                <input className="form-control" type="phone" placeholder="Mobile Number" name="phone" maxLength={10} onChange={handleChange} value={data.phone} />
                            </div>

                            <div className="mt-3 d-grid px-3">
                                <button className="btn btn-primary btn-block btn-signup text-uppercase" onClick={handleSubmit}>
                                    <span >Signup</span>

                                </button>
                            </div>

                            <div className="px-3">
                                <div className="mt-2 form-check d-flex flex-row">
                                    <input className="form-check-input" type="checkbox" value="" id="services" />
                                    <label className="form-check-label ms-2" htmlFor="services">
                                        I have read and agree to the terms.
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp