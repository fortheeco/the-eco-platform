import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

export function PasswordInput({ label, value, handleChange, placeholder }) {
	const [showPswd, setShowPswd] = useState(false)

	return (
		<label className="flex flex-col mt-3 mb-4 gap-2 w-full">
			<span className="capitalize font-semibold text-lg">{label}</span>
			<div className="flex mt-2 pr-2 gap-3 bg-slate-50/5 rounded-md relative border-2 border-black/40 transition-all duration-200">
				<input
					type={showPswd ? 'text' : 'password'}
					// disabled={isPending || isSuccess}
					name="password"
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					className="focus-within:bg-ecoGreen/10 bg-transparent rounded-md outline-0 w-full h-12 p-4 pr-2"
				/>
				<div
					className="flex w-10 items-center justify-center text-2xl"
					onClick={() => setShowPswd((pswd) => !pswd)}
				>
					{showPswd ? <IoEyeOutline /> : <IoEyeOffOutline />}
				</div>
			</div>
		</label>
	)
}
