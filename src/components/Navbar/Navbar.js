/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/users/usersAction';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { API_URL } from '../../Global-Constant/globalConstant';


const Navbar = props => {
  const state = useSelector(state => state.userLogin);

  const history = useHistory();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push(`${API_URL}/`);
  };

  const { userInfo, loading, error } = state;
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          <LibraryBooksIcon color='error' /> BooKkeeping Application
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item '>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            {!userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    Library
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addbook'>
                    Add book
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/book-library'>
                    Books
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/profile'>
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    onClick={logoutHandler}
                    className='nav-link'
                    to='/login'>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='text'
            placeholder='Search'
          />
          <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export { Navbar };