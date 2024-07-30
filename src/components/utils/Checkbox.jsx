import { useState } from 'react'
import checkmarkIcon from '../../assets/signup/check.svg'
import squareIcon from '../../assets/signup/squacle.svg'

export function CustomCheckbox({ name, value, label, defaultValue = true }) {
	const [checked, setChecked] = useState(defaultValue)

	return (
		<label className="flex items-center gap-3 mt-3">
			<div className="flex relative w-6 h-6">
				<input
					checked={checked}
					onChange={() => setChecked((prev) => !prev)}
					type="checkbox"
					name={name}
					value={value}
					id={name}
					className="w-0 h-0 invisible peer"
				/>
				<img
					src={squareIcon}
					alt="not checked"
					className="w-full h-full peer-focus:shadow-md"
				/>
				<img
					src={checkmarkIcon}
					alt="checked"
					className="w-[14px] inline-block top-[6px] left-[4px] invisible object-contain absolute peer-checked:visible"
				/>
			</div>
			<span>{label}</span>
		</label>
	)
}
