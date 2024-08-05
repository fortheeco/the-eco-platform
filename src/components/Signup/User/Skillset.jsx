import { useState } from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../api/axios'
import addSkillIcon from '../../../assets/signup/add_circle.svg'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { layout } from '../../../style'

export default function Skillset() {
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const { user } = useAuthContext()
	const shortenedName = user?.full_name?.split(' ')[0] || ''
	const [skills, setSkills] = useState([])
	const [newSkill, setNewSkill] = useState('')
	const navigate = useNavigate()

	function handleAddSkill() {
		if (newSkill.trim() === '') {
			toast.info('Skill cannot be empty.')
			return
		}

		const skillExists = skills.some(
			(skill) => skill.name.toLowerCase() === newSkill.toLowerCase()
		)

		if (skillExists) {
			toast.error('This skill already exists.')
			return
		}

		const newSkillObject = {
			name: newSkill,
		}

		setSkills([...skills, newSkillObject])
		setNewSkill('')
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleAddSkill()
		}
	}

	function handleRemoveSkill(name) {
		const updatedSkills = skills.filter((skill) => skill.name !== name)
		setSkills(updatedSkills)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		setError(null)
		setIsPending(true)
		if (skills.length === 0) return

		try {
			await api.put('update_skills/', skills)

			toast.success('Skills added successfully!')

			setTimeout(() => {
				navigate('/')
			}, 2000)
			setError(null)
		} catch (err) {
			let logErr =
				err?.response?.data?.detail ||
				'Something went wrong... please refresh and try again'
			setError(logErr)
			console.error(err)
		} finally {
			setIsPending(false)
		}
	}

	return (
		<section className={`w-full bg-[#FBFBFB] ${layout.section}`}>
			<article
				onKeyDown={handleKeyDown}
				// onSubmit={handleSubmit}
				className={`relative w-full bg-white lg:pl-16 lg:pr-8 py-6 border-t-4 border-ecoGreen rounded-md shadow-sm`}
			>
				<div className="flex w-full justify-between items-center">
					<div className="flex items-center my-8 lg:gap-10 gap-3">
						<img
							src={user?.image}
							alt={user.name}
							className="w-10 h-10 lg:w-40 lg:h-40 object-fill object-center rounded-full"
						/>
						<h2 className="font-semibold text-lg capitalize lg:text-3xl lg:font-bold">
							welcome, {shortenedName}
						</h2>
					</div>
					<p className="flex w-fit text-xs sm:text-lg font-semibold pb-2">
						Step 3/3
					</p>
				</div>
				<p className="text-lg text-nav/70 my-6">
					Tell us, what skillsets are you bringing to the Eco Community?
				</p>
				<small className="flex items-center gap-2">
					<IoInformationCircleOutline className="text-blue-500 text-lg" /> Click
					enter to add multiple skills
				</small>
				<label className="flex mt-3 mb-8 pr-4 gap-3 bg-ecoGreen/10 rounded-md w-full lg:w-[95%]">
					<img
						src={addSkillIcon}
						alt="map icon"
						className="h-12  inline-block p-2"
					/>
					<input
						type="text"
						// required
						minLength={2}
						maxLength={80}
						value={newSkill}
						onChange={(e) => setNewSkill(e.target.value)}
						autoComplete="off"
						autoFocus
						aria-description="add a new skillset"
						placeholder="Add skillset"
						className="bg-transparent outline-0 w-full border-0"
					/>
				</label>
				<ul className="w-full flex gap-4">
					{skills.map((skill) => (
						<li
							key={skill.name}
							className="w-fit flex items-center px-2 py-2 bg-ecoGreen text-white gap-4 rounded-md lg:text-lg capitalize"
						>
							{skill.name}{' '}
							<span
								title={`Remove ${skill.name}`}
								onClick={() => handleRemoveSkill(skill.name)}
								className="cursor-pointer text-dimWhite font-poppins"
							>
								x
							</span>
						</li>
					))}
				</ul>
				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full mt-2">
						{error}
					</small>
				)}
				<button
					type="button"
					onClick={handleSubmit}
					disabled={isPending || skills.length === 0}
					className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-1/3 flex justify-center rounded-md text-lg mx-auto mt-16 mb-4 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					{isPending ? 'loading' : 'save and continue'}
				</button>
			</article>
		</section>
	)
}
