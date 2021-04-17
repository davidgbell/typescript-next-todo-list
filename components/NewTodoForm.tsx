import { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const NewTodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input
        type='text'
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        type='submit'
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}>
        Add todo
      </button>
    </form>
  );
};
