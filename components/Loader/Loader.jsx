import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div className="centered">
      <CircularProgress />
    </div>
  );
}

export default Loader;
