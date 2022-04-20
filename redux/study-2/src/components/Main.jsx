import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RegisterInput from './RegisterInput';
import { deleteList } from '../modules/todoList';

export default function Main() {
  const { todo } = useSelector((state) => ({
    todo: state.todoList.todo,
  }));

  const dispatch = useDispatch();

  const handleDeleteList = (list) => dispatch(deleteList(list));

  const deleteTodoList = (value) => {
    handleDeleteList(todo.filter((list) => list !== value));
  };

  return (
    <main>
      <RegisterInput />
      <div>
        <ul>
          {todo &&
            todo.length > 0 &&
            todo.map((list, idx) => {
              return (
                <li key={idx}>
                  {`${idx + 1}. ${list}`}
                  <button type="button" onClick={() => deleteTodoList(list)}>
                    <span>삭제</span>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}
