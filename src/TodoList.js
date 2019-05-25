import React, { Component ,Fragment} from 'react';
import TodoItem from './TodoItem.js';
import axios from 'axios';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    };
    handleInputChange () {
        const value = this.input.value
        this.setState ( () => ({ //react中的新语法，setState中可以接收一个函数
            inputValue: value
        }))
    };
    handleBtnClick () {
        this.setState((prevState) => ({ //prevState就是保存state更改前的数据
            list: [...prevState.list,prevState.inputValue],
            inputValue: ''
        }))
    };
    handleItemClick (index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list};//return {list:list}
        })
    };
    getItem () {
      return this.state.list.map((item,index) => {
            return (
                 <TodoItem 
                    key={index}
                    content={item} 
                    index={index} 
                    deleteItem={this.handleItemClick}
                 />
            )
        })
    };
    componentDidMount() {
        axios.get("./api/todolist")
            .then((res) => {
                this.setState(() => ({
                    list: [...res.data]
                }));
            })
            .catch(() => {
                console.log("error");
            })
    }
    render () {
        return (
            <Fragment>
                <div>
                    {/*在关联label和input输入框的时候，用Htmlfor 不是for */}
                    <label htmlFor="insert">输入用户名</label>
                    <input 
                        id="insert"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input)=>{this.input=input}}
                     />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                   { this.getItem() }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;

