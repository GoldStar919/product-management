import React from 'react';
import { Button, BasicSelect } from '../../components';
import Router from 'next/router';

const Order = () => {
  
  const colourOptions = ["Black", "Blue", "Gray", "Red"];
  const fuseOptions = ["1", "2"];
  const quantityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
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
              <div className="w-1/2 m-auto">
                <Button
                  className="btn btn-secondary"
                  type="submit"
                >Confirm Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
