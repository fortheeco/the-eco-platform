import { Route, Routes } from 'react-router-dom'
import loadingIcon from './assets/SVG/nav-logo.svg'
import { FeedsHome } from './components/Dashboard/Feeds/feeds.jsx'
import { Dashboard } from './components/Dashboard/dashboard.jsx'
import { ProfilePals } from './components/Dashboard/my-pals/profile.jsx'
import { EditProfileIndex } from './components/Dashboard/profile/Edit-Profile/index.jsx'
import { EditIndividualProfileIndex } from './components/Dashboard/profile/IndividualProfile/Edit-Individual-profile/index.jsx'
import { IndividualProfile } from './components/Dashboard/profile/IndividualProfile/profile.jsx'
import { OthersProfileById } from './components/Dashboard/profile/otherProfile/profile.jsx'
import { Profile } from './components/Dashboard/profile/profile.jsx'
import { LandingPage } from './components/Home/LandingPage.jsx'
import { PalsIndex } from './components/Pals/index.jsx'
import EditSkills from './components/Routes/EditSkills.jsx'
import ForgotPassword from './components/Routes/ForgotPassword.jsx'
import NotFound from './components/Routes/NotFound.jsx'
import ResetPassword from './components/Routes/ResetPassword.jsx'
import { SignIn } from './components/Routes/SignIn.jsx'
import { SignUp } from './components/Routes/SignUp'
import ChangePassword from './components/Settings/ChangePassword.jsx'
import DeleteAccount from './components/Settings/DeleteAccount.jsx'
import PrivacySettings from './components/Settings/PrivacySettings.jsx'
import ResetAccountData from './components/Settings/ResetAccountData.jsx'
import AccountSettings from './components/Settings/index.jsx'
import AccountType from './components/Signup/AccountType.jsx'
import ImpactAndReact from './components/Signup/Innovation/ImpactReact.jsx'
import InnovationDetails from './components/Signup/Innovation/InnovationDetails.jsx'
import InnovationHub from './components/Signup/Innovation/InnovationHub.jsx'
import OrgInfo from './components/Signup/Innovation/OrgInfo.jsx'
import Payments from './components/Signup/Innovation/Payment.jsx'
import Terms from './components/Signup/Innovation/Terms.jsx'
import AreaOfFocus from './components/Signup/Org/AreaOfFocus.jsx'
import CollabInterest from './components/Signup/Org/CollabInterest.jsx'
import OrgContact from './components/Signup/Org/Contact.jsx'
import OrgDetails from './components/Signup/Org/OrgDetails.jsx'
import OrgVerification from './components/Signup/Org/OrgVerification.jsx'
import Organization from './components/Signup/Org/Organization.jsx'
import Individual from './components/Signup/User/Individual.jsx'
import Skillsets from './components/Signup/User/Skillset.jsx'
import UserDetails from './components/Signup/User/UserDetails.jsx'
import VerifyEmail from './components/Signup/VerifyEmail.jsx'
import InnovationPage from './components/innovation/index.jsx'
import InnovationProfile from './components/innovation/innovationPage/index.jsx'
import { useAuthContext } from './hooks/useAuthContext.jsx'
import ErrorElement from './utils/ErrorElement.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
// import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import InnovationImpact from './components/innovation/profile/ImpactAndReach.jsx'
import InnovationProfileDetails from './components/innovation/profile/InnovationProfileDetails.jsx'
import Media from './components/innovation/profile/Media.jsx'
import OrgInformation from './components/innovation/profile/OrgInformation.jsx'
import InnovationSettings from './components/innovation/profile/index.jsx'

const App = () => {
	const { authIsReady } = useAuthContext()

	return (
		<>
			{authIsReady ? (
				<Routes>
					{/* <Route path="/" element={<Nav />}> */}
					<Route index element={<LandingPage />} />

					<Route path="pals" element={<PalsIndex />} />
					<Route path="innovation">
						<Route index element={<InnovationPage />} />
						{/* individual innovation */}
						<Route path=":id" element={<ProtectedRoute />}>
							<Route index element={<InnovationProfile />} />
							{/* <Route element={<ProtectedRoute />}> */}
							{/* innovation settings */}
							<Route path="profile" element={<InnovationSettings />}>
								<Route path="information" element={<OrgInformation />} />
								<Route path="details" element={<InnovationProfileDetails />} />
								<Route path="impact-and-reach" element={<InnovationImpact />} />
								<Route path="media" element={<Media />} />
							</Route>
							{/* </Route> */}
						</Route>
					</Route>

					<Route path="login" element={<SignIn />} />
					<Route path="iforgot" element={<ForgotPassword />} />
					<Route path="reset-password" element={<ResetPassword />} />
					<Route element={<ProtectedRoute />}>
						<Route path="edit-skills" element={<EditSkills />} />
					</Route>

					<Route element={<ProtectedRoute />}>
						<Route path="settings" element={<AccountSettings />}>
							<Route path="password" element={<ChangePassword />} />
							<Route path="privacy" element={<PrivacySettings />} />
							<Route path="reset-data" element={<ResetAccountData />} />
							<Route path="delete-account" element={<DeleteAccount />} />
						</Route>
					</Route>

					<Route
						path="signup"
						errorElement={<ErrorElement />}
						element={<SignUp />}
					>
						<Route index element={<AccountType />} />

						<Route path="user">
							<Route index element={<Individual />} />
							<Route path="details" element={<UserDetails />} />
							<Route element={<ProtectedRoute />}>
								<Route path="skillset" element={<Skillsets />} />
							</Route>
						</Route>

						<Route path="organization">
							<Route index element={<Organization />} />
							<Route path="details" element={<OrgDetails />} />
							<Route path="verification" element={<OrgVerification />} />
							<Route path="contact" element={<OrgContact />} />
							<Route path="area-of-focus" element={<AreaOfFocus />} />
							<Route
								path="collaboration-interest"
								element={<CollabInterest />}
							/>
						</Route>
						<Route path="innovation" element={<ProtectedRoute />}>
							<Route index element={<InnovationHub />} />
							{/* <Route path="information" element={<OrgInfo />} /> */}
							<Route path="details" element={<InnovationDetails />} />
							<Route path="impact-and-reach" element={<ImpactAndReact />} />
							<Route path="terms" element={<Terms />} />
							<Route path="payment" element={<Payments />} />
						</Route>

						<Route path="verify-email" element={<VerifyEmail />} />
					</Route>
					{/* </Route> */}
					{/* </Route> */}
					<Route path="/dashboard" element={<Dashboard />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/profile" element={<Profile />} />
						<Route path="/profile/edit" element={<EditProfileIndex />} />
						<Route
							path="/edit/profile-individual"
							element={<EditIndividualProfileIndex />}
						/>
						<Route path="/profile/:id" element={<OthersProfileById />} />
						<Route path="/individual-profile" element={<IndividualProfile />} />

						<Route path="/your-Eco" element={<FeedsHome />} />
						<Route path="/eco-pals" element={<ProfilePals />} />
					</Route>
					{/* eco data center page route */}
					<Route>
						<Route path="/ecopage" element={<EcoPage />} />
					</Route>
					{/* eco dta center page route */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			) : (
				<div className="w-full h-screen flex flex-col items-center justify-center p-20 bg-dimWhite">
					<img
						src={loadingIcon}
						alt="loading"
						className="inline-block w-32 aspect-square object-contain animate-pulse transition-all duration-300"
					/>
				</div>
			)}
		</>
	)
}

export default App
