import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard/dashboard.jsx'
import { LandingPage } from './components/Home/LandingPage.jsx'
import Nav from './components/Nav/Nav.jsx'
import { SignIn } from './components/Routes/SignIn.jsx'
import { SignUp } from './components/Routes/SignUp'
import AccountType from './components/Signup/AccountType.jsx'
import Individual from './components/Signup/Individual.jsx'
import OrgDetails from './components/Signup/OrgDetails.jsx'
import OrgVerification from './components/Signup/OrgVerification.jsx'
import Organization from './components/Signup/Organization.jsx'
import Skillsets from './components/Signup/Skillset.jsx'
import UserDetails from './components/Signup/UserDetails.jsx'
import VerifyEmail from './components/Signup/VerifyEmail.jsx'

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Nav />}>
					<Route index element={<LandingPage />} />
					<Route path="sign-in" element={<SignIn />} />

					<Route path="sign-up" element={<SignUp />}>
						<Route index element={<AccountType />} />
						<Route path="individual" element={<Individual />} />
						<Route path="user-details" element={<UserDetails />} />
						<Route path="skillset" element={<Skillsets />} />
						<Route path="organization" element={<Organization />} />
						<Route path="org-details" element={<OrgDetails />} />
						<Route path="org-verification" element={<OrgVerification />} />
						<Route path="verify-email" element={<VerifyEmail />} />
					</Route>
				</Route>

				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App
