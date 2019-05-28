import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index.js';
import { getInitList, getInputChangeAction, getBtnClickAction,getItemDeleteAction }  from './store/actionCreaters';
import TodoListUI from './TodoListUI.js';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleChangeState);
    }
   
    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    };
    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
    }

    handleInputChange (e) {
        const action = getInputChangeAction(e.target.value); 
        store.dispatch(action);
    };
    handleChangeState() {
        this.setState(store.getState);
    };
    handleBtnClick() {
        const action = getBtnClickAction();
        store.dispatch(action);
    };
    handleItemDelete(index) {
        const action = getItemDeleteAction(index);
        store.dispatch(action);
    }
}

export default TodoList