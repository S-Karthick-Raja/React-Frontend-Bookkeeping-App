import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../../Global-Constant/globalConstant';
import { registerUserAction } from '../../redux/actions/users/usersAction';


const RegisterUser = ({ history }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [pic, setPic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();

    //Grab user login from store
    const userLogin = useSelector(state => state.userLogin);

    const { userInfo } = userLogin;

    //Redirect if user is login/authenticated

    useEffect(() => {
        if (userInfo) {
            history.push(`${API_URL}/profile`);
        }
    }, [history, userInfo]);


    const formSubmitHandler = e => {
        e.preventDefault();
        //disptach action here
        dispatch(registerUserAction(fname, lname, pic, email, password));
    };


    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    <h1 className='text-center'>REGISTER USER</h1>

                    <form onSubmit={formSubmitHandler}>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>First Name</label>
                                <input
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter Name'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Last Name</label>
                                <input
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter Name'
                                />
                            </div><div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Profile URL</label>
                                <input
                                    value={pic}
                                    onChange={(e) => setPic(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Enter Name'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Email address</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='Password'
                                />
                            </div>
                            <button type='submit' className='btn btn-info m-auto'>
                                Register
                            </button>
                            <hr />
                            <div style={{ marginBottom: "50px" }}>
                                <spam>Already existing user click here to login</spam>
                                <Link to="/login" style={{ marginLeft: "20px" }}>
                                    <button type='submit' className='btn btn-info m-auto'>
                                        login
                                    </button>
                                </Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { RegisterUser };