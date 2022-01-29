import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "../../redux/actions/users/usersAction";

const UpdateProfile = ({history}) => {
    //Get the user from localstorage and pass to the initial states
    const userProfile = useSelector(state => state.userProfile);
    const { user } = userProfile;
    console.log(user);
    const [fname, setFname] = useState(user && user.fname);
    const [lname, setLname] = useState(user && user.lname);
    const [pic, setPic] = useState(user && user.pic);
    const [email, setEmail] = useState(user && user.email);
    const [password, setPassword] = useState('');

    // //dispatch action
    const dispatch = useDispatch();
    
    // //submit
    const formSubmitHandler = e => {
        e.preventDefault();
        dispatch(updateUser(fname,lname,pic, email, password));
    };

    const updatedUser = useSelector(state => state.updatedUser);
    const { loading, error } = updatedUser;

    return (
        <div className="row container-height">
            <div className="col-lg-6 col-md-6 m-auto">
                <div className="container">
                    {error && <h1>{error}</h1>}
                    {loading && <h2>Loading .....</h2>}
                    <h1 className="text-center">Update Your Profile</h1>
                    <form onSubmit={formSubmitHandler}>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">First Name</label>
                                <input
                                    value={fname}
                                    onChange={e => setFname(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Last Name</label>
                                <input
                                    value={lname}
                                    onChange={e => setLname(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Profile URL</label>
                                <input
                                    value={pic}
                                    onChange={e => setPic(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary m-auto">
                                Update your profile
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { UpdateProfile };
