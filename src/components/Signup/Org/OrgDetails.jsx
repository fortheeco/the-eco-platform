import { useState } from "react";
import userAvatar from "../../../assets/signup/user-avatar.png";
import { layout, styles } from "../../../style";

export default function OrgDetails() {
  const user = {
    name: "John Doe",
    email: "example@gmail.com",
    gender: "male",
    avatar: userAvatar,
  };
  const [avatar, setAvatar] = useState(user.avatar);
  const shortenedName = user.name.split(" ")[0];

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      // Check if file size is more than 2MB
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should not exceed 2MB.");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  }

  function handleBtnClicked() {
    document.getElementById("upload-avatar").click();
  }

  return (
    <section className={`w-full relative ${layout.section}`}>
      <div
        className={`bg-container shadow-xl w-full px-6 ${styles.paddingY} ${styles.paddingX}`}
      >
        <p className="flex absolute right-6 top-8 text-lg">Step 2/3</p>
        <h2 className="font-semibold text-xl capitalize mb-3 lg:text-3xl lg:font-bold">
          welcome, {shortenedName}
        </h2>
        <p className="text-lg text-nav">
          Glad to have you here, help us know you better.
        </p>
        <div className="flex flex-col my-8 lg:justify-start lg:gap-20 lg:flex-row w-full items-center justify-center gap-3">
          <img
            src={avatar}
            alt="user avatar"
            className="w-40 h-40 object-fill object-center rounded-full shadow-sm"
          />
          <label className="flex flex-col items-center lg:items-start gap-4">
            <input
              type="file"
              name="avatar"
              id="upload-avatar"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleBtnClicked}
              title="Add your company logo"
              className="w-fit rounded-md flex items-center px-8 py-3 text-white bg-ecoGreen"
            >
              Upload image
            </button>
            <small className="text-lg text-nav/70">
              Image size shouldn't exceed 2mb
            </small>
          </label>
        </div>
        <hr className="w-full h-[2px] bg-nav/30" />
        <h2 className="font-semibold text-xl mt-8 lg:text-3xl lg:font-bold capitalize mb-3">
          location
        </h2>
        <p className="text-lg text-nav/70 my-6">
          Tell us the location of your office
        </p>
        <label className="flex mt-3 h-12 px-5 gap-3 bg-ecoGreen/10 rounded-md has-[:focus]:border-b-2 has-[:focus]:border-ecoGreen w-full lg:w-1/2">
          <input
            type="text"
            required
            minLength={6}
            maxLength={80}
            title="Your Office address"
            autoComplete="location"
            aria-description="location"
            placeholder="Enter your office address"
            className="bg-transparent outline-0 w-full border-0"
          />
        </label>
        <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-end">
          <label className="flex mt-3 h-12 px-5 gap-3 bg-ecoGreen/10 rounded-md w-full lg:w-1/2">
            <input
              type="text"
              minLength={6}
              maxLength={80}
              autoComplete="location"
              aria-description="location"
              placeholder="Enter your branch office address"
              className="bg-transparent outline-0 w-full border-0"
            />
          </label>
          <span className="italic">(Optional)</span>
        </div>
        <button
          type="submit"
          className="capitalize bg-ecoGreen text-white w-full py-3 lg:w-1/3 flex justify-center rounded-md text-lg mx-auto mt-16 mb-4"
        >
          next
        </button>
      </div>
    </section>
  );
}
