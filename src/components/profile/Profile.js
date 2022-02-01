import React, { useEffect } from "react";
import "./Profile.css";
import pic from "../../assets/img/bookpic.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../redux/actions/users/usersAction";
import { Loading } from "../Loading/Loading";

const Profile = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  //Check if user is login otherwise redirect
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo === null) history.push('/login');
  }, [userInfo, history]);

  //Get user Profile

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, user, error } = userProfile;

  console.log(userProfile);

  return (
    <section className="profile">
      {" "}
      {error && <h2>{error}</h2>}
      {loading ? (
        <h3>{Loading}</h3>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <div className="card m-auto " style={{ width: "50%" }}>
                <img src={user.profileurl ? user.profileurl : pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-text">{user && user.fname} {user && user.lname}</h4>
                  <p className="card-title">{user && user.email}</p>
                  <Link to="/user-update" className="btn btn-primary">
                    Update your profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Profile };
