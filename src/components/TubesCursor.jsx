import React, { useEffect, useRef } from "react";
// Import from the local lib file we are creating
import tubesCursorLib from '../lib/tubes-cursor.js';

const TubesCursor = ({
  initialColors = ["#f967fb", "#53bc28", "#6958d5"],
  lightColors = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
  lightIntensity = 200,
  enableRandomizeOnClick = true,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    let removeClick = null;
    let destroyed = false;

    // Use the imported library function
    // The library likely exports a default function or attaches to window/module
    // Since we are downloading a minified file that might be a UMD/CommonJS module, 
    // we need to handle how it's imported. 
    // The file content starts with "/** @license ... */" and minified code.
    // If it's a standard module, 'tubesCursorLib' should be the constructor.
    
    // NOTE: Because we are importing a minified file directly in Vite, it might behave differently 
    // than a dynamic import. We will try to use it as the constructor.
    // If the library attaches to window, we might need to access it globally.
    
    if (!canvasRef.current || destroyed) return;

    // We assume tubesCursorLib is the function, or has a .default
    const TubesCursorCtor = tubesCursorLib.default || tubesCursorLib;

    try {
        const app = TubesCursorCtor(canvasRef.current, {
            tubes: {
              colors: initialColors,
              lights: {
                intensity: lightIntensity,
                colors: lightColors,
              },
            },
          });
    
          appRef.current = app;
    
          if (enableRandomizeOnClick) {
            const handler = () => {
              const colors = randomColors(initialColors.length);
              const lights = randomColors(lightColors.length);
              app.tubes.setColors(colors);
              app.tubes.setLightsColors(lights);
            };
            document.body.addEventListener("click", handler);
            removeClick = () =>
              document.body.removeEventListener("click", handler);
          }
    } catch (e) {
        console.error("Failed to initialize TubesCursor:", e);
    }

    return () => {
      destroyed = true;
      if (removeClick) removeClick();
      try {
        if (appRef.current && typeof appRef.current.dispose === 'function') {
            appRef.current.dispose();
        }
        appRef.current = null;
      } catch (e) {
        // ignore
      }
    };
  }, [initialColors, lightColors, lightIntensity, enableRandomizeOnClick]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden',
    }} className={className}>
      <canvas ref={canvasRef} style={{
        display: 'block',
        width: '100%',
        height: '100%',
      }} />
    </div>
  );
};

function randomColors(count) {
  return new Array(count).fill(0).map(
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );
}

export default TubesCursor;
