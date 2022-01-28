import React, { useEffect } from 'react';
import './Profile.css';
import pic from '../../assets/img/bookpic.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserProfile } from '../../redux/actions/users/usersAction';
import {Loading} from '../Loading/Loading'

const Profile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const userProfile = useSelector(state => state.userProfile);
  const { loading,  user , error} = userProfile;

    return (
        <>      {error && <h2>{error}</h2>}
                { loading ? <h3>{Loading}</h3> : <div className='container'>
                    <div className='row'>
                        <div className='col mt-5'>
                            <div className='card m-auto ' style={{ width: '50%' }}>
                                <img src={pic} className='card-img-top' alt='...' />
                                <div className='card-body'>
                                    <p className='card-text'>{user && user.name}</p>
                                    <h5 className='card-title'>{user && user.email}</h5>
                                    <Link to='/user-update' className='btn btn-primary'>
                                        Update your profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> }
                

            {/* Table */}
            {loading ? <h1>Loading Please Wait</h1> : 
            <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>Author</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Book Name</th>
                    <th scope='col'>Delete</th>
                    <th scope='col'>Update</th>
                </tr>
            </thead>
            <tbody>
                {user?.books.map( book => ( 
                       <tr className='table-dark'>
                       <th scope='row'>{book.author}</th>
                       <td>{book.category}</td>
                       <td>{book.title}</td>
                       <td>Delete</td>
                       <td>Update</td>
                   </tr>
                ))}
            </tbody>
        </table>}
        </>
    );
};

export { Profile };