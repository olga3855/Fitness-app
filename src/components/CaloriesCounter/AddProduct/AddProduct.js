import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { addTodo } from '../../../store/actions/loginActions'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import TableCalories from '../TableCalories/TableCalories';

const AddProduct = () => {
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState({

    description: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",

  });

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { name, value } }) => {
    setTitle(title => ({ ...title, [name]: value }));
  }

  const addProduct = () => {
    const obj = {
      "description": (title.description !== "") ? title.description : "(no description)",
      "calories": Number.parseInt(title.calories),
      "fat": Number.parseInt(title.fat),
      "carbs": Number.parseInt(title.carbs),
      "protein": Number.parseInt(title.protein),
    }
    dispatch(addTodo(obj));
    setClick(true);
  }

  return (<>
    <tr>
      <td></td>
      <td><S.Input
        value={title.description}
        onChange={handleInputChange}
        className="input"
        placeholder="Description"
        name="description"
        type="text" /></td>

      <td><S.Input value={title.calories}
        onChange={handleInputChange}
        className="input"
        placeholder="Calories"
        name="calories"
        type="number"
        min="0" /></td>

      <td><S.Input
        value={title.fat}
        onChange={handleInputChange}
        className="input"
        placeholder="Fat"
        name="fat"
        type="number"
        min="0" /></td>

      <td><S.Input
        value={title.carbs}
        onChange={handleInputChange}
        className="input"
        placeholder="Carbs"
        name="carbs"
        type="number"
        min="0" /></td>

      <td><S.Input
        value={title.protein}
        onChange={handleInputChange}
        className="input"
        placeholder="Protein"
        name="protein"
        type="number"
        min="0" /></td>

      <td><S.Button onClick={addProduct} variant="outline-secondary">Add</S.Button></td>
    </tr>
    {click && <TableCalories />}
  </>
  );
}

const S = {
  Input: styled.input`
  background-color: transparent;
  border: 0px;

  &::placeholder {
    color: white;
  }

  `,
  Button: styled(Button)`
  border: 1px white solid;
  border-radius: 360px;
  color: white;
  width: 5rem;
  transition: 300ms;
  background-color: transparent;
  
&:hover {
  color: black;
  background-color: white;
}
  `,
}

export default AddProduct;