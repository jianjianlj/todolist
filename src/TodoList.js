import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, addListItemAction, deleteListItemAction } from './store/actionCreators.js'

class TodoList extends Component {
    render() { 
        const { inputValue, changeInputValue, list, handleDeleteItem} = this.props;
        return(
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    <button onClick={this.props.handleBtnClick}>提交</button>
                 </div>
                 <ul>
                     {
                        list.map((item,index) => {
                            return (
                                <li key={index} onClick={() => (handleDeleteItem(index))}>
                                    {item}
                                </li>
                            )
                        })
                     }
                     
                 </ul>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleBtnClick() {
            const action = addListItemAction();
            dispatch(action);
        },
        handleDeleteItem (index) {
            const action = deleteListItemAction(index);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);