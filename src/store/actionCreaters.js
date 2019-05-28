import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_TODO_LIST,GET_INIT_LIST } from './actionTypes'
import axios from 'axios';
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getBtnClickAction = () => ({
    type: ADD_TODO_ITEM,
});

export const getItemDeleteAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const getInitListAction = (list) => ({
    type: INIT_TODO_LIST,
    list
})
export const getInitList = () => ({
    type: GET_INIT_LIST
})
export const getAxiosData = () => {
    return (dispatch) => {
        axios.get(' https://www.easy-mock.com/mock/5cea9ca7f164c93712b29193/list.json').then((res) => {
            const list = res.data.data.list;
            const action = getInitListAction(list);
            dispatch(action);
        })
    }
}