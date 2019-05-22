import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay/SeasonDisplay';
import Loader from './Loader/Loader';
import useLocation from './useLocation/useLocation';


const App = () => {
  const [latitude, errorMessage] = useLocation();


  let content;
  if(errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if(latitude) {
    content = <SeasonDisplay latitude={latitude} />
  } else {
    content = <Loader message = 'Please accept location request'/>
  }


  return <div className="border red">{content}</div>
}


ReactDOM.render (
  <App />,
  document.getElementById('root')
);
