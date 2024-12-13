import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api/axios'
import { validatePassword } from '../../helpers/validate-form'
import { PasswordInput } from '../utils/FormInput'
import SettingsWrapper from './SettingsWrapper'

export default function ChangePassword() {
	const [old_password, setPswd] = useState('')
	const [new_password, setPswd2] = useState('')
	const [error, setError] = useState(null)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isPending, setIsPending] = useState(false)

	function handleChange(e) {
		setError(null)
		setPswd(e.target.value)
	}

	function handleChange2(e) {
		setError(null)
		setPswd2(e.target.value)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const inputError = validatePassword(new_password)
		setError(inputError)

		if (inputError) return

		setIsPending(true)
		setError(null)
		const data = {
			old_password,
			new_password,
			confirm_new_password: new_password,
		}

		try {
			// https://theeco.pythonanywhere.com/api/change-password/
			await api.post('change-password/', data)
			setError(null)
			setIsSuccess(true)
			setTimeout(() => {
				navigate('/profile')
			}, 2000)
		} catch (err) {
			let logErr =
				err?.response?.data?.old_password[0] ||
				'Something went wrong... please refresh and try again'
			setError(logErr)
			console.error(err)
		} finally {
			setIsPending(false)
		}
	}

	return (
		<SettingsWrapper>
			<form className="w-full" onSubmit={handleSubmit}>
				<h4 className="text-2xl font-nunito capitalize w-full p-2 mb-10 border-b border-black">
					change password
				</h4>
				<PasswordInput
					label={'current password'}
					placeholder={'Enter your current password'}
					value={old_password}
					handleChange={handleChange}
				/>
				<Link
					to={'/iforgot'}
					className="font-normal font-nunito -mt-6 mb-4 inline-block text-ecoGreen text-lg text-center capitalize"
				>
					forgot password?
				</Link>
				<PasswordInput
					label={'new password'}
					placeholder={'Enter your new password'}
					value={new_password}
					handleChange={handleChange2}
				/>
				{error && (
					<small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full mt-2">
						{error}
					</small>
				)}
				{isSuccess && (
					<small className="text-center text-ecoGreen font-nunito text-lg font-semibold inline-block w-full mt-2">
						Password changed successfully!
					</small>
				)}
				<button
					type="submit"
					disabled={isPending || isSuccess || !new_password}
					className="capitalize bg-ecoGreen text-white w-fit  px-10 py-3 flex justify-center rounded-md text-lg mx-auto font-semibold mt-6 mb-4 hover:bg-ecoGreen/80 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-xl focus-within:bg-ecoGreen/70 transition-all"
				>
					{isPending ? 'loading' : 'change password'}
				</button>
			</form>
		</SettingsWrapper>
	)
}
