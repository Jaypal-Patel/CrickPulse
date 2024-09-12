import React from "react";
import { FaEye } from "react-icons/fa";

import { coachingStaff } from "../../Data/TeamStap";

function TeamStap() {
  return (
    <div className="p-6   min-h-screen">
      <h1 className="text-[35px] font-bold text-center text-black mb-8">
        Coaching Staff
      </h1>
      <div className="flex flex-wrap justify-center ">
        {coachingStaff.map((coach, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64 transform transition-transform hover:scale-105"
          >
            <img
              src={coach.imgSrc}
              alt={coach.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {coach.name}
              </h2>
              <p className="text-gray-600">{coach.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamStap;
