import { useState } from "react";
import { useContext } from "react";
import { BurgerContext } from "./Context";
interface PlanetModeProps {
  mode: string;
  index:number,
  color: string | undefined;
  setPlanetMode: React.Dispatch<React.SetStateAction<string>>;
}
export default function PlanetMode({ mode, index, color, setPlanetMode }: PlanetModeProps) {
  const [userHovered, setUserHovered] = useState<boolean>(false);
  const {isMobile} = useContext(BurgerContext)
  return (
    <button
      className={` flex justify-around items-center  h-[48px] sm:border border-[#FFFFFF] font-bold tracking-[2.57px]`}
      style={{ backgroundColor: userHovered ? color : "",}}
      key={Math.floor(Math.random() * 1000)}
      onClick={() => {
        setPlanetMode(mode);
      }}
      onMouseEnter={() => {
        setUserHovered(true);
      }}
      onMouseLeave={() => {
        setUserHovered(false);
      }}
    >
      <div>
       {!isMobile && `0${index+1}`}
      </div>
      {mode}
    </button>
  );
}
