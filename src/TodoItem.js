import React, {Component} from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDeleteContent = this.handleDeleteContent.bind(this);
    };
    handleDeleteContent() {
        const { deleteItem , index} = this.props
        deleteItem(index);
    };
    shouldComponentUpdate (nextProps,nextState) {
        if(nextProps.content !== this.props.content){
            return true;
        }else {
           return false;
        }
    }
    render () {
        console.log("child render ");
        const { content } = this.props;
        return (
            <div onClick={this.handleDeleteContent}>
                {content}
            </div>
        )
    }
};
export default TodoItem;