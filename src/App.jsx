import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard/dashboard.jsx'
import { LandingPage } from './components/Home/LandingPage.jsx'
import { PalsIndex } from './components/Pals/index.jsx'
import EditSkills from './components/Routes/EditSkills.jsx'
import ForgotPassword from './components/Routes/ForgotPassword.jsx'
import Innovation from './components/Routes/Innovation.jsx'
import NotFound from './components/Routes/NotFound.jsx'
import ResetPassword from './components/Routes/ResetPassword.jsx'
import { SignIn } from './components/Routes/SignIn.jsx'
import { SignUp } from './components/Routes/SignUp'
import AccountType from './components/Signup/AccountType.jsx'
import OrgDetails from './components/Signup/Org/OrgDetails.jsx'
import OrgVerification from './components/Signup/Org/OrgVerification.jsx'
import Organization from './components/Signup/Org/Organization.jsx'
import Individual from './components/Signup/User/Individual.jsx'
import Skillsets from './components/Signup/User/Skillset.jsx'
import UserDetails from './components/Signup/User/UserDetails.jsx'
import VerifyEmail from './components/Signup/VerifyEmail.jsx'
import { useAuthContext } from './hooks/useAuthContext.jsx'
import ErrorElement from './utils/ErrorElement.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'

const App = () => {
	const { authIsReady } = useAuthContext()

	return (
		<>
			{authIsReady && (
				<Routes>
					{/* <Route path="/" element={<Nav />}> */}
					<Route index element={<LandingPage />} />

					{/* Pals page */}
					<Route path="pals" element={<PalsIndex />} />
					<Route path="innovation" element={<Innovation />} />

					<Route path="login" element={<SignIn />} />
					<Route path="iforgot" element={<ForgotPassword />} />
					<Route path="reset-password" element={<ResetPassword />} />
					<Route element={<ProtectedRoute />}>
						<Route path="edit-skills" element={<EditSkills />} />
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
						</Route>

						<Route path="verify-email" element={<VerifyEmail />} />
					</Route>
					{/* </Route> */}
					{/* </Route> */}

					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			)}
		</>
	)
}

export default App
