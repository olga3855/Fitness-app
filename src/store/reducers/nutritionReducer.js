import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  // DATA_FROM_SEVER
} from '../../constants/actions';

let nextTodoId = 1

const initialState = {
  todos: [{
    id: nextTodoId++,
    description: '',
    calories: null,
    fat: null,
    carbs: null,
    protein: null,
    property: null,
    value: null,
  }]
}


const nutritionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            description: action.payload.description,
            calories: action.payload.calories,
            fat: action.payload.fat,
            carbs: action.payload.carbs,
            protein: action.payload.protein
          }
        ]
      }

    case EDIT_PRODUCT:
      return {
        ...state,
        todos: state.todos.map(product => product.id === action.payload.id
          ? { ...product, [action.payload.property]: action.payload.value }
          : product)
      }

    case DELETE_PRODUCT:
      return {
        ...state,
        todos: state.todos.filter(product => product.id === action.id ? false : true)
      }
    // case DATA_FROM_SEVER:
    //   return {
    //     ...state,
    //     todos: action.payload
    //   }
    default:
      return state
  }
}

export default nutritionReducer;