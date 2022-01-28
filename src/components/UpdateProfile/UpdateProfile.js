import React from "react";

const UpdateProfile = () => {
    // //Get the user from localstorage and pass to the initial states
    // const userLogin = useSelector(state => state.userLogin);
    // const { userInfo } = userLogin;
    // console.log(userInfo);
    // const [name, setname] = useState(userInfo ? userInfo.name : '');
    // const [email, setemail] = useState(userInfo ? userInfo.email : '');
    // const [password, setpassword] = useState('');

    // console.log(userLogin);
    // //Get the updated user details from store and display message
    // const updatedUser = useSelector(state => state.updatedUser);
    // const { user, loading, success } = updatedUser;

    // //dispatch
    // const dispatch = useDispatch();
    // //submit
    // const formSubmitHandler = e => {
    //   e.preventDefault();
    //   dispatch(updateUser(name, email, password));
    // };

    return (
        <div className="row container-height">
            <div className="col-lg-6 col-md-6 m-auto">
                <div className="container">
                    <h1 className="text-center">Update Your Profile</h1>
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input
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
