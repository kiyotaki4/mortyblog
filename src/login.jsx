import React, { useState } from 'react'
import './login.css'; 

function Login() {
    const [inputLogin,setInputLogin] = useState("")
        const [inputPassword,setInputPassword] = useState("")
        const [error,setError] = useState(''); 
    const loginLogic = () =>{
        const savedLogin = localStorage.getItem("regLogin")
        const savedPassword = localStorage.getItem("regPassword")
        if(inputLogin === savedLogin && inputPassword === savedPassword)
        {
            console.log("вы авторизировались!")
            window.location.href = '/mortyblog/#/home';
        }
        else{
            console.log("password or login incorrect")
            setError(`password or login incorrect, you can register another account if you want`)
        }
    }
  return (
    <div className="registration-body">
    <div className="registrationWindow">
        <h1>Login</h1>
        <span className="error-span">{error}</span>
        <div className="loginpassword">
        <input type="email" placeholder='login' value={inputLogin} onChange={(e)=>setInputLogin(e.target.value)}/>
        <input type="password"  placeholder='password' value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)}/>
        </div>
        <button onClick={()=>loginLogic()}>Login</button>
        <span>Нет аккаунта? <a href="/">Страница регистрации</a></span>
        {/* <link rel="stylesheet" href="/login" /> */}
        {/* <button>Login</button> */}
    </div>
    </div>
  )
}

export default Login