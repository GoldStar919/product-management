import React from 'react';

const Footer = () => {
  return (
    <div className="bg-lime-400 w-full h-16">
      <div className="w-full">
        <div className='block md:flex gap-4 px-3 py-1'>
          <div className='block w-1/2 md:shrink'>
            <span className='float-left'>
              ©2022{' '}
              <a
                // href="https://mernjs.github.io/create-mern-app"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                #a------------------a#
              </a>
            </span>
          </div>
          <div className='block w-1/2 md:shrink'>
            <span className='float-right'>
              <b>By:</b>{' '}
              <a
                // href="https://vijay-pratap-singh.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Joy.Danniel1998@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
