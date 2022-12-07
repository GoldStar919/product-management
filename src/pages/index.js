import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Order from './main_pages/ConfirmOrder';
import Home from './main_pages/Home';
import Products from './main_pages/Products';

const Main = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
    <div className="w-full">
      <div className="mainbody">
        <Header />
        <div className="text-center pt-24">
          {!user ? (
            <Home />
          ) : (
            <Products />
          )}
        </div>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Main;
