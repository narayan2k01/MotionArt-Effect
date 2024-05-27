// App.js

import "./styles.css";
import { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';
import Home from "./components/home/home";

export default function App() {
  const canvas = useRef(null);

  useEffect(function () {
    let c = canvas.current;
    Fluid(c);
  }, []);

  return (
    <div className="App">
      <canvas 
        ref={canvas} 
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%"
        }}
      ></canvas>
      <Home />
    </div>
  );
}
