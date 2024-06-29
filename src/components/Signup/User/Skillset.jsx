import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../../api/axios'
import locationIcon from '../../../assets/signup/location.svg'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { layout } from '../../../style'

export default function Skillset() {
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const { user, token } = useAuthContext()
	const shortenedName = user?.full_name?.split(' ')[0] || ''
	const [skills, setSkills] = useState([])
	const [newSkill, setNewSkill] = useState('')
	const navigate = useNavigate()

	function handleAddSkill() {
		if (newSkill.trim() === '') {
			alert('Skill cannot be empty.')
			return
		}

		const skillExists = skills.some(
			(skill) => skill.name.toLowerCase() === newSkill.toLowerCase()
		)

		if (skillExists) {
			alert('This skill already exists.')
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
		try {
			await axios
				.post('update_skills/', skills, {
					headers: { Authorization: `Bearer ${token}` },
					withCredentials: true,
				})
				.then((res) => {
					toast.success('Skills added successfully!')

					setTimeout(() => {
						navigate('/')
					}, 2000)
				})
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
		<section className={`w-full ${layout.section}`}>
			<div className={`globe-bg relative w-full lg:pl-16 lg:pr-8 py-6`}>
				<div className="flex w-full justify-between items-center">
					<div className="flex items-center my-8 lg:gap-10 gap-3">
						<img
							src={user.avatar}
							alt="user avatar"
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
				<label className="flex mt-3 mb-8 pr-4 gap-3 bg-ecoGreen/10 rounded-md w-full lg:w-[95%]">
					<img
						src={locationIcon}
						alt="map icon"
						className="h-12  inline-block p-2"
					/>
					<input
						type="text"
						required
						minLength={6}
						maxLength={80}
						value={newSkill}
						onChange={(e) => setNewSkill(e.target.value)}
						onKeyDown={handleKeyDown}
						autoComplete="on"
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
					type="submit"
					onClick={handleSubmit}
					disabled={isPending}
					className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-1/3 flex justify-center rounded-md text-lg mx-auto mt-16 mb-4 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
				>
					{isPending ? 'loading' : 'save and continue'}
				</button>
			</div>
		</section>
	)
}
