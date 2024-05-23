import AuthNav from "../Signup/AuthNav";
import SplitLayout from "../Signup/SplitLayout";

export const SignIn = () => {
  return <SplitLayout>
    <div className="w-full"><AuthNav/></div>
  </SplitLayout>;
};
