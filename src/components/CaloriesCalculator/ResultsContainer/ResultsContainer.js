import React, { useState, useReducer, useEffect } from "react";
import Results from "../Results";

const ResultsContainer = (props) => {
  const [select, setSelect] = useState("maintain");
  const [goalProPer, setProPer] = useState(0.8);
  const [goalFatPer, setFatPer] = useState(0.45);
  const [calculations, setCalculations] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      calories: "",
      carbs: "",
      protein: "",
      fats: "",
    }
  );

  useEffect(() => {
    const changeState = (userInput) => {
      let kg;
      let cm;

      // уровни активности
      const activityLevels = {
        sedentary: 1,
        light: 1.12,
        moderate: 1.15,
        active: 1.2,
        veryActive: 1.3,
      };

      // переводим кг в фунты, см в дюймы
      const precisionNumber = Number(userInput.height)
        .toPrecision(2)
        .toString();
      userInput.unit === "metric"
        ? (kg = Number(userInput.weight))
        : (kg = Number(userInput.weight) / 2.2);
      userInput.unit === "metric"
        ? (cm = Number(userInput.height))
        : (cm =
          Number(precisionNumber[0]) * 30 + Number(precisionNumber[2]) * 2);

      let calories;
      let carbs;
      let protein;
      let fats;

      calories =
        864 -
        9.72 * Number(userInput.age) +
        activityLevels[userInput.activity] * (kg * 13 + 450 * (cm / 100));

      if (userInput.sex === "female") {
        calories =
          387 -
          7.31 * userInput.age +
          activityLevels[userInput.activity] * (10 * kg + 600 * (cm / 100));
      }
      if (select === "gain") {
        calories += 450;
      } else if (select === "lose") {
        calories -= 300;
      }

      protein = kg * 2.2 * goalProPer;
      fats = kg * 2.2 * goalFatPer;
      carbs = (calories - 300 - (protein * 4 + fats * 9)) / 4;

      setCalculations({
        calories: Math.floor(calories),
        carbs: Math.floor(carbs),
        protein: Math.floor(protein),
        fats: Math.floor(fats),
      });
    };
    changeState(props.userInput);
  }, [select, props.userInput, goalFatPer, goalProPer]);

  const handleChange = ({target}) => {
    const goal = target.value;
    const ProFatPer = {
      maintain: { protein: 0.73, fats: 0.45 },
      lose: { protein: 0.95, fats: 0.4 },
      gain: { protein: 0.83, fats: 0.35 },
    };
    setProPer(ProFatPer[goal].protein);
    setFatPer(ProFatPer[goal].fats);
    setSelect(goal);
  };

  return (
    <Results
      onChange={handleChange}
      selected={select}
      calculations={calculations}
    />
  );
}

export default ResultsContainer;