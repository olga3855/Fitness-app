import React from 'react';
import { deleteTodo, editTodo } from '../../../store/actions/loginActions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const TableCalories = () => {
    const todos = useSelector(state => state.nutritionReducer.todos);

    const dispatch = useDispatch();

    const handleInputChange = (a, b, c) => {
        dispatch(editTodo(a, b, (b === "description") ? c : Number.parseInt(c)));
    }

    const onDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (<>
        {todos.map((number, index) => {
       return ( 
       <tr key={index} className="table" >
                <td>{index + 1}</td>
                <td><S.Input
                    value={number.description || ''}
                    className="input"
                    onChange={({target}) => handleInputChange(number.id, "description", target.value)}
                    name="description"
                    min="0"
                    type="text" /></td>

                <td><S.Input
                    value={number.calories || ''}
                    className="input"
                    onChange={({target}) => handleInputChange(number.id, "calories", target.value)}
                    name="calories"
                    min="0"
                    type="number" /></td>

                <td><S.Input
                    value={number.fat || ''}
                    className="input"
                    onChange={({target}) => handleInputChange(number.id, "fat", target.value)}
                    name="fat"
                    min="0"
                    type="number" /></td>

                <td><S.Input
                    value={number.carbs || ''}
                    className="input"
                    onChange={({target}) => handleInputChange(number.id, "carbs", target.value)}
                    name="carbs"
                    min="0"
                    type="number" /></td>

                <td><S.Input
                    value={number.protein || ''}
                    className="input"
                    onChange={({target}) => handleInputChange(number.id, "protein", target.value)}
                    name="protein"
                    min="0"
                    type="number" /></td>

                <td><S.Button variant="danger" onClick={() => onDelete(number.id)}  >Delete</S.Button></td>
            </tr>
         ) 
        } )}

    </>);
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
  
export default TableCalories;