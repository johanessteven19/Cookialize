import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "@fontsource/open-sans";

function Clock() {
  const [clockState, setClockState] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleDateString("en-GB"));
    }, 1000);
  }, []);

  return <Typography fontFamily="Open Sans">Brisbane, {clockState}</Typography>;
}
export default Clock;