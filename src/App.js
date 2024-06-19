import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="main">
        {process.env.NODE_ENV === "development"
          ? "Running in development mode"
          : "Running in production mode"}
      </div>
      <div>{process.env.API}</div>
      <div>{console.log(process.env.API)}</div>
      <div>{process.env.REACT_APP_MODE}</div>
      {/* <div>{console.log(process.env.REACT_APP_MODE)}</div> */}
      {/* <div>{console.log(process)}</div> */}
    </>
  );
}
