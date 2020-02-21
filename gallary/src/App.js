import React from 'react';
import Gallary from './components/Gallary';
import PixelManipulation from './components/PixelManipulation';
import ReactCropperDemo from './components/ReactCropperDemo';

function App() {
  return (
    <div className="container-fluid">
        <Gallary/>

        <ReactCropperDemo/>
        
    </div>
  );
}

export default App;
