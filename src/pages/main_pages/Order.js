import React from 'react';
import { Header, Footer, BasicSelect } from '../../components';
import { Button } from '@material-ui/core';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';


function order () {
  try {
    Router.push('/main_pages/ConfirmOrder');
  } catch (error) {
    console.log('Order Error', error);
  }
};

const Order = () => {

  const user = useSelector((state) => state.auth.user);
  
  const colourOptions = ["Black", "Blue", "Gray", "Red"];
  const fuseOptions = ["1", "2"];
  const quantityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const handleClick = () => {
    order();
  }

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <Header />
          {user !== null && (
            <>
              <h1 className="text-center text-4xl font-normal p-4">Welcome to Order!</h1>
              <div className="block flex gap-4 align-center">
                <div className="m-auto">
                  <div className='mb-2'>
                    <h1 className="text-2xl">Please select the properties you would like for your order.</h1>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-full text-center m-auto'>
                      <h3>Select Colour : </h3>
                    </div>
                    <div className='w-full text-center m-auto'>
                      <BasicSelect title='Colour' options={colourOptions} />
                    </div>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-full text-center m-auto'>
                      <h3>Number of fuses required : </h3>
                    </div>
                    <div className='w-full text-center m-auto'>
                      <BasicSelect title='Fuses' options={fuseOptions} />
                    </div>
                  </div>
                  <div className="block flex gap-1 w-full m-auto p-2">
                    <div className='w-full text-center m-auto'>
                      <h3>Quantity required : </h3>
                    </div>
                    <div className='w-full text-center m-auto'>
                      <BasicSelect title='Quantity' options={quantityOptions} />
                    </div>
                  </div>
                  <div className="w-full text-center">
                    <Button variant="contained" onClick={handleClick()}>Confirm Order</Button>
                  </div>
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

export default Order;
