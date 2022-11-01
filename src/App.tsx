import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import useInterval from './hooks/useInterval';
import { Bacterium } from './components'

const App = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasX = 1920;
  const canvasY = 1080;

  useInterval(() => StartEvolution, 100)

  const StartEvolution = () => {

  }

  return (
    <>
      <canvas
        className="EvolutionArea"
        ref={canvasRef}
        width={`${canvasX}px`}
        height={`${canvasY}px`}
        >
          
      </canvas>
      <Bacterium/>
    </>
  );
}

export default App;
