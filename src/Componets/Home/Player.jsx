import { useEffect, useState } from "react";
import CardComponent from "../../Ficher/CardComponet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlayerCategoryMenu from "../../Ficher/PlayerCategoryMenu";
import { useSelector } from "react-redux";

function Player() {
  const API = "https://mocki.io/v1/02d7a5a5-f252-4c8a-9aa1-288666a84f0c";

  const profession = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const [player, setPlayer] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPlayer(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const notify = (name) =>
    toast.success(`Add ${name}`, { position: "top-center" });

  return (
    <div className="m-10">
      <ToastContainer />

      <h1 className="text-[36px] font-bold text-center text-gray-800 mb-4">
        Indian Player
      </h1>

      <PlayerCategoryMenu player={player} />

      <div className="flex flex-wrap justify-center">
        {player
          .filter((item) => {
            if (profession === "All") {
              return item.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase());
            } else {
              return (
                profession === item.profession &&
                item.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              );
            }
          })
          .map((e, index) => (
            <CardComponent
              key={index}
              image={e.imagePath}
              name={e.name}
              profession={e.profession}
              notify={notify}
            />
          ))}
      </div>
    </div>
  );
}

export default Player;
