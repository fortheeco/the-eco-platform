import React from "react";
import ecoupload from "../../assets/EcoDataCenter/ecoupload.png";
export default function Collaborate() {
  return (
    <div className="w-[100%] relative h-full  mt-[44rem] sm:mt-[34rem] font-nunito">
      <img
        src={ecoupload}
        alt="Upload"
        className="absolute top-0 left-0 w-full h-[25rem] object-cover"
      />
      <div className="relative mt-[2rem] z-10">
        <h1 className="text-center pt-16 text-2xl font-semibold ">
          Collaborate and Build with ECO
        </h1>
        <div class="grid grid-cols-3 justify-items-center gap-4 mt-10">
          <div className="w-[60%]">
            <h1 className="text-xl font-semibold ">Join Us</h1>
            <p className="text-[#474747] font-semibold text-sm pt-2 ">
              A portal that invites users to collaborate with ECO in building
              new digital solutions. Users can submit their project ideas,
              propose collaborations, or join existing projects.
            </p>
          </div>
          <div className="w-[60%]">
            <h1 className="text-xl font-semibold ">Project Submission</h1>
            <p className="text-[#474747] font-semibold text-sm pt-2 ">
              Users can submit a proposal for a digital solution they want to
              develop in partnership with ECO. The submission form will include
              fields for project objectives, target users, expected impact, and
              required resources.
            </p>
          </div>
          <div className="w-[60%]">
            <h1 className="text-xl font-semibold ">JPartner with ECO</h1>
            <p className="text-[#474747] font-semibold text-sm pt-2 ">
              For companies or organizations looking to co-develop solutions, a
              dedicated partnership form will be available. This form will allow
              them to outline their needs, propose joint ventures, or request
              custom solutions from the ECO team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
