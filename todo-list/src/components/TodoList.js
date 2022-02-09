import { useState } from 'react';
import { TodoListItem } from './TodoListItem';
import '../App.css';

export const TodoList = (props) => {
    const defaultListItems = [
        { name: 'Tarefa 1', isCompleted: true },
        { name: 'Tarefa 2', isCompleted: false },
        { name: 'Tarefa 3', isCompleted: false },
        { name: 'Tarefa 4', isCompleted: false },
    ];
    const [items, setItems] = useState(defaultListItems);
    const [taskValue, setTaskValue] = useState('');
    const handleTaskSubmit = (event) => {
        if (items.find(i => i.name  === taskValue)) {
            event.preventDefault();
            console.log('Tarefa já existe!');
            return;
        }
        setItems([{ name: taskValue, isCompleted: false }, ...items]);
        setTaskValue('');
        event.preventDefault();
    }

    //Ponte entre o componente interno e externo
    const handleOnTaskChanged = (event, item) => {
        //Passa por cada item do array e verifica se i.name é igual a item.name recebido e altera o isCompleted
        setItems(items.map(i => {
            if (i.name === item.name) {
                return {
                    ...i, isCompleted: event.target.checked
                }
            }
            return i;
        }));
    }

    return (
        <div className='todo-list-container'>
            <p>Você concluiu {items.filter(i => i.isCompleted).length} tarefas.</p>
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
                {items.map((item) => (
                    <TodoListItem onTaskChanged={handleOnTaskChanged} item={item} />
                ))}
            </ul>
        </div>
    )
};