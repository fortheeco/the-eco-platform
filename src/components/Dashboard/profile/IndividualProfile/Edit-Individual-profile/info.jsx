import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import api from "../../../../../api/axios";
import { useSelector, useDispatch } from "react-redux";
import {
  openNotificationWithIcon,
  openNotificationWithIconErr,
} from "../../../../common/common";
import { fetchUserData } from "../../../../../appRedux/actions/userProfile";

export const Info = (props) => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  const handleProfileUpdate = async () => {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("hashtags_write", hashtags);
    formData.append("location", location);
    // formData.append("category_id", category.id);
    // formData.append("goal_id", goal.id);

    try {
      // Post the form data to the server
      const response = await api.put("/edit-profile/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      // setHashtags("");
      // setDescription("");
      // setLocation("");

      dispatch(fetchUserData());
      openNotificationWithIcon("Success", "Upload", "success");
    } catch (error) {
      console.log(error);
      openNotificationWithIconErr("Error", "Upload", "error");
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full  text-[#595959] text-sm">
        <p>About</p>
        <textarea
          name="text"
          id=""
          cols="10"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell Us About yourself"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        ></textarea>
      </div>

      <div className="w-full text-[#595959] text-sm">
        <p>Hashtag</p>
        <input
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
          placeholder="Data Science"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="w-full text-[#595959] text-sm">
        <p>Full Name</p>
        <input
          value={props.fullname}
          placeholder="Austin Duke"
          className="w-full cursor-not-allowed font-semibold p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
          disabled={true}
        />
      </div>

      <div className="w-full text-[#595959] text-sm">
        <p>Location</p>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ikeja G.R.A, Lagos"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* <div className="w-full text-[#595959] text-sm">
        <p>Phone Number</p>
        <input
          placeholder="09012345678"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div> */}

      <div
        onClick={() => {
          handleProfileUpdate();
        }}
        className="mx-auto mt-6 bg-ecoGreen text-white px-8 py-2 rounded-md  cursor-pointer"
      >
        Save Changes
      </div>
    </div>
  );
};
