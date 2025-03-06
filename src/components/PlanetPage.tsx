import data from "../data.json";
import { Link, Navigate, useParams } from "react-router";
import PlanetMode from "./planetMode";
import { useState } from "react";
import { useContext } from "react";
import { BurgerContext } from "./Context";
import BackgroundMobile from "./BackgroundMobile";
import PlanetImage from "./PlanetPage/PlanetImage";
import DataCard from "./PlanetPage/dataContainer";
export default function PlanetPage() {
  const { planetName } = useParams();
  const dataArr: Array<"rotation" | "revolution" | "radius" | "temperature"> = [
    "rotation",
    "revolution",
    "radius",
    "temperature",
  ];
  const [mode, setmode] = useState<string>("overview");
  const planetModes = ["overview", "structure", "geology"];
  const currentPlanet = data.find((dataElement) => dataElement.name === planetName);
  const currentPlanetMode = currentPlanet
    ? currentPlanet[mode as "overview" | "structure" | "geology"]
    : "";
  const currentPlanetImage = currentPlanet?.images
    ? currentPlanet.images[mode as "overview" | "structure" | "geology"]
    : "";
  const { burgerClicked, isMobile } = useContext(BurgerContext);
  const [clickedIndex,setClickedIndex] = useState<number>(-1);
  if (burgerClicked && isMobile) {
    return <BackgroundMobile />;
  }
  return (
    <>
      {currentPlanet ? (
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] lg:gap-[100px] gap-[50px]">
          {isMobile && (
            <div className="mt-[40vh] px-[10px] w-[100%] pt-[25px] flex justify-between text-[#fff] border-[#fff]  border-b">
              {planetModes.map((mode, index) => {
               
                return (
                  <PlanetMode
                    mode={mode}
                    index={index}
                    color={currentPlanet?.buttonColor}
                    clickedIndex={clickedIndex}
                    setClickedIndex={setClickedIndex}
                    setPlanetMode={setmode}
                    key={index}
                  />
                );
              })}
            </div>
          )}
          <div className="w-[80%] flex flex-col md:flex-row justify-between items-center">
            <PlanetImage mode={mode}  imageOverview= {currentPlanet.images.overview} currentPlanetImage= {currentPlanetImage} />
            <div className="text-[#fff] md:w-[50%] w-[100%] gap-[20px] flex flex-row items-center justify-between  md:flex-col md:items-stretch">
              <div className="lg:w-[120%] text-center sm:text-left flex flex-col sm:justify-center lg:items-center">
                <h1 className="text-[80px]">{currentPlanet?.name}</h1>
                <div className="text-[14px] sm:block flex flex-col  items-center ml-[-15px] lg:m-auto  text-[#badefe] w-[350px]">
                  {
                    <>
                      {currentPlanetMode && typeof currentPlanetMode === "object" ? (
                        <>
                          {currentPlanetMode.content}
                          <span className="flex text-[#6387b1] gap-[5px]">
                            Source: <span className="underline"><Link to={currentPlanetMode.source}><span className="flex justify-between items-center w-[70px]">Wikipedia <img src="public/assets/icon-source.svg" alt="source" className="w-[12px] h-[12px]" /></span></Link></span>
                          </span>
                        </>
                      ) : null}
                    </>
                  }
                </div>
                {!isMobile && (
                <div className="flex flex-col  gap-[10px] w-[350px]">
                  {planetModes.map((mode, index) => {
                    return (
                      <PlanetMode
                        mode={mode}
                        index={index}
                        color={currentPlanet?.buttonColor}
                        clickedIndex={clickedIndex}
                        setClickedIndex={setClickedIndex}
                        setPlanetMode={setmode}
                        key={index}
                      />
                    );
                  })}
                </div>
              )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[90%]  justify-center gap-[10px]">
            {dataArr.map((data, index) => {
              return (
                <DataCard key = {index} data = {data} value = {currentPlanet[data]} />
              );
            })}
          </div>
        </div>
      ) : (
        <Navigate to="/Mercury" />
      )}
    </>
  );
}
