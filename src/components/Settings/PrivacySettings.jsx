import SettingsWrapper from './SettingsWrapper'

export default function PrivacySettings() {
	return (
		<SettingsWrapper>
			<section className="w-full">
				<h4 className="text-2xl font-nunito capitalize w-full p-2 mb-6 border-b border-black">
					privacy settings
				</h4>
				<form className="w-full">
					<label htmlFor="privacy" className="text-lg text-nav/20 font-nunito">
						Who can view your post?
					</label>
					<select
						name="privacy"
						id="privacy"
						className="w-full p-3 rounded-md bg-dimWhite border-2 border-black/40 bg-[#FBFBFB] focus-within:border-ecoGreen"
					>
						<option value="everyone">everyone</option>
						<option value="followed">people you follow</option>
					</select>
				</form>
			</section>
		</SettingsWrapper>
	)
}
