import sideImg from '../../../assets/signup/innovation-bulb.svg'
import OrgSignup from '../OrgSignup'
import SplitLayout from '../SplitLayout'

export default function InnovationHub() {
	return (
		<SplitLayout img={sideImg} heading={'welcome to ECO Innovation Hub'}>
			<OrgSignup />
		</SplitLayout>
	)
}

{
	/* <>
<div className="w-full flex justify-between items-center mb-20">
				<p>Awesome!!, Account type set 👍🏿</p>
				<Link to={'/signup'} className="text-ecoGreen capitalize font-semibold">
					go back
				</Link>
			</div>
			<h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize my-6 block font-bold">
				login details
			</h4>

			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
				<label className="block w-full">
					<span className="text-lg capitalize">email address</span>
					<div className="flex h-12 mt-3 px-4 gap-3 bg-ecoGreen/10 rounded-md">
						<input
							type="email"
							required
							minLength={6}
							maxLength={30}
							placeholder="email@eco.com"
							className="bg-transparent outline-0 w-full border-0 pr-2 focus:border-b-2"
						/>
					</div>
				</label>

				<label className="block w-full">
					<span className="text-lg capitalize">account recovery number</span>
					<div className="flex mt-3 px-4 h-12 gap-3 bg-ecoGreen/10 rounded-md">
						<input
							type="tel"
							required
							minLength={9}
							maxLength={80}
							placeholder="Enter phone number"
							className="bg-transparent outline-0 border-0 w-full pr-2"
						/>
					</div>
				</label>

				<label className="block w-full">
					<span className="text-lg capitalize">password</span>
					<div className="flex mt-3 px-4 h-12 gap-3 bg-ecoGreen/10 rounded-md">
						<input
							type={showPswd ? 'text' : 'password'}
							required
							minLength={6}
							maxLength={100}
							placeholder="*******"
							className="bg-transparent outline-0 border-0 w-full pr-2"
						/>
						<div
							className="flex w-10 items-center justify-center text-2xl"
							onClick={() => setShowPswd((pswd) => !pswd)}
						>
							{showPswd ? <IoEyeOutline /> : <IoEyeOffOutline />}
						</div>
					</div>
				</label>
				<div className="w-full flex gap-4 mt-32 mb-10 justify-between items-center">
					<Link
						to={'/signup'}
						className="capitalize bg-transparent text-ecoGreen py-3 flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
					>
						back
					</Link>
					<PrimaryBtn type="submit" content="save & continue" />
				</div>
			</form>
			
</> */
}
