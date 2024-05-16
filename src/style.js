export const styles = {
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexBetween: "flex justify-between ",

  flexCenter: "flex items-center",

  paddingX: "sm:px-12 px-6 lg:px-20",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-6",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  shadow: `shadow-md `,
};

export const layout = {
  section: ` ${styles.padding} `,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
};
