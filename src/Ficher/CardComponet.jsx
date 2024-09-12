import { FaEye, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToPlayer } from "../Componets/Redux/Slices/PlayerSlice";

const CardComponent = ({ image, name, profession, notify }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const viewPage = () => {
    navigate(`/playerDetails/${name}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64 transform transition-transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover bg-contain"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <div className="flex gap-2 justify-center">
          <button
            className="mt-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
            onClick={viewPage}
          >
            <FaEye />
          </button>
          <button className="mt-2 bg-green-500 text-white rounded-full p-2 hover:bg-green-700 transition-colors">
            <FaPlus
              onClick={() =>
                dispatch(
                  addToPlayer({ name, image, qty: 1, profession }),
                  notify(name)
                )
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
