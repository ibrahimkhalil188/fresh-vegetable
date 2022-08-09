import React, { useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import style from '../styles/Login.module.css'
import Link from 'next/link'
const Login = () => {
    const [toggle, setToggle] = useState(false)
    const { formContainer, label, input, button, divider, socialLogin } = style
    return (
        <>
            <Navbar></Navbar>
            <div className={formContainer}>
                <h1>{toggle ? "Register" : "Login"}</h1>
                <form>
                    <div>
                        <label className={label}>Email</label>
                        <input className={input} type="email" />
                    </div>
                    <div>
                        <label className={label}>Password</label>
                        <input className={input} type="password" />
                    </div>
                    {
                        toggle ? <div>
                            <label className={label}>Confirm Password</label>
                            <input className={input} type="password" />
                        </div> : ""
                    }
                    <input className={button} type="submit" value={toggle ? "Register" : "Login"} />
                </form>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bolder" }}>
                    <div className={divider}></div>
                    <span>OR</span>
                    <div className={divider}></div>
                </div>
                <div>
                    <div className={socialLogin}>
                        <p>Login with Google</p>
                    </div>
                    <div className={socialLogin}>
                        <p>Login with Facebook</p>
                    </div>
                </div>
                <h4>Don't have any account? <Link href=''><span style={{ color: "blue", cursor: "pointer" }} onClick={() => setToggle(!toggle)}>Register Please</span></Link></h4>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;