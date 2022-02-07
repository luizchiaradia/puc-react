import { useState } from 'react';
import { TodoListItem } from './TodoListItem';
import '../App.css';

export const TodoList = (props) => {
    const defaultListItems = [
        { name: 'Tarefa 1', isCompleted: false },
        { name: 'Tarefa 2', isCompleted: false },
        { name: 'Tarefa 3', isCompleted: false },
        { name: 'Tarefa 4', isCompleted: false },
    ];
    const [items, setItems] = useState(defaultListItems);
    const [taskValue, setTaskValue] = useState('');
    const handleTaskSubmit = (event) => {
        setItems([{name: taskValue, isCompleted: false}, ...items]);
        setTaskValue('');
        event.preventDefault();
    }

    return (
        <div className='todo-list-container'>
            <form onSubmit={handleTaskSubmit}>
                <input 
                    type="text"
                    value={taskValue}
                    placeholder="Adicione uma nova tarefa"
                    onChange={(event) => setTaskValue(event.target.value)}
                />
                <button type="submit">Adicionar item</button>
            </form>
            <ul>
                {items.map((item) => <TodoListItem item={item} />)}
            </ul>
        </div>
    )
};