import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import locationIcon from '../../../assets/signup/location.svg'
import userAvatar from '../../../assets/signup/user-avatar.png'
import { layout } from '../../../style'

export default function Skillset() {
	const user = {
		name: 'John Doe',
		email: 'example@gmail.com',
		gender: 'male',
		avatar: userAvatar,
	}
	const shortenedName = user.name.split(' ')[0]
	const [skills, setSkills] = useState([])
	const [newSkill, setNewSkill] = useState('')

	function handleAddSkill() {
		if (newSkill.trim() === '') {
			alert('Skill cannot be empty.')
			return
		}

		const skillExists = skills.some(
			(skill) => skill.skill.toLowerCase() === newSkill.toLowerCase()
		)

		if (skillExists) {
			alert('This skill already exists.')
			return
		}

		const newSkillObject = {
			id: uuidv4(),
			skill: newSkill,
		}

		setSkills([...skills, newSkillObject])
		setNewSkill('')
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleAddSkill()
		}
	}

	function handleRemoveSkill(id) {
		const updatedSkills = skills.filter((skill) => skill.id !== id)
		setSkills(updatedSkills)
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
							key={skill.id}
							className="w-fit flex items-center px-2 py-2 bg-ecoGreen text-white gap-4 rounded-md lg:text-lg capitalize"
						>
							{skill.skill}{' '}
							<span
								title={`Remove ${skill.skill}`}
								onClick={() => handleRemoveSkill(skill.id)}
								className="cursor-pointer text-dimWhite font-poppins"
							>
								x
							</span>
						</li>
					))}
				</ul>
				<button
					type="submit"
					className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-1/3 flex justify-center rounded-md text-lg mx-auto mt-16 mb-4"
				>
					save and continue
				</button>
			</div>
		</section>
	)
}
