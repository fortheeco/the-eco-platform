import React from "react";
import { TierMemeberships } from "../data";

export const TierCard = ({
  title,
  title_bg,
  Price,
  Access,
  iconUrl,
  UploadCapability,
  Bgcolor,
  head2,
  text_color,
  head2_bg,
  price_text,
}) => {
  return (
    <div
      className="w-40 rounded-md shadow-3xl  md:py-4 px-6  relative text-center"
      style={{ backgroundColor: Bgcolor, color: text_color }}
    >
      <h1>{title}</h1>
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
