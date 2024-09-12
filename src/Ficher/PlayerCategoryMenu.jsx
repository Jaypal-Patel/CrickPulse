import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Componets/Redux/Slices/PlaterCategorySlice";

function PlayerCategoryMenu({ player }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const [categories, setCategories] = useState([]);

  const playerCategory = () => {
    const uniqueCategory = [
      ...new Set(player.map((player) => player.profession)),
    ];
    setCategories(uniqueCategory);
  };

  useEffect(() => {
    playerCategory();
  }, [player]);

  return (
    <div className="mx-[140px]">
      <div className="flex gap-4 my-6">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`bg-gray-200 px-3 py-1 rounded-lg text-black font-semibold ${
            selectedCategory === "All" ? "bg-blue-700 text-white" : ""
          }`}
        >
          All
        </button>
        {categories.map((profession, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(profession))}
            className={`bg-gray-200 px-3 py-1 rounded-lg text-black font-semibold ${
              selectedCategory === profession ? "bg-blue-700 text-white" : ""
            }`}
          >
            {profession}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlayerCategoryMenu;
