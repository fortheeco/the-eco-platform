import { Outlet } from "react-router-dom";
import { styles } from "../../style";
export const SignUp = ({children}) => {
  return <div  className={`${styles.padding} ${styles.flexBetween} items-center mx-auto w-full selection:bg-ecoGreen`}>
    <Outlet />
  </div>;
};
