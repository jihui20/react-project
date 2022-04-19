import React, {useState} from 'react';
import './TodoInsert.css';

const TodoInsert = ({onInsertToggle, onInsertTodo}) => {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue('');
        onInsertToggle();
    }

    return(
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} />
            <button type="submit"><i className="fas fa-plus-circle"></i></button>
        </form>
    </div>
    );
}

export default TodoInsert;
