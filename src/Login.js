import React, { useState } from 'react'
import { useHistory} from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    function authenticate() {
        if(user === "admin" && password === "admin123")
        {
            setUser("")
            setPassword("")
            return history.push('/home')
        }
        else
        {
            alert("Incorrect Username or password")
            setUser("")
            setPassword("")
        }
    }
    return (
        <form className="login">
            <div className="header login-header">Medicon Pharmacy</div>
            <div className="fields">
                <div className="field">
                    <b>User Name:</b> <br />
                    <input type= "text" className="textBox" value = {user} onChange = {(e) => setUser(e.target.value)} required/>
                </div>
                <div className="field">
                    <b>Password:</b>  <br />
                    <input type= "password" className="textBox" value={password} onChange = {e => setPassword(e.target.value)} required/>   
                </div>
                
            </div>
        <button className="btn btn-primary" onClick={authenticate}>Login</button>
        </form>
    )
}

export default Login
