import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import "./register.css"



function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()

    function validate(){
        if(email === ""){
            emailRef.current.classList.add("validation-error")
        }else{
            emailRef.current.classList.remove("validation-error")
        }
        if(password === ""){
            passwordRef.current.classList.add("validation-error")
        }else{
            passwordRef.current.classList.remove("validation-error")
        }
        if(name === ""){
            nameRef.current.classList.add("validation-error")
        }else{
            nameRef.current.classList.remove("validation-error")
        }
    }

    return (
        <div className="register-box">
            <h1>Zarejestruj się</h1>
            <input type="text"
                   ref={nameRef}
                   placeholder="Imię"
                   value={name}
                   onChange={(e)=>setName(e.target.value)}/>
            <input type="text"
                   ref={emailRef}
                   placeholder="Email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password"
                   ref={passwordRef}
                   placeholder="Hasło"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}/>
            <p>Masz już konto? <Link to="/login">Zaloguj się</Link></p>
            <button onClick={validate}>Zarejestruj się</button>
            <p>

                <Link to="/">Kontynuuj bez rejestracji</Link>

            </p>
        </div>
    );
}

export default Register;
