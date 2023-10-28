import React from "react";
import "sanitize.css";
import "./styles.scss";
import InputRange from "react-input-range";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Courses.module.css";

const useStyles = makeStyles(
  {
    track: {
      color: "#198643",
      height: "3px",
      borderRadius: "3px",
    },
    rail: {
      opacity: 1,
      backgroundColor: "#e6e9ea",
      height: "3px",
      borderRadius: "3px",
    },
    thumb: {
      color: "white",
      width: "1rem",
      height: "1rem",
      marginTop: "-6px",
      border: "2px solid #198643",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.09)",
      "&$focusVisible,&:hover": {
        boxShadow: "0 0 0 8px #198643",
      },
      "&$active": {
        boxShadow: "0 0 0 14px #198643",
      },
    },
    // don't remove the following lines
    focusVisible: {},
    active: {},
  },
  { name: "MuiSlider" }
);

const FilterRange = () => {
  const [val2, setVal2] = React.useState([0, 100]);

  const classes = useStyles();

  return (
    <div
      className={` App mt-8 ${styles.filterRange} rounded-lg px-5 text-[#323E73]`}
    >
      <h1 className="text-right font-extrabold text-lg w-full">محدوده قیمت</h1>

      <div className="w-full">
        <div>
          <Slider
            className=""
            //disabled
            classes={classes}
            step={5}
            min={0}
            max={100}
            value={val2}
            onChange={(ev, v) => setVal2(v)}
            onChangeCommitted={(ev, v) => console.log(v)}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1rem 0",
            fontWeight: 500,
            color: "#198643",
          }}
        >
          <div>{`تومان ${val2[1]}`}</div>
          <div>{`تومان ${val2[0]}`}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterRange;
