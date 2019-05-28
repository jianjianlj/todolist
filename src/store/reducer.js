import { INPUT_AHANGE_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM } from './actionType.js'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state=defaultState,action) => {
    if(action.type === INPUT_AHANGE_VALUE ) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    };
    if(action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    };
    if(action.type === DELETE_LIST_ITEM ) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state
}