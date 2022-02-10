import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const [formRegisterValues, handleRegisterInputChanges] = useForm({
        rName: 'Alepsis',
        rEmail: 'alepsis@mail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });

    const {rName, rEmail, rPassword1, rPassword2} = formRegisterValues;

    
    const handleRegister = (e) => {
        e.preventDefault();

        if( rPassword1 !== rPassword2) {
            return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        }

        dispatch( startRegister( rEmail, rPassword1, rName));
    }


    return(
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <form onSubmit={handleRegister}>
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-5">Please enter your name email and password</p>

                    <div className="form-outline form-white mb-4">
                        <input 
                            type="text" 
                            className="form-control 
                            form-control-lg" 
                            placeholder='Name'
                            name='rName'
                            value={rName}
                            onChange={handleRegisterInputChanges}
                            autoComplete='off'
                        />
                        <label className="form-label" htmlFor="typeEmailX">Name</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                        <input 
                            type="text" 
                            className="form-control 
                            form-control-lg" 
                            placeholder='Email'
                            name='rEmail'
                            value={rEmail}
                            onChange={handleRegisterInputChanges}
                            autoComplete='off'
                        />
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <input 
                            type="password" 
                            className="form-control form-control-lg"
                            placeholder='Password'
                            name='rPassword1'
                            value={rPassword1}
                            onChange={handleRegisterInputChanges} 
                        />
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                        <input 
                            type="password" 
                            className="form-control form-control-lg"
                            placeholder='Confirm Password'
                            name='rPassword2'
                            value={rPassword2}
                            onChange={handleRegisterInputChanges} 
                        />
                        <label className="form-label" htmlFor="typePasswordX">Confirm Password</label>
                    </div>

                    {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        {/* <a onClick={handleClick} href="#!" className="text-white text-decoration-none" ><i className="fab fa-google"></i></a> */}
                    </div>

                    </div>

                    <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                    </div>

                </div>
                </div>
            </div>
            </div>
            </form>
        </div>
        </section>
    );
};
