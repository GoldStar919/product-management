import React from 'react';
import { Header, Footer } from '../../components';
import Router from 'next/router';

const Products = () => {
  
  const videoURL = "novideo.mp4";

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <Header />
          <h1 className="text-center text-4xl font-normal p-4">Products Page</h1>
          <div className="block p-8 m-auto">
            <h1 className="text-1xl w-3/4 m-auto text-center">The cyber-physical factory implemented at the University of Derby has been designed to assemble products of the same product family with a choice of different colours for the casing and a choice of a single or double fuse in the PCB.</h1>
            <h1 className="text-2xl w-2/5 m-auto pt-8 text-center">Optional Case Colours</h1>
            <div className='w-full h-40 m-auto'>
              <div className='m-auto h-full'>
                <img src="/assets/products.png" className='m-auto h-full'/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
