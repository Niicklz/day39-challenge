import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import "./styles.css";

export const App = () => {
  const [length, setLength] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setLength(value.length * 2);
    }

    setValue(value);
  };

  useEffect(() => {
    console.log(length);
  }, [length]);

  return (
    <>
      <div
        className="background"
        style={{ filter: `blur(${20 - length}px)` }}
      ></div>
      <div className="container">
        <form action="">
          <legend>Image Password Strength</legend>
          <p>Change the Password to see effect</p>
          <TextField
            label="Email"
            placeholder="Enter Email"
            margin="normal"
            fullWidth
          />
          <TextField
            type="password"
            label="Password"
            placeholder="Enter Password"
            margin="normal"
            onChange={handleChange}
            fullWidth
            value={value}
          />
          <Button variant="contained" fullWidth className="botoncito">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
