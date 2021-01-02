import React from 'react'
import signinImg from '../images/signin.png'

const Signin = () => {
    return (
        <div className="row">
            <div className="col-6">
                <img src={signinImg} alt='signin' />
            </div>
            <div className="col-6">
                <form>
                    <h2 className='fs-1'>Sign In</h2>
                    <label for="email" className="visually-hidden">Email address</label>
                    <input type="email" id="email" name='email' class="form-control" placeholder="Email address" required autofocus />
                    <label for="password" className="visually-hidden">Password</label>
                    <input type="password" id="password" name='password' class="form-control" placeholder="Password" required />
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Signin