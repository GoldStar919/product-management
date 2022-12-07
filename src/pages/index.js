import React from 'react';
import { useSelector } from 'react-redux';

import Home from './main_pages/Home';

const Main = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
    <div className="w-full">
      <div className="mainbody">
        <div className="text-center">
          <Home />
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
