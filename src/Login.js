import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    const [goToWelcome, setGoToWelcome] = useState('');
    
        if (goToWelcome){
        return <Navigate to="/welcome" />
    }
    return (
        <div className="auth-form-container">
            <h2> </h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">Email :</label>
                <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="youremail@gmail.com"
                id="email" name="email" required />
                <label htmlfor="password">Mot de passe :</label>
                <input value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password" placeholder="******** "
                id="password" name="password" required />
                <div>
                    <button onClick={() => {setGoToWelcome(true);}} type="submit"> Se connecter </button>
                </div>
            </form>
            <p>Vous n'avez pas de compte ? <Link to='/register'> S'inscrire ici.</Link></p>
            <p><Link>Mot de passe oublie ?</Link></p>
        </div>
    )
}

export default Login;
