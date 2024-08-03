// import Check from "../../assets/tick-circle.svg";

export const ListItem = ({ children }) => {
  return (
    <ul>
      <li className={`flex flex-row text-sm text-[#3D433F]`}>
        {/* <img src={Check} alt="list icon" /> */}
        {children}
      </li>
    </ul>
  );
};
