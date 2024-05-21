import { styles } from "../../style";
import Intro from "../Signup/Intro";

export const SignUp = () => {
  return <div  className={`${styles.padding} ${styles.flexBetween} items-center mx-auto w-full selection:bg-ecoGreen`}>
    <Intro />
  </div>;
};
