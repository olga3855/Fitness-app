import React from 'react';
import { useSelector } from 'react-redux';

const TotalCount = () => {
    
    const todos = useSelector(state => state.nutritionReducer.todos);

        const a={
            "calories":0,
            "fat":0,
            "carbs": 0,
            "protein":0,
        }
        
      todos.forEach((item) => {
              a["calories"] = Number.parseInt(a["calories"] + item["calories"]);
              a["fat"] = Number.parseInt(a["fat"] + item["fat"]);
              a["carbs"] = Number.parseInt(a["carbs"] + item["carbs"]);
              a["protein"] = Number.parseInt(a["protein"] + item["protein"]);
          });
        return (<>
                    <tr> 
                        <td></td>
                        <td align="right">TOTAL:</td>
                        <td>{a["calories"]}</td>
                        <td>{a["fat"]}</td>
                        <td>{a["carbs"]}</td>
                        <td>{a["protein"]}</td>
                        <td></td>
                   </tr>
             </>
        );
    }

export default TotalCount;
