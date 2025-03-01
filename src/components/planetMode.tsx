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
      className={` flex justify-between items-center lg:pl-[30px] lg:pr-[150px]  h-[48px] sm:border sm:border-[#FFFFFF]  font-bold tracking-[2.57px] leading-[25px] uppercase`}
      style={{ backgroundColor: userHovered && !isMobile ? color : "", borderBottom: (userHovered && isMobile ) ? `5px solid ${color}`:'1px solid [#fff]'}}
      key={index}
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
