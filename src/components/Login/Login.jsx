import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../../components/firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth => {
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    
    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login__logo" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFoB6EuQQwDz_J5e_d2YjVeNJdTk2ctDchWw&usqp=CAU" 
                    alt="" 
                />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signIn} className="login__signInButton" type="submit">Sign in</button>
                </form>

                <button onClick={register} className="login__registerButton">Create New Account</button>
            </div>
        </div>
    )
}

export default Login