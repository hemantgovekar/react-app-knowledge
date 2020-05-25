import React from 'react'

function Login() {
    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username"
                    aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="password" placeholder="Password" className="form-control"
                    aria-label="Password" aria-describedby="basic-addon1"></input>
            </div>
            <input type="submit" value="Login"
                className="btn btn-success form-control" ></input>
        </div>
    )
}

export default Login
