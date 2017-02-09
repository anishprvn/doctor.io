// src/components/NotFound/index.js
import React, { Component } from 'react';
// import classnames from 'classnames';

import './style.css';
import Footer from '../Footer'
export default class Login extends Component {
    static propTypes = {}
    static defaultProps = {}
    state = {}

    render() {
        // const { className, ...props } = this.props;
        return (
            <div >
                <div className="header_bg">
                    <img id="logo" src="images/icons/logo.svg" alt="Dental.io Logo" />
                    <span className="headerLinks" >
                        <a href="/">HOME</a>
                        <button className="pointer" id="btnHeader">LOGIN / REGISTER</button>
                    </span>
                    <img id="hamberg" src="/images/icons/menu.svg" alt="Open Menu" />
                </div>
                <div className="content">
                    <p className="welcome">Welcome Back</p>
                    <p className="subText">Changing the way people feel about dentistry</p>
                    <form action="search.html" method="get">
                        <input className="form-input" type="text" name="username"
                            value={this.props.username}
                            ref="username"
                            onChange={this.handleChange} placeholder="Username" /><br />
                        <input className="form-input" type="password" name="password"
                            value={this.props.password}
                            ref="password"
                            onChange={this.handleChange}
                            placeholder="Password" /><br />
                        <button className="btn btn-primary loginBtn pointer" type="submit"> Login </button>
                    </form>
                    <a className="actions" href="#">Forgot Password ?</a>
                    <hr className="line"></hr>
                    <div className="actions register">Don’t have an account yet? <a href="#">REGISTER</a></div>
                </div>
                <div className="guest">
                    Hi there! <br />
                    <span className="subText2">don’t need to signin? get connected as</span>
                    <br />
                    <button className="btn btn-guest loginBtn pointer" id="btnGuest"> GUEST </button>
                </div>
                <Footer/>
            </div>
        );
    }
}
