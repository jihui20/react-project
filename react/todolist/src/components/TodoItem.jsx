import React from 'react';
import './TodoItem.css'

const TodoItem = ({todo, onCheckedToggle}) => {
    const {id, text, checked} = todo;

    return (
    <div className="todo-item">
        <div className={`content ${checked ? "checked" : ""}`}>
            {checked ? <i className="fas fa-check-square" onClick={() => {onCheckedToggle(id);}}></i> : <i className="far fa-check-square" onClick={() => {onCheckedToggle(id)}}></i>}
            <div className="text">{text}</div>
        </div>
    </div>
    )
};

export default TodoItem;