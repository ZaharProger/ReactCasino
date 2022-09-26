import React from "react";

import SpinBarWrap from './spinbar/SpinBarWrap';
import '../styles/body.css';
import '../styles/media.css';

const App = () => {
  return (  
    <div id="App" className="d-flex align-items-center justify-content-center">
      <SpinBarWrap />
    </div>
  )
}

export default App;