import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../modules/todoList';

export default function RegisterInput() {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();

  const handleAddList = (list) => dispatch(addList(list));

  const handleTodoValue = (e) => {
    let { value } = e.target;

    if (value) {
      setTodoValue(value);
    } else {
      setTodoValue('');
    }
  };

  const handleCheckEnter = (e) => {
    if (e.key === 'Enter') {
      handleAddList(todoValue);
      setTodoValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoValue}
        onChange={handleTodoValue}
        onKeyPress={handleCheckEnter}
      />
      <button type="button">
        <span>등록</span>
      </button>
    </div>
  );
}
