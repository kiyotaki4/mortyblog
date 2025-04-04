import React, { useState } from 'react'
import './registration.css'; 
function Registration() {
    const [inputRegLogin,setInputRegLogin] = useState("")
    const [inputRegPassword,setInputRegPassword] = useState("")
    const registrationLogic = () =>{
        console.log("log")
        console.log(inputRegLogin,inputRegPassword);
        localStorage.setItem('regLogin',inputRegLogin)
        localStorage.setItem('regPassword',inputRegPassword)
        console.log("Данные сохранены логин пароль: "+localStorage.getItem('regLogin'),localStorage.getItem('regPassword'))
        window.location.href = '/#/login';
    }
  return (
    <div className="registration-body">
    <div className="registrationWindow">
        <h1>Registration</h1>
        <div className="loginpassword">
        <input type="email" placeholder='login' value={inputRegLogin} onChange={(e)=>setInputRegLogin(e.target.value)}/>
        <input type="password"  placeholder='password' value={inputRegPassword} onChange={(e)=>setInputRegPassword(e.target.value)}/>
        </div>
        <button onClick={()=>registrationLogic()}>Registration</button>
        <span>Уже зарегистрированы? <a href="/login">Страница логина</a></span>
        {/* <link rel="stylesheet" href="/login" /> */}
        {/* <button>Login</button> */}
    </div>
    </div>
  )
}

export default Registration