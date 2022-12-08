import React from 'react';
import { Header, Footer } from '../../components';
import Router from 'next/router';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const ConfirmOrder = (props) => {

  const {color = "black", fuse = 1, quantity = 1} = props;
  
  const user = useSelector((state) => state.auth.user);

  const submitHandler = (e) => {
    const { id } = e.nativeEvent.submitter;

    switch (id) {
      case "back":
        return handlesubmit_back(e);

      case "order":
        return handlesubmit_order(e);

      default:
      // ignore
    }
  };

  function handlesubmit_back(event) {
    event.preventDefault();
    const { value : color } = event.target.color;
    const { value : fuse } = event.target.fuse;
    const { value : quantity } = event.target.quantity;
    console.log("back", color, fuse, quantity);
  }
  
  function handlesubmit_order(event) {
    event.preventDefault();
    const { value : color } = event.target.color;
    const { value : fuse } = event.target.fuse;
    const { value : quantity } = event.target.quantity;
    console.log("order", color, fuse, quantity);
  }

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <Header />
          {user !== null && (
            <>
              <h1 className="text-center text-4xl font-normal p-4">Welcome to Order!</h1>
              <div className="block flex gap-4 align-center" onSubmit={submitHandler}>
                <form className="sm:w-3/4 md:w-1/2 xl:w-1/2 mx-auto">
                  <div className="md:w-3/4 w-full m-auto">
                    <div className='mb-2'>
                      <h1 className="text-2xl text-center">Confirmation of Order.</h1>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full text-center m-auto'>
                        <h3>Select Colour : </h3>
                      </div>
                      <div className='w-full text-center m-auto'>
                        <input value={color} name="color" className="area-disabled text-center" />
                      </div>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full text-center m-auto'>
                        <h3>Number of fuses required : </h3>
                      </div>
                      <div className='w-full text-center m-auto'>
                        <input value={fuse} name="fuse" className="area-disabled text-center" />
                      </div>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full text-center m-auto'>
                        <h3>Quantity required : </h3>
                      </div>
                      <div className='w-full text-center m-auto'>
                        <input value={quantity} name="quantity" className="area-disabled text-center" />
                      </div>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full text-center m-auto'>
                        <h3>SKU = CASE2 - BLUE</h3>
                      </div>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full md:1/2 m-auto text-center'>
                        <Button
                          className="btn btn-secondary w-1/2"
                          type="submit"
                          id="back"
                        >
                          Back
                        </Button>
                      </div>
                      <div className='w-full md:1/2 m-auto text-left'>
                        <Button
                          className="btn btn-secondary w-1/2"
                          type="submit"
                          id="order"
                        >
                          Order
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className='md:w:1/2 lg:w-1/3 w-1/2 m-auto float-left'>
                  <img src="/assets/blue.png" className='m-auto h-full'/>
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
