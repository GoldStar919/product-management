import React from 'react';
import Video from '../../components/s_components/video';
import { Header, Footer } from '../../components';
import Router from 'next/router';

const Home = () => {
  
  const videoURL = "novideo.mp4";

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <Header />
          <h1 className="text-center text-4xl font-normal p-4">Home Page.</h1>
          <div className="block md:flex gap-4 p-8 m-auto">
            <div className="block gap-4 md:w-3/5 md:shrink lg:w-2/3 m-auto">
              <div className=''>
                <h1 className="text-2xl">To order your bespoke product click the order button, log in and select the options you would like.</h1>
                <h1 className="text-2xl">The video to the right shows how you order becomes a reality through the use of the Cyber Physical Factory set up at the University of Derby</h1>
              </div>
            </div>
            <div className='w-full border-0 border-zinc-600 md:w-2/5 lg:w-1/3 sm:mt-2'>
              <div className="w-full mb-5">
                <Video urlprop={videoURL} controls={true} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
