import { TodoListItem } from '../components/TodoListItem';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [];

export const TodosContainer = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <NewTodoForm addTodo={addTodo} />
    </div>
  );
};

import React, { useState } from 'react';
