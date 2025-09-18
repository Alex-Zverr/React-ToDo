import { useState } from 'react'
import type { Task } from '../App'
import add from '../assets/add.svg'

const Form = ({
	tasks,
	setTasks,
}: {
	tasks: Task[]
	setTasks: (tasks: Task[]) => void
}) => {
	const [newTask, setNewTask] = useState('')
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('asdfas')

		if (newTask.trim() !== '') {
			setTasks([
				...tasks,
				{
					id: tasks[tasks.length - 1].id + 1,
					title: newTask,
					isDone: false,
				},
			])
			setNewTask('')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='flex gap-4 mt-6'>
			<input
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
				type='text'
				name='task'
				placeholder='Введите задачу'
				className='w-full px-6 py-4 text-gray-200 outline-hidden rounded-2xl border border-slate-600 focus:outline-hidden focus:ring-2 focus:ring-sky-500 placeholder:text-slate-500 bg-gray-700'
			/>
			<button className='flex items-center gap-2 cursor-pointer px-6 py-4 rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white hover:bg-cyan-600 transition-colors'>
				Добавить
				<img className='flex-shrink-0 w-5 h-5' src={add} alt='Добавить' />
			</button>
		</form>
	)
}

export default Form
