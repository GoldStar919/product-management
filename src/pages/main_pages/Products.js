import React from 'react';
import Router from 'next/router';

const Products = () => {
  
  const videoURL = "novideo.mp4";

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <h1 className="text-center text-4xl font-normal p-4">Products Page</h1>
          <div className="block p-8 m-auto">
            <h1 className="text-1xl w-3/4 m-auto">The cyber-physical factory implemented at the University of Derby has been designed to assemble products of the same product family with a choice of different colours for the casing and a choice of a single or double fuse in the PCB.</h1>
            <h1 className="text-2xl w-2/5 m-auto pt-8">Optional Case Colours</h1>
            <div className='w-full m-auto'>
              <div className='md:w:1/2 lg:w-1/3 w-3/4 m-auto'>
                <img src="./products.png" className='m-auto h-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
