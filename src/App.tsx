import { useState } from 'react'
import logo from './assets/logo.svg'
import user from './assets/user.webp'
import Card from './components/Card'
import Form from './components/Form'

export interface Task {
	id: number
	title: string
	isDone: boolean
}

const tasks_data: Task[] = [
	{
		id: 0,
		title: 'Просто задача для проверки работы приложения.',
		isDone: false,
	},
	{
		id: 1,
		title: 'Новая задача для проверки работы приложения.',
		isDone: false,
	},
	{
		id: 2,
		title: 'Новая задача для проверки работы приложения.',
		isDone: false,
	},
]

function App() {
	const [tasks, setTasks] = useState<Task[]>(tasks_data)

	const handleChangeTask = (id: number) => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		)
	}

	const handleDeleteTask = (id: number) => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	console.log(tasks)

	return (
		<>
			<div className='flex flex-col min-h-screen py-16'>
				<main className='flex-1 max-w-7xl w-full mx-auto bg-gray-800 rounded-3xl py-12 px-16'>
					<div className='flex justify-between items-center border-b border-slate-700 pb-4'>
						<img src={logo} alt='logo' />
						<img
							src={user}
							alt='Пользователь'
							className='w-14 h-14 rounded-full'
						/>
					</div>
					<Form tasks={tasks} setTasks={setTasks} />
					<div className='mt-6 flex flex-col gap-4'>
						{tasks.map(task => (
							<Card
								key={task.id}
								task={task}
								changeTask={handleChangeTask}
								deleteTask={handleDeleteTask}
							/>
						))}
					</div>
				</main>
			</div>
		</>
	)
}

export default App
