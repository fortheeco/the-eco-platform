import React from "react";

export const TierCard = ({
  title,
  Price,
  Access,
  UploadCapability,
  Bgcolor,
  head2,
  text_color,
  head2_bg,
}) => {
  return (
    <div
      className="sm:w-40 hidden sm:block rounded-md shadow-3xl  md:py-4 px-6  relative text-center"
      style={{ backgroundColor: Bgcolor, color: text_color }}
    >
      <h1 className="pt-4">{title}</h1>
      <p
        className="text-sm p-2 mt-2 border shadow-sm rounded-lg "
        style={{ backgroundColor: head2_bg, borderColor: head2_bg }}
      >
        {head2}
      </p>
      <ul className="mt-4">
        <li className="py-4">{Price}</li>
        <li className="py-4">{Access}</li>
        <li className="py-4">{UploadCapability}</li>
      </ul>
    </div>
  );
};

export const TierCard2 = ({
  title,
  Price,
  extratext1,
  extratext2,
  extratext3,
  extratext4,
  Access,
  UploadCapability,
  Bgcolor,
  head2,
  text_color,
  head2_bg,
}) => {
  return (
    <div
      className="w-[60%] text-start block sm:hidden border border-black  rounded-lg shadow-2xl md:py-4 px-6  relative "
      style={{ backgroundColor: Bgcolor, color: text_color }}
    >
      <h1 className="pt-4">{title}</h1>
      <p
        className="text-sm text-center p-2 mt-2 border w-[65%] shadow-sm rounded-lg "
        style={{ backgroundColor: head2_bg, borderColor: head2_bg }}
      >
        {head2}
      </p>
      <ul className="mt-4 ">
        <li className="py-4">{Price}</li>
        <li className="py-4">{Access}</li>
        <li className="py-4">{UploadCapability}</li>
        <li className="py-4">{extratext1}</li>
        <li className="py-4">{extratext2}</li>
        <li className="py-4">{extratext3}</li>
        <li className="py-4">{extratext4}</li>
      </ul>
    </div>
  );
};
