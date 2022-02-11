import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange] = useForm({
        lEmail: 'alexis@correo.com',
        lPassword: '123456'
    });

    const {lEmail, lPassword} = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    const handleClick = () => {
        console.log('click');
    }
    return(
        <>
        <Header />
        <section className="gradient-custom">
        <div className="container py-2 h-100">
            <form onSubmit={ handleLogin}>
            <div className="d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                <div className="card-body p-4 text-center">

                    <div className="mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your email and password!</p>

                    <div className="form-outline form-white mb-4">
                        <input 
                            type="text" 
                            className="form-control 
                            form-control-lg" 
                            placeholder='Email'
                            name='lEmail'
                            value={lEmail}
                            onChange={handleLoginInputChange}
                            autoComplete='off'
                            />
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <input 
                            type="password" 
                            className="form-control form-control-lg"
                            placeholder='Password'
                            name='lPassword'
                            value={lPassword}
                            onChange={handleLoginInputChange} 
                            />
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>

                    {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                    </div>
                    <div>
                    <p className="mb-0">Don't have an account? <Link className='text-white-50 fw-bold' to='/register'>Sign Up</Link></p>
                    </div>

                </div>
                </div>
            </div>
            </div>
            </form>
        </div>
        </section>
        <Footer />
        </>
    );
};
