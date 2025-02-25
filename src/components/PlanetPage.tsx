import data from "../data.json";
import { Link, useParams } from "react-router";
import PlanetMode from "./planetMode";
import { useState } from "react";
import { useContext } from "react";
import { BurgerContext } from "./Context";
import BackgroundMobile from "./BackgroundMobile";
export default function PlanetPage() {
  const { planetName } = useParams();
  const dataArr: string[] = ["rotation", "revolution", "radius", "temperature"];
  const [mode, setmode] = useState<string>("overview");
  const planetModes = ["overview", "structure", "geology"];
  const currentPlanet = data.find((dataElement) => dataElement.name === planetName);
  const currentPlanetMode = currentPlanet[mode];
  const currentPlanetImages = currentPlanet?.images;
  const { burgerClicked,isMobile } = useContext(BurgerContext);
  if (burgerClicked && isMobile) {
    return <BackgroundMobile />;
  }
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%] gap-[10px]">
      {
        isMobile && <div className="mt-[80px] px-[10px] w-[100%] flex justify-between items-center text-[#fff] border-[#fff]  border-b">
        {planetModes.map((mode,index) => {
          return <PlanetMode mode={mode} setPlanetMode={setmode} key={index} />;
        })}
      </div>
      }
      <div className="w-[80%] flex flex-col md:flex-row justify-between items-center">
        {
          <img
            src={currentPlanetImages[mode]}
            className="w-[184px] h-[184px] md:w-[290px] md:h-[290px] mt-[120px]"
          />
        }
        <div className="text-[#fff] md:w-[50%] w-[100%] gap-[60px] flex flex-row items-center justify-between md:flex-col md:items-stretch">
          <div>
            <h1 className="text-[80px]">{currentPlanet?.name}</h1>
            <p className="text-[14px]">
              {
                <>
                  {currentPlanetMode.content}{" "}
                  <span className="flex">
                    Source:{<Link to={currentPlanet.source}>Wikipedia</Link>}
                  </span>
                </>
              }
            </p>
          </div>
          {
            !isMobile && <div className="flex flex-col">
            {planetModes.map((mode,index) => {
              return <PlanetMode mode={mode} setPlanetMode={setmode} key={index} />;
            })}
          </div> 
          }
        </div>
      </div>
      <div className="flex w-[90%] justify-center gap-[10px]">
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
