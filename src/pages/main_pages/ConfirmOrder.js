import React from 'react';
import { Header, Footer } from '../../components';
import Router from 'next/router';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const ConfirmOrder = () => {
  
  const handleBackOrder = async () => {
    try {
      // Router.push('/main_pages/Order');
      // const response = await apiRequest.post(`auth/signup`, payload);
    } catch (error) {
      console.log('Order Error', error);
    }
  };

  const handleConfirm = async () => {
    try {
      // Router.push('/main_pages/ConfirmOrder');
      // const response = await apiRequest.post(`auth/signup`, payload);
    } catch (error) {
      console.log('Order Error', error);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <Header />
          {user !== null && (
            <>
              <h1 className="text-center text-4xl font-normal p-4">Welcome to Order!</h1>
              <div className="block flex gap-4 align-center">
                <div className="md:w:1/2 lg:w-1/3 w-1/2 m-auto float-right">
                  <div className='mb-2'>
                    <h1 className="text-2xl">Confirmation of Order.</h1>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-full text-center m-auto'>
                      <h3>Select Colour : </h3>
                    </div>
                    <div className='w-full text-center m-auto'>
                      <h3>Black</h3>
                    </div>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-full text-center m-auto'>
                      <h3>Number of fuses required : </h3>
                    </div>
                    <div className='w-full text-center m-auto'>
                      <h3>2</h3>
                    </div>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-full text-center m-auto'>
                      <h3>Quantity required : </h3>
                    </div>
                    <div className='w-full text-center m-auto'>
                      <h3>10</h3>
                    </div>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-full text-center m-auto'>
                      <h3>SKU = CASE2 - BLUE</h3>
                    </div>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-1/2 md:1/2 m-auto'>
                    <Button variant="contained" onClick={handleBackOrder()}>Back</Button>
                    </div>
                    <div className='w-1/2 xl:1/4 m-auto'>
                    <Button variant="contained" onClick={handleConfirm()}>Order</Button>
                    </div>
                  </div>
                </div>
                <div className='md:w:1/2 lg:w-1/3 w-1/2 m-auto float-left'>
                  <img src="./_next/static/blue.png" className='m-auto h-full'/>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ConfirmOrder;
