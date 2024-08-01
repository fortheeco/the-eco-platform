import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/dashboard.jsx";
import { LandingPage } from "./components/Home/LandingPage.jsx";
import { PalsIndex } from "./components/Pals/index.jsx";
import EditSkills from "./components/Routes/EditSkills.jsx";
import ForgotPassword from "./components/Routes/ForgotPassword.jsx";
import Innovation from "./components/Routes/Innovation.jsx";
import NotFound from "./components/Routes/NotFound.jsx";
import ResetPassword from "./components/Routes/ResetPassword.jsx";
import { SignIn } from "./components/Routes/SignIn.jsx";
import { SignUp } from "./components/Routes/SignUp";
import ChangePassword from "./components/Settings/ChangePassword.jsx";
import DeleteAccount from "./components/Settings/DeleteAccount.jsx";
import PrivacySettings from "./components/Settings/PrivacySettings.jsx";
import ResetAccountData from "./components/Settings/ResetAccountData.jsx";
import AccountSettings from "./components/Settings/index.jsx";
import ImpactAndReact from "./components/Signup/Innovation/ImpactReact.jsx";
import InnovationDetails from "./components/Signup/Innovation/InnovationDetails.jsx";
import InnovationHub from "./components/Signup/Innovation/InnovationHub.jsx";
import OrgInfo from "./components/Signup/Innovation/OrgInfo.jsx";
import Payments from "./components/Signup/Innovation/Payment.jsx";
import Terms from "./components/Signup/Innovation/Terms.jsx";
import AreaOfFocus from "./components/Signup/Org/AreaOfFocus.jsx";
import CollabInterest from "./components/Signup/Org/CollabInterest.jsx";
import OrgContact from "./components/Signup/Org/Contact.jsx";
import AccountType from "./components/Signup/AccountType.jsx";
import OrgDetails from "./components/Signup/Org/OrgDetails.jsx";
import OrgVerification from "./components/Signup/Org/OrgVerification.jsx";
import Organization from "./components/Signup/Org/Organization.jsx";
import Individual from "./components/Signup/User/Individual.jsx";
import Skillsets from "./components/Signup/User/Skillset.jsx";
import UserDetails from "./components/Signup/User/UserDetails.jsx";
import VerifyEmail from "./components/Signup/VerifyEmail.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import ErrorElement from "./utils/ErrorElement.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import { Profile } from "./components/Dashboard/profile/profile.jsx";
import { EditProfileIndex } from "./components/Dashboard/profile/Edit-Profile/index.jsx";
import { IndividualProfile } from "./components/Dashboard/profile/IndividualProfile/profile.jsx";
import { EditIndividualProfileIndex } from "./components/Dashboard/profile/IndividualProfile/Edit-Individual-profile/index.jsx";
import { OthersProfileById } from "./components/Dashboard/profile/otherProfile/profile.jsx";
import { FeedsHome } from "./components/Dashboard/Feeds/feeds.jsx";

const App = () => {
  const { authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <Routes>
          {/* <Route path="/" element={<Nav />}> */}
          <Route index element={<LandingPage />} />

          {/* Pals page */}
          <Route path="pals" element={<PalsIndex />} />
          {/* <Route path="innovation" element={<Innovation />} /> */}

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
            <Route path="innovation">
              <Route index element={<InnovationHub />} />
              <Route path="information" element={<OrgInfo />} />
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfileIndex />} />
          <Route
            path="/edit/profile-individual"
            element={<EditIndividualProfileIndex />}
          />
          <Route path="/profile/:id" element={<OthersProfileById />} />
          <Route path="/individual-profile" element={<IndividualProfile />} />

          <Route path="/your-Eco" element={<FeedsHome />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default App;
