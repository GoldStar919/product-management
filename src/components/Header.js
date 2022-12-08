import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from '../reducers/AuthReducer';

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const logout = () => {
    Router.push('/login');
    dispatch(AuthActions.logout());
  };

  return (
    <div className="header bg-lime-400 w-full min-h-min border border-solid border-4 border-blue">
      <div className="w-full">
        <div className="block md:flex gap-4 px-3 py-1">
          <div className="block gap-4 md:w-3/5 md:shrink lg:w-2/3 text-left my-4">
            <Link href="/">
              <h1 className="text-3xl">UoD SmartFactory Web Portal</h1>
            </Link>
          </div>
          <div className="w-full border-0 border-zinc-600 md:w-2/5 lg:w-1/3 sm:mt-2 text-right my-4 relative">
            <ul className="block flex gap-2 absolute bottom-0 right-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/main_pages/Products">Products</Link>
              </li>
              {user === null && (
                <>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/signup">Signup</Link>
                  </li>
                </>
              )}
              {user !== null && (
                <>
                  <li>
                    <Link href="/main_pages/Order">Order</Link>
                  </li>
                  <li>
                    <a onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
