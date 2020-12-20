import React, { useState, useReducer, useEffect } from "react";
import Calories from '../Calories';

const CaloriesContainer = (props) => {
  const [weightPlaceholder, setWeightPlaceHolder] = useState("");

  const [isValid, setIsValid] = useState(false);

  const [heightPlaceholder, setHeightPlaceHolder] = useState("");

  const [selectValue, setSelectValue] = useState("select");

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      age: "",
      weight: "",
      height: "",
      sex: "",
      unit: "us",
      activity: "select",
    }
  );

  useEffect(() => {
    const validate = () => {
      if (
        !userInput.age ||
        !userInput.weight ||
        !userInput.height ||
        userInput.activity === "select" 
      ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    };
    validate();
  }, [userInput]);

  const changePlaceHolders = ({target}) => {
    if (target.value === "metric") {
      setHeightPlaceHolder("Centimeters");
      setWeightPlaceHolder("Kilograms");
    } else {
      setHeightPlaceHolder("Inches");
      setWeightPlaceHolder("Pounds");
    }
  };

  const handleChange = ({target}) => {
    const name = target.name;
    const value = target.value;
    if (name === "unit") {
      changePlaceHolders({target});
    } else if (name === "activity") {
      setSelectValue(value);
    }
    setUserInput({ [name]: value });
  };

  const handleClick = () => {
    props.onClick(userInput);
  };

  return (
    <Calories
      onChange={handleChange}
      onClick={handleClick}
      isValid={isValid}
      select={selectValue}
      weightPlaceholder={weightPlaceholder}
      heightPlaceholder={heightPlaceholder}
    />
  );
}

export default CaloriesContainer;