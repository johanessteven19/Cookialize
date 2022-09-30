import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import "@fontsource/open-sans";

function Clock() {
     const[clockState, setClockState] = useState();

     useEffect(() => {
          setInterval(() => {
               const date = new Date();
               setClockState(date.toLocaleTimeString());
          }, 1000);
     }, []);

     return (<Typography fontFamily='Open Sans'>{clockState}</Typography>);
}
export default Clock;