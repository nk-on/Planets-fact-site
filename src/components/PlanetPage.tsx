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
  if (burgerClicked && isMobile) {
    return <BackgroundMobile />;
  }
  return (
    <>
      {currentPlanet ? (
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] gap-[10px]">
          {isMobile && (
            <div className="mt-[80px] px-[10px] w-[100%] flex justify-between items-center text-[#fff] border-[#fff]  border-b">
              {planetModes.map((mode, index) => {
                return (
                  <PlanetMode
                    mode={mode}
                    index={index}
                    color={currentPlanet?.buttonColor}
                    setPlanetMode={setmode}
                    key={index}
                  />
                );
              })}
            </div>
          )}
          <div className="w-[80%] flex flex-col md:flex-row justify-between items-center">
            <PlanetImage mode={mode}  imageOverview= {currentPlanet.images.overview} currentPlanetImage= {currentPlanetImage} />
            <div className="text-[#fff] md:w-[50%] w-[100%] gap-[60px] flex flex-row items-center justify-between md:flex-col md:items-stretch">
              <div>
                <h1 className="text-[80px]">{currentPlanet?.name}</h1>
                <p className="text-[14px]">
                  {
                    <>
                      {currentPlanetMode && typeof currentPlanetMode === "object" ? (
                        <>
                          {currentPlanetMode.content}{" "}
                          <span className="flex">
                            Source: <Link to={currentPlanetMode.source}>Wikipedia</Link>
                          </span>
                        </>
                      ) : null}
                    </>
                  }
                </p>
              </div>
              {!isMobile && (
                <div className="flex flex-col gap-[10px] w-[350px]">
                  {planetModes.map((mode, index) => {
                    return (
                      <PlanetMode
                        mode={mode}
                        index={index}
                        color={currentPlanet?.buttonColor}
                        setPlanetMode={setmode}
                        key={index}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-[90%] justify-center gap-[10px]">
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
