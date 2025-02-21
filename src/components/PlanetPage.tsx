import data from "../data.json";
import { Link, useParams } from "react-router";
import PlanetMode from "./planetMode";
import { useState } from "react";
export default function PlanetPage() {
  const { planetName } = useParams();
  const dataArr: string[] = ["rotation", "revolution", "radius", "temperature"];
  const [mode, setmode] = useState<string>("overview");
  const planetModes = ["overview", "structure", "geology"];
  const currentPlanet = data.find((dataElement) => dataElement.name === planetName);
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%] gap-[10px]">
      <div className="w-[80%] flex justify-between items-center">
        {<img src={currentPlanet?.images[mode]} />}
        <div className="text-[#fff] w-[50%]">
          <h1 className="text-[80px]">{currentPlanet?.name}</h1>
          <p className="text-[14px]">{<>{currentPlanet[mode].content} <span className="flex">Source:{<Link to={currentPlanet[mode].source}>Wikipedia</Link>}</span></>}</p>
          <div className="flex flex-col">
            {planetModes.map((mode) => {
              return <PlanetMode mode={mode} setPlanetMode={setmode} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex">
        {dataArr.map((data, index) => {
          return (
            <div
              key={Number(index)}
              className=" flex flex-col justify-center items-center w-[255px] h-[128px] border border-[#FFFFFF] text-[#fff]"
            >
              {
                <>
                  <h1>{data}</h1>
                  <p>{currentPlanet[data]}</p>
                </>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
