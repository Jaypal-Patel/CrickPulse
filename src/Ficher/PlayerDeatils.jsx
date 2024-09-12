import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PlayerDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const API = "https://mocki.io/v1/02d7a5a5-f252-4c8a-9aa1-288666a84f0c";

  const [player, setPlayer] = useState(null);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const selectedPlayer = data.find((player) => player.name === name);
      setPlayer(selectedPlayer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, [name]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="px-10 pb-6 bg-gray-100 min-h-screen">
      <div className="flex items-center py-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h1 className="text-[30px] font-bold ml-[40%]">Player Details</h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-start space-x-6">
          <div className="">
            <img
              src={player.imagePath}
              alt="Player"
              className="h-[280px] w-[280px] rounded-lg ml-6 object-cover"
            />
          </div>
          <div className="">
            <table className="w-full text-left border-collapse mb-6">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">Name</td>
                  <td className="py-2 px-4">:</td>
                  <td className="py-2 px-4">{player.name}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">Date of Birth</td>
                  <td className="py-2 px-4">:</td>
                  <td className="py-2 px-4">{player.dateOfBirth}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">City</td>
                  <td className="py-2 px-4">:</td>
                  <td className="py-2 px-4">{player.city}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">Profession</td>
                  <td className="py-2 px-4">:</td>
                  <td className="py-2 px-4">{player.profession}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <table className="w-full text-center border-collapse m-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Format</th>
                <th className="py-2 px-4">Match</th>
                <th className="py-2 px-4">Runs</th>
                <th className="py-2 px-4">Centuries</th>
                <th className="py-2 px-4">Fifties</th>
                <th className="py-2 px-4">Average</th>
                <th className="py-2 px-4">Strike Rate</th>
                <th className="py-2 px-4">Wickets</th>
                <th className="py-2 px-4">Economy</th>
                <th className="py-2 px-4">B. Average</th>
                <th className="py-2 px-4">Catches</th>
                <th className="py-2 px-4">Run Outs</th>
                <th className="py-2 px-4">Stumpings</th>
              </tr>
            </thead>
            {["T20", "ODI", "Test", "Ipl"].map((type) => (
              <tbody key={type}>
                <tr className="border-b">
                  <td className="py-2 px-4">{type}</td>
                  <td className="py-2 px-4">{player.status[type]?.match}</td>
                  <td className="py-2 px-4">
                    {player.status[type]?.totalruns}
                  </td>
                  <td className="py-2 px-4">
                    {player.status[type]?.centuries}
                  </td>
                  <td className="py-2 px-4">{player.status[type]?.fifties}</td>
                  <td className="py-2 px-4">{player.status[type]?.avg}</td>
                  <td className="py-2 px-4">
                    {player.status[type]?.strikerate}
                  </td>
                  <td className="py-2 px-4">{player.status[type]?.wicket}</td>
                  <td className="py-2 px-4">{player.status[type]?.economy}</td>
                  <td className="py-2 px-4">
                    {player.status[type]?.wicketavg}
                  </td>
                  <td className="py-2 px-4">{player.status[type]?.catches}</td>
                  <td className="py-2 px-4">{player.status[type]?.runOuts}</td>
                  <td className="py-2 px-4">
                    {player.status[type]?.stumpings}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
