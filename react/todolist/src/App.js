import React, {useState} from 'react';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

let nextId = 4;

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true
    },
    {
      id: 2,
      text: '할일 2',
      checked: false
    },
    {
      id: 3,
      text: '할일 3',
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  }

  const onInsertTodo = (text) => {
    if (text === ''){
      return alert('할 일을 등록해주세요.')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo)); //push대신 concat을 쓰는 이유는 새로운 배열을 받으려고(변경되기전 값을 변경시키면 안되기때문에.)
      nextId++;
    }
  }

  const onCheckedToggle = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  }


  return (
  <Template todoLength={todos.length}>
    <TodoList todos={todos} onCheckedToggle={onCheckedToggle}/>
    <div className="add-todo-btn" onClick={onInsertToggle}><i className="fas fa-plus"></i></div>
    {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo}/>}
  </Template>
  );
};

export default App;
