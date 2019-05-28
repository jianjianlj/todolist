import { INPUT_AHANGE_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionType.js'

export const getInputChangeAction = (inputValue) => ({
    type: INPUT_AHANGE_VALUE,
    inputValue: inputValue
});

export const addListItemAction = () => ({
    type: ADD_LIST_ITEM,
});

export const deleteListItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
});