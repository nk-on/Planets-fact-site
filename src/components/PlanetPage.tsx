import planets from "../Planets";
import { useParams } from "react-router";
import PlanetMode from "./planetMode";
import { useState } from "react";
export default function PlanetPage() {
  const { planetId } = useParams();
  const dataArr: string[] = [
    "rotationTime",
    "revolutionTime",
    "radius",
    "avgTemperature",
  ];
  const [planetMode, setPlanetMode] = useState<string>("overview");
  const currentPlanet = planets.find((planet) => planet.id === Number(planetId));
   return (<div className="flex flex-col justify-center items-center w-[100%] h-[100%] gap-[10px]">
      <div className="w-[100%] flex justify-between items-center">
      {
             currentPlanet?.description.map((planetDescription)=>{
              if(Object.keys(planetDescription)[0] === planetMode){
               return <img src={Object.values(planetDescription)[1]} />
              }
           })
          }
        <div className="text-[#fff] w-[50%]">
          <h1 className="text-[80px]">{currentPlanet?.name}</h1>
          <p className="text-[14px]"></p>
          <div className="flex flex-col">
            {currentPlanet?.description.map((planetMode) => (
              <PlanetMode
                planetMode={Object.keys(planetMode)[0]}
                setPlanetMode={setPlanetMode}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        {currentPlanet?.data.map((planet, index) => {
          const title: string = dataArr[index];
          return (
            <div
              key={Number(planetId)}
              className=" flex flex-col justify-center items-center w-[255px] h-[128px] border border-[#FFFFFF] text-[#fff]"
            >
              {
                <>
                  <h1>{title}</h1>
                  <p>{planet[title]}</p>
                </>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
