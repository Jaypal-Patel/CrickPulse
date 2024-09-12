import React from "react";

function AddToPlayer({ id, name, image }) {
  return (
    <div className="flex flex-col items-center justify-center" key={id}>
      <div>
        <img
          src={image}
          className="w-[160px] h-[160px] object-cover rounded-full"
        />
      </div>

      <div>
        <p className=" mt-1">{name}</p>
      </div>
    </div>
  );
}

export default AddToPlayer;
