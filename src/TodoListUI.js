import React from 'react';
import { Input, Button,List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{marginTop: "10px"}}>
                <div>
                    <Input 
                        value={props.inputValue}
                        placeholder="todoList" style={{width: "300px", marginRight: "10px",marginLeft: "10px"}}
                        onChange={props.handleInputChange}
                    />
                    <Button type="primary" onClick={props.handleBtnClick}>新增</Button>
                </div>
                <List
                    style={{width: "300px",marginLeft: "10px"}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={() => (props.handleItemDelete(index))}>{item}</List.Item>
                    )}
                />
            </div>
    )
}

export default TodoListUI;