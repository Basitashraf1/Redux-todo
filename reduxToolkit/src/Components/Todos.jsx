import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../App/Features/Todo/TodoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState({});

  const handleEditChange = (event, todo) => {
    setEditText({
      ...editText,
      [todo.id]: event.target.value,
    });
  };

  const handleEdit = (todo) => {
    if (editText[todo.id]) {
      dispatch(updateTodo({
        id: todo.id,
        text: editText[todo.id],
      }));
      delete editText[todo.id];
      setEditText({ ...editText });
    } else {
      setEditText({
        ...editText,
        [todo.id]: todo.text,
      });
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>
              {editText[todo.id] !== undefined ? (
                <input
                  type="text"
                  value={editText[todo.id]}
                  onChange={(event) => handleEditChange(event, todo)}
                  className="bg-gray-200 text-gray-900 rounded border border-gray-400 py-1 px-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                />
              ) : (
                todo.text
              )}
            </div>

            <button
              onClick={() => dispatch(removeTodo({ id: todo.id }))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover-bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {/* ... */}
              </svg>
            </button>

            <div>
              <button
                onClick={() => handleEdit(todo)}
                className='bg-white'
              >
                {editText[todo.id] !== undefined ? 'Save' : 'Edit'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
