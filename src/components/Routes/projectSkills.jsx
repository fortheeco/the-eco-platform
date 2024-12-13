import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/axios";
import removeIcon from "../../assets/SVG/close-circle.svg";
import { useAuthContext } from "../../hooks/useAuthContext";
import { layout } from "../../style";
import Nav from "../Nav/Nav";

export default function ProjectSkills(props) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const [newSkill, setNewSkill] = useState("");
  const navigate = useNavigate();

  function handleAddSkill() {
    if (newSkill.trim() === "") {
      toast.info("Skill cannot be empty.");
      return;
    }

    const skillExists = props.skills.some(
      (skill) => skill.name.toLowerCase() === newSkill.toLowerCase()
    );

    if (skillExists) {
      toast.error("This skill already exists.");
      return;
    }

    const newSkillObject = {
      name: newSkill,
    };

    props.setSkills([...props.skills, newSkillObject]);
    setNewSkill("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  }

  function handleRemoveSkill(name) {
    const updatedSkills = props.skills.filter((skill) => skill.name !== name);
    props.setSkills(updatedSkills);
  }

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     setError(null);
  //     setIsPending(true);
  //     try {
  //       await api.patch("update_skills/", skills);

  //       toast.success("Skills added successfully!");

  //       setTimeout(() => {
  //         navigate("/");
  //       }, 2000);
  //       setError(null);
  //     } catch (err) {
  //       let logErr =
  //         err?.response?.data?.detail ||
  //         "Something went wrong... please refresh and try again";
  //       setError(logErr);
  //       console.error(err);
  //     } finally {
  //       setIsPending(false);
  //     }
  //   }

  //   useEffect(() => {
  //     const existingSkills = user?.skills || [];

  //     setSkills(existingSkills);
  //   }, []);

  return (
    <>
      <section>
        <label>
          <input
            type="text"
            required
            minLength={2}
            maxLength={80}
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoFocus
            aria-description="add a new skillset"
            placeholder="Add skillset (Press Enter to add more than one skills)"
            className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-2 "
          />
        </label>
        <ul className="w-full flex flex-wrap gap-4 mt-2">
          {props.skills.map((skill) => (
            <li
              key={skill.name}
              className="w-fit whitespace-nowrap flex items-center px-2 py-2 bg-ecoGreen text-white gap-4 rounded-md lg:text-lg capitalize"
            >
              {skill.name}{" "}
              <img
                src={removeIcon}
                title={`Remove ${skill.name}`}
                onClick={() => handleRemoveSkill(skill.name)}
                className="cursor-pointer h-full w-auto object-contain"
              />
            </li>
          ))}
        </ul>
        {props.skills.length === 0 && (
          <small className="text-lg text-center text-nav/50">
            No skill added yet!
          </small>
        )}
        {error && (
          <small className="text-center text-rose-500 font-nunito text-lg font-semibold inline-block w-full mt-2">
            {error}
          </small>
        )}
        {/* <button
            type="submit"
            onClick={handleSubmit}
            disabled={isPending || skills.length === 0}
            className="capitalize bg-ecoGreen text-white w-48 py-3  flex justify-center rounded-md text-lg mx-auto mt-16 mb-4 disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-none focus-within:bg-ecoGreen/70 transition-all"
          >
            {isPending ? "loading" : "save changes"}
          </button> */}
      </section>
    </>
  );
}
