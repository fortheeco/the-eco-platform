import React, { useState, useEffect } from "react";
import LoginNav from "../../../../Nav/Loginnav.jsx";
import { Hero } from "../Hero.jsx";
import { ProfileProjects } from "../ProfileBody.jsx";
import { ProfileRight } from "../profileRight.jsx";
import { layout } from "../../../../../style.js";
import avatar from "../../../../../assets/dashboard/profile/MaleMemojis.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Info } from "./info.jsx";
import { ContactDetails } from "./contactDetails.jsx";
import { AreasOfFocus } from "./areasOfFocus.jsx";
import { CollaborationIntrst } from "./collaborationIntrst.jsx";
import api from "../../../../../api/axios.js";

export const EditIndividualProfileIndex = () => {
  const [activeTab, setActiveTab] = useState("Organization Information");
  const [selectedFiles, setSelectedFiles] = useState([{}]);
  const [ImgData, setImgData] = useState([""]);

  const [userData, setUserData] = useState([]);

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      // setLoadingFetch(true);
      try {
        const response = await api.get("/edit-profile/");

        console.log(response.data);
        setUserData(response.data);
        // setProblems(response.data.results);
        // console.log(response.data);
        //  setData(response.data);
        // setLoadingFetch(false);
      } catch (error) {
        //  setError(error);
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const onFileLoad = (event, index) => {
    const file = event.target.files[0];

    const newSelectedFiles = [...selectedFiles];

    newSelectedFiles[index] = file;

    setSelectedFiles(newSelectedFiles);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newPdfData = [...ImgData];
      newPdfData[index] = reader.result;
      setImgData(newPdfData);
    };
  };

  // const handlePostProblem = async () => {
  //   console.log("I want to make a post");
  //   setIsLoading(true);

  //   const formData = new FormData();

  //   selectedFiles.forEach((file, index) => {
  //     formData.append(`images`, file);
  //   });

  //   formData.append("content", description);
  //    formData.append(
  //      "image",
  //      selectedFiles[0]?.name
  //        ? ImgData[0]
  //        : userData?.image
  //        ? userData?.image
  //        : ''
  //    );
  //   formData.append("title", goal.name);
  //   formData.append("location", location);
  //   formData.append("full_name", userData?.full_name);
  //   formData.append("email", userData?.email);

  //   try {

  //     const response = await api.post("/create_problem/", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log(response);

  //   } catch (error) {
  //     console.log(error);

  //   }
  // };

  return (
    <div className={`w-full h-[100svh] overflow-y-auto bg-gray-50`}>
      <LoginNav />
      <div className="h-[8rem]"></div>
      <div
        className={`${layout.section} h-full flex w-full gap-10 justify-center px-40`}
      >
        <div className="h-full w-[70%] p-8 bg-[#Fff] overflow-y-auto ">
          <p className="text-[20px] font-[500]">Edit Profile</p>

          <div className="flex items-center gap-4 mt-12">
            <img
              src={
                selectedFiles[0]?.name
                  ? ImgData[0]
                  : userData?.image
                  ? userData?.image
                  : avatar
              }
              alt=""
              className="h-28 w-28 rounded-full"
            />
            <div>
              {" "}
              <input
                type="file"
                id={`fileInput0`}
                accept=".png,.jpg,.jpeg"
                onChange={(event) => {
                  onFileLoad(event, 0);
                }}
                style={{
                  display: "none",
                }}
              />
              <label htmlFor={`fileInput0`}>
                <p className="bg-ecoGreen text-white text-sm px-6 py-2 rounded-md cursor-pointer">
                  Edit Image
                </p>{" "}
              </label>
            </div>

            <div className="bg-red p-4  rounded-full text-white cursor-not-allowed">
              <RiDeleteBin6Line />
            </div>
          </div>
          {/* tabs */}
          <div className="mt-6">
            <Info fullname={userData?.full_name} />
          </div>

          {/* {activeTab === "Organization Information" && (
            <div className="flex flex-col lg:flex-row gap-10">
              {" "}
              <OrganisationInfo />
            </div>
          )}

          {activeTab === "Contact Details" && (
            <div className="flex flex-col lg:flex-row gap-10">
              <ContactDetails />
            </div>
          )}

          {activeTab === "Areas of Focus" && (
            <div className="flex flex-col lg:flex-row gap-10">
              <AreasOfFocus />
            </div>
          )}
          {activeTab === "Collaboration Interests" && (
            <div className="flex flex-col lg:flex-row gap-10">
              <CollaborationIntrst />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
