import React, { Component } from "react";

class LoginForm extends Component {
    render() {
        return (
        <div>
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input id="username" type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        );
    }
}

export default LoginForm;