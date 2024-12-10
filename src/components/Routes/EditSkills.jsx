import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../api/axios'
import removeIcon from '../../assets/SVG/close-circle.svg'
import { useAuthContext } from '../../hooks/useAuthContext'
import { layout } from '../../style'
import Nav from '../Nav/Nav'

export default function EditSkills() {
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)
	const { user } = useAuthContext()
	const [skills, setSkills] = useState([])
	const [newSkill, setNewSkill] = useState('')
	const navigate = useNavigate()

	async function handleAddSkill() {
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
			action: 'add',
		}

		try {
			setIsPending(true)
			await api.patch('update_skills/', [newSkillObject])

			setSkills([...skills, newSkillObject])
			setNewSkill('')
		} catch (err) {
			console.error(err)
			toast.error(err?.message || 'something went wrong!')
		} finally {
			setIsPending(false)
		}
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleAddSkill()
		}
	}

	async function handleRemoveSkill(name) {
		const data = [{ name: name, action: 'remove' }]
		try {
			setIsPending(true)
			await api.patch('update_skills/', data)

			const updatedSkills = skills.filter((skill) => skill.name !== name)
			setSkills(updatedSkills)
		} catch (err) {
			console.error(err)
			toast.error(err?.message || 'something went wrong!')
		} finally {
			setIsPending(false)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()

		setTimeout(() => {
			navigate('/')
		}, 2000)
	}

	useEffect(() => {
		const existingSkills = user?.skills || []

		setSkills(existingSkills)
	}, [])

	return (
		<>
			<Nav />
			<section className={`w-full bg-[#FBFBFB] ${layout.section}`}>
				<article className="relative w-full mt-32 lg:pl-16 lg:pr-8 py-6 max-w-screen-sm mx-auto bg-white shadow-sm rounded-sm">
					<h1 className="text-2xl font-bold text-nav/80 my-6">
						Edit interests & skills
					</h1>
					<label className="mt-3 mb-8 inline-block w-full lg:w-[95%]">
						<span className="inline-block mb-2 capitalize font-semibold">
							add skillset
						</span>
						<input
							type="text"
							required
							minLength={2}
							maxLength={80}
							value={newSkill}
							onChange={(e) => setNewSkill(e.target.value)}
							onKeyDown={handleKeyDown}
							autoComplete="off"
							autoFocus
							aria-description="add a new skillset"
							placeholder="Add skillset"
							className="bg-[#DADADA] rounded-md h-10 p-4 outline-0 w-full border-0 autofill:bg-dimWhite"
						/>
					</label>
					<ul className="w-full flex flex-wrap gap-4">
						{skills.map((skill) => (
							<li
								key={skill.name}
								className="w-fit whitespace-nowrap flex items-center px-2 py-2 bg-ecoGreen text-white gap-4 rounded-md lg:text-lg capitalize"
							>
								{skill.name}{' '}
								<img
									src={removeIcon}
									title={`Remove ${skill.name}`}
									disabled={isPending}
									onClick={() => handleRemoveSkill(skill.name)}
									className="cursor-pointer h-full w-auto object-contain"
								/>
							</li>
						))}
					</ul>
					{skills.length === 0 && (
						<small className="text-lg text-center text-nav/50">
							No skill added yet!
						</small>
					)}
					{error && (
						<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full mt-2">
							{error}
						</small>
					)}
					<button
						type="submit"
						onClick={handleSubmit}
						disabled={isPending || skills.length === 0}
						className="capitalize bg-ecoGreen text-white w-48 py-3  flex justify-center rounded-md text-lg mx-auto mt-16 mb-4 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
					>
						{isPending ? 'loading' : 'save changes'}
					</button>
				</article>
			</section>
		</>
	)
}
