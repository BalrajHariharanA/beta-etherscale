import React from 'react'

const useViewport = () => {
    const [width, setWidth] = React.useState(0);
    // Add a second state variable "height" and default it to the current window height
    const [height, setHeight] = React.useState(0);
  
    React.useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window?.innerWidth);
        // Set the height in state as well as the width
        setHeight(window?.innerHeight);
      }
      handleWindowResize()
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return both the height and width
    return { width, height };
  }
  export default useViewport;