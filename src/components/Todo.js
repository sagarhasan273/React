import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const updateWarning = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?' : null;
        setTodo(inputValue);
        setWarning(updateWarning);
    };

    return (
      <div>
        <p>{todo}</p>
        <textarea value={todo} onChange={handleChange} />
        <p>
          <h1>{warning || 'Good Choice!'}</h1>
        </p>
      </div>
    );
}
