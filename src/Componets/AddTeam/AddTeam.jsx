import React from "react";
import { MdDelete } from "react-icons/md";
import AddToPlayer from "./AddToPlayer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AddTeam = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const playerItem = useSelector((state) => state.player.player);
  const playerQty = playerItem.length;

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-between  w-full h-[60px]  px-5 py-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h1 className="text-[30px] font-bold">Dream Playing 11</h1>
        <button className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer">
          <MdDelete size={35} />
        </button>
      </div>

      <div className="h-[600px] justify-center items-center mx-10 mb-10 py-16 bg-white">
        <div className="flex justify-center items-center gap-7 flex-wrap px-[10%]">
          {playerItem.map((item) => (
            <AddToPlayer
              key={item.id}
              id={item.id}
              name={item.task.name}
              image={item.task.image}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <h1 className="text-[25px] font-bold">Total : {playerQty} Player</h1>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
