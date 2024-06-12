import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard/dashboard.jsx'
import { LandingPage } from './components/Home/LandingPage.jsx'
import Nav from './components/Nav/Nav.jsx'
import { PalsIndex } from './components/Pals/index.jsx'
import Innovation from './components/Routes/Innovation.jsx'
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

const App = () => {
	return (
		<div>
			<Routes>
				{/* <Route path="/" element={<Nav />}> */}
				<Route index element={<LandingPage />} />
				<Route path="login" element={<SignIn />} />

				{/* Pals page */}
				<Route path="pals" element={<PalsIndex />} />
				<Route path="innovation" element={<Innovation />} />

				<Route path="signup" element={<SignUp />}>
					<Route index element={<AccountType />} />

					<Route path="user">
						<Route index element={<Individual />} />
						<Route path="details" element={<UserDetails />} />
						<Route path="skillset" element={<Skillsets />} />
					</Route>

					<Route path="organization">
						<Route index element={<Organization />} />
						<Route path="details" element={<OrgDetails />} />
						<Route path="verification" element={<OrgVerification />} />
					</Route>

					<Route path="verify-email" element={<VerifyEmail />} />
				</Route>
				{/* </Route> */}

				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App
