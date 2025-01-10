import { FC, useState } from "react"
import classNames from 'classnames'

//Aqui estou tipando o tasks
type TaskType = {
    id: number,
    title: string,
    done: boolean
}
const TASKS: TaskType[] = [
    {id: 1, title: 'A', done: true},
    {id: 2, title: 'B', done: false},
    {id: 3, title: 'C', done: true},
]


const TaskManager: FC = () => {
    const [tasks, setTasks] = useState(TASKS)
    
    const handleTaskDeleteClick = (deletedTask: TaskType) => (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTasks(previousTasks => previousTasks.filter(task => task !== deletedTask))
        }
    const handleTaskUpdateStatusChange = (updatedTask: TaskType) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const done = e.target.checked

        setTasks(previousTasks => previousTasks.map(task => (task === updatedTask ? {...task, done } : task)))
     }

    return (
        <>
            <section className='todoapp'>
            <header className='header'>
                <h1>todos</h1>
                <input className='new-todo' placeholder='What needs to be done?' autoFocus />
            </header>

            <section className='main'>
                <input id='toggle-all' className='toggle-all' type='checkbox' />
                <label htmlFor='toggle-all'>Mark all as complete</label>
                <ul className='todo-list'>
                {tasks.map(task => (
                    <li className={classNames({completed: task.done})}>
                        <div className='view'>
                            <input className='toggle' type='checkbox' checked={task.done} 
                            onChange={handleTaskUpdateStatusChange(task)} />
                            <label>{task.title}</label>
                            <button className='destroy' onClick={handleTaskDeleteClick(task)}></button>
                        </div>
                        <input className='edit' value='Taste JavaScript' />
                    </li>
                ))}    
                <li>
                    <div className='view'>
                    <input className='toggle' type='checkbox' />
                    <label>Buy a unicorn</label>
                    <button className='destroy'></button>
                    </div>
                    <input className='edit' value='Buy a unicorn' />
                </li>
                </ul>
            </section>

            <footer className='footer'>
                <span className='todo-count'>
                <strong>0</strong> item left
                </span>
                <ul className='filters'>
                <li>
                    <a className='selected' href='#/'>
                    All
                    </a>
                </li>
                <li>
                    <a href='#/active'>Active</a>
                </li>
                <li>
                    <a href='#/completed'>Completed</a>
                </li>
                </ul>
                <button className='clear-completed'>Clear completed</button>
            </footer>
            </section>

            <footer className='info'>
            <p>Double-click to edit a todo</p>
            <p>
                Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a>
            </p>
            <p>
                Created by <a href='http://todomvc.com'>you</a>
            </p>
            <p>
                Part of <a href='http://todomvc.com'>TodoMVC</a>
            </p>
            </footer>
        </>
    )
}


export default TaskManager