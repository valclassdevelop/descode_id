import React from 'react';
import './index.css';
import {Logo} from '../../assets';
import {Or, Google, Sakura} from '../../assets/';
import {Link} from 'react-router-dom';


export default function Signup() {
    return (
        <div className="wrap_auth">
            <div className="banner_auth">
                <img src={Sakura} data-aos="fade-up" alt="banner_iamge" />
            </div>
            <div className="form_auth">
                <div className="wrap_form_auth" data-aos="fade-down">
                    <div>
                        <img src={Logo} className="logo_desoce" alt="logo_desoce" />
                        <h2>Sign up to <span className="desc">descode</span></h2>
                    </div>
                    <div className="form">
                    <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary btn_auth"><span className="sign_text">Sign in</span></button>
                            </form>
                    </div>
                    <div className="login_google">
                        <img src={Or} alt="or" />
                        <button className="btn btn-primary btn_google">
                            <span className="span_icon">
                                <img src={Google} alt="google_icon" />
                            </span>
                            <span className="span_text">
                                Login with google
                            </span>
                        </button>
                    </div>
                    <div className="account">
                        <small>Have an account? <Link to="/sign_in"><a className="signIn">Sign in</a></Link></small>
                    </div>
                </div>
            </div>
        </div>
    )
}  