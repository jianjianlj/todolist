import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';
import { Provider } from 'react-redux'
import store from './store/index.js';

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));