import React, { useState } from 'react';
import { Header, Footer, BasicSelect, Button } from '../../components';
// import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

const Order = () => {
  
  const user = useSelector((state) => state.auth.user);
  
  const colourOptions = ["Black", "Blue", "Gray", "Red"];
  const fuseOptions = ["1", "2"];
  const quantityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }
  
  const [colorValue, setColor] = useState(colourOptions[0]);
  const [fuseValue, setFuses] = useState(fuseOptions[0]);
  const [quantityValue, setQuantity] = useState(quantityOptions[0]);

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <Header />
          {user !== null && (
            <>
              <h1 className="text-center text-4xl font-normal p-4">Welcome to Order!</h1>
              <div className="block flex gap-4 align-center">
                <form className="sm:w-3/4 md:w-1/2 xl:w-1/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                  <div className="m-auto">
                    <div className='mb-2'>
                      <h1 className="text-2xl">Please select the properties you would like for your order.</h1>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full text-center m-auto'>
                        <h3>Select Colour : </h3>
                      </div>
                      <div className='w-full text-center m-auto'>
                        <BasicSelect title='Colour' options={colourOptions} value={colorValue} onSelected = {setColor} name="color" register={register} />
                      </div>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full text-center m-auto'>
                        <h3>Number of fuses required : </h3>
                      </div>
                      <div className='w-full text-center m-auto'>
                        <BasicSelect title='Fuses' options={fuseOptions} value={fuseValue} onSelected = {setFuses} name="fuse" register={register} />
                      </div>
                    </div>
                    <div className="block flex gap-1 w-full m-auto p-2">
                      <div className='w-full text-center m-auto'>
                        <h3>Quantity required : </h3>
                      </div>
                      <div className='w-full text-center m-auto'>
                        <BasicSelect title='Quantity' options={quantityOptions} value={quantityValue} onSelected = {setQuantity} name="quantity" register={register} />
                      </div>
                    </div>
                    <div className="w-full text-center">
                      <Button
                        className="btn btn-secondary w-1/2"
                        type="submit"
                      >
                        Confirm Order
                      </Button>
                    </div>
                  </div>
                </form>
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
