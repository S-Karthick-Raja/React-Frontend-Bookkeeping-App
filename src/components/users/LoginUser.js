import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/usersAction';


const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    //Submit handler
    const loginUserSubmitHandler = e => {
        e.preventDefault();
        console.log(email, password);
        dispatch(loginUserAction(email, password));
    };

    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    <h1 className='text-center'>Login/Signin</h1>
                    <form onSubmit={loginUserSubmitHandler}>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Email address</label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type='email'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter email'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>Password</label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='Password'
                                />
                            </div>
                            <button type='submit' className='btn btn-info m-auto'>
                                Login
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { LoginUser };