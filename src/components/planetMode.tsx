import { useState } from "react";
import { useContext } from "react";
import { BurgerContext } from "./Context";
interface PlanetModeProps {
  mode: string;
  index: number;
  color: string | undefined;
  clickedIndex: number;
  setClickedIndex: React.Dispatch<React.SetStateAction<number>>;
  setPlanetMode: React.Dispatch<React.SetStateAction<string>>;
}
export default function PlanetMode({
  mode,
  index,
  color,
  clickedIndex,
  setClickedIndex,
  setPlanetMode,
}: PlanetModeProps) {
  const [userHovered, setUserHovered] = useState<boolean>(false);
  const { isMobile } = useContext(BurgerContext);
  return (
    <button
      className={` flex justify-between items-center lg:pl-[30px] lg:pr-[150px]  h-[48px] sm:border sm:border-[#FFFFFF]  font-bold tracking-[2.57px] leading-[25px] uppercase`}
      onClick={() => {
        setPlanetMode(mode);
        setClickedIndex(index);
        console.log(index)
      }}
      style={{
        backgroundColor: userHovered && !isMobile ? color : "",
        borderBottom: (isMobile && clickedIndex === index) ? `5px solid ${color}` : "1px solid #fff",
      }}
      onMouseEnter={() => {
        setUserHovered(true);
      }}
      onMouseLeave={() => {
        setUserHovered(false);
      }}
    >
      <div>{!isMobile && `0${index + 1}`}</div>
      {mode}
    </button>
  );
}
