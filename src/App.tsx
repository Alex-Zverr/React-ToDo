import add from './assets/add.svg'
import deletion from './assets/deletion.svg'
import logo from './assets/logo.svg'
import user from './assets/user.webp'
function App() {
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
					<div className='flex gap-4 mt-6'>
						<input
							type='text'
							name='task'
							placeholder='Введите задачу'
							className='w-full px-6 py-4 text-gray-200 outline-hidden rounded-2xl border border-slate-600 focus:outline-hidden focus:ring-2 focus:ring-sky-500 placeholder:text-slate-500 bg-gray-700'
						/>
						<button className='flex items-center gap-2 cursor-pointer px-6 py-4 rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white hover:bg-cyan-600 transition-colors'>
							Добавить
							<img className='flex-shrink-0 w-5 h-5' src={add} alt='Добавить' />
						</button>
					</div>
					<div className='mt-6 flex flex-col gap-4'>
						<div className='flex items-center gap-2 cursor-pointer py-4 px-6 border-b bg-gray-700 rounded-xl'>
							<input type='checkbox' />
							<span className='text-gray-200 flex-1'>
								Integer urna interdum massa libero auctor neque turpis turpis
								semper. Duis vel sed fames integer.
							</span>
							<button className='flex items-center gap-2 cursor-pointer p-3 rounded-xl bg-transparent border border-slate-600 text-white hover:bg-red-400 transition-colors'>
								<img src={deletion} alt='Удалить' />
							</button>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
