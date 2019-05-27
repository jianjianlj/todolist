import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_TODO_LIST } from './actionTypes'

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