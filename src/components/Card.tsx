import type { Task } from '../App'
import deletion from '../assets/deletion.svg'
import { cn } from '../lib/utils'
import { Checkbox } from './ui/checkbox'

const Card = ({
	task,
	changeTask,
	deleteTask,
}: {
	task: Task
	changeTask: (id: number) => void
	deleteTask: (id: number) => void
}) => {
	return (
		<div
			className='flex items-center gap-2 cursor-pointer py-4 px-6 border-b bg-gray-700 rounded-xl'
			data-id={task.id}
		>
			<div className='flex-1 flex justify-start items-center gap-2'>
				<Checkbox
					checked={task.isDone}
					id={task.id.toString()}
					onCheckedChange={() => changeTask(task.id)}
					className='w-5 h-5 cursor-pointer border-slate-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 focus:ring-cyan-500'
				/>
				<label
					htmlFor={task.id.toString()}
					className={cn(
						'text-gray-200 cursor-pointer',
						task.isDone && 'line-through'
					)}
				>
					{task.title}
				</label>
			</div>
			<button
				onClick={() => deleteTask(task.id)}
				className='flex items-center gap-2 cursor-pointer p-3 rounded-xl bg-transparent border border-slate-600 text-white hover:bg-red-400 transition-colors'
			>
				<img src={deletion} alt='Удалить' />
			</button>
		</div>
	)
}

export default Card
