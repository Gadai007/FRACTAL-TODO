import React from 'react'
import { Link } from 'react-router-dom'
import signupImg from '../images/signup.png'

const Home = () => {
    return (
        <div className="row">
            <div className="col-6">
                <img src={signupImg} alt='home'/>
            </div>
            <div className="col-6">
                <form>
                    <h2 className='fs-1'>Sign Up</h2>
                    <label for="name" className="visually-hidden">Name</label>
                    <input type="text" id="name" name='name' class="form-control" placeholder="Name" required autofocus />
                    <label for="email" className="visually-hidden">Email address</label>
                    <input type="email" id="email" name='email' class="form-control" placeholder="Email address" required autofocus />
                    <label for="password" className="visually-hidden">Password</label>
                    <input type="password" id="password" name='password' class="form-control" placeholder="Password" required />
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <span className="fs-6 text-muted">if account already exist please <Link to='/signin'>signin</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Home
