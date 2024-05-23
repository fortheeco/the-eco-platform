import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/dashboard.jsx";
import { LandingPage } from "./components/Home/LandingPage.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { SignIn } from "./components/Routes/SignIn.jsx";
import { SignUp } from "./components/Routes/SignUp";
import AccountType from "./components/Signup/AccountType.jsx";
import Individual from "./components/Signup/Individual.jsx";

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
          </Route>
          
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
