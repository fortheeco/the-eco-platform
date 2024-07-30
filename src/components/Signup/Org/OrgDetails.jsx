// import { Link } from 'react-router-dom'
import { PrimaryBtn } from "../../utils/Button";
import { FormInput } from "../../utils/FormInput";
import SplitLayout from "../SplitLayout";

export default function OrgDetails() {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <SplitLayout>
      {/* <article className="w-full bg-slate-200"> */}
      <div className="w-full flex justify-between items-center mb-20">
        <p>Let&apos;s begin your organization Information 👍🏾</p>
      </div>
      <h4 className="text-2xl sm:text-3xl md:text-4xl underline capitalize mt-6 mb-10 block font-bold">
        organization Information
      </h4>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 lg:gap-8"
      >
        <FormInput
          label="organization name"
          minLength={6}
          maxLength={30}
          placeholder="Enter your organization name"
          name="org-name"
        />

        <label className="block w-full">
          <span className="text-lg capitalize">type of organization</span>
          <select
            name="org-type"
            className="flex mt-3 p-2 gap-3 bg-nav/5 rounded-md input-parent transition-all duration-200 outline-0 border-0 w-full pr-2"
            required
          >
            <option value="">Select organization type</option>
            {orgType.map((item) => (
              <option
                className="capitalize"
                value={item}
                key={item.replace(/\s+/g, "")}
              >
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block w-full">
          <span className="text-lg capitalize">mission statement</span>
          <textarea
            required
            minLength={9}
            maxLength={200}
            placeholder="Organization mission statement"
            className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
          />
        </label>

        <label className="block w-full">
          <span className="text-lg capitalize">organization description</span>
          <textarea
            required
            minLength={9}
            maxLength={200}
            placeholder="Provide a brief overview of your organization, its goals and key activities"
            className="outline-0 border-0 w-full resize-none flex mt-3 px-4 h-20 gap-3 bg-nav/5 rounded-md"
          />
        </label>
        <FormInput
          name="year"
          label="year established"
          placeholder="What year was your organization established"
        />
        <FormInput
          name="reg-number"
          label="registration number"
          placeholder="Your organization registration number"
        />

        <div className="w-full flex gap-4 mt-32 mb-10 justify-between items-center">
          <button
            type="button"
            onClick={() => history.back()}
            className="capitalize bg-transparent text-ecoGreen py-3 flex justify-center rounded-full border-2 border-ecoGreen text-lg px-10 focus-within:bg-ecoGreen focus-within:text-white focus-within:shadow-lg  transition-all"
          >
            back
          </button>
          <PrimaryBtn type="submit" content="save & continue" />
        </div>
      </form>
      {/* </article> */}
    </SplitLayout>
  );
}

const orgType = [
  "NGO",
  "non profit",
  "government agency",
  "corporation",
  "educational institution",
  "community group",
  "others",
];
