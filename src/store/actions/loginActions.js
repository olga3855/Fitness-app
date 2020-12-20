// import {db} from '../../firebase/firebase';

import { LOGIN_IN } from '../../constants/actions';
import { LOGIN_OUT } from '../../constants/actions';

import { ADD_PRODUCT } from '../../constants/actions';
import { EDIT_PRODUCT } from '../../constants/actions';
import { DELETE_PRODUCT } from '../../constants/actions';

// import { DATA_FROM_SEVER } from '../../constants/actions';

export const loginIn = () => ({ type: LOGIN_IN });
export const loginOut = () => ({ type: LOGIN_OUT });

export const addTodo = obj => ({ type: ADD_PRODUCT, payload: obj });
export const editTodo = (id, property, value) => ({ type: EDIT_PRODUCT, payload: { id, property, value } });
export const deleteTodo = id => ({ type: DELETE_PRODUCT, payload: id });

// export const dataFromServer = () => {
//     return (dispatch) => {
//         db.ref('products')
//             .once('value')
//             .then(snapshot => {
//                 snapshot.forEach(childSnapshot => {
//                     dispatch({ type: DATA_FROM_SEVER, payload: childSnapshot.val() })
//                 })
//             })
//     }
// }