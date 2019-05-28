import { GET_INIT_LIST } from './actionTypes' ;
import {  put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { getInitListAction } from './actionCreaters';

function* getInitList() {
     const res = yield axios.get(' https://www.easy-mock.com/mock/5cea9ca7f164c93712b29193/list.json');
    const list = res.data.data.list;
    const action = getInitListAction(list);
    yield put(action);
}

function* saga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default saga;