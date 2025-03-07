import {  useState } from "react";
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
  function setBg(){
    if(!isMobile && (clickedIndex === index)){
      return `${color}`
    }
    if(userHovered && !isMobile){
      return '#313149' 
    }
  }
  function displayMode(mode:string):string{
    if(mode === 'structure' && !isMobile){
      return `internal ${mode}`
    }
    if(mode === 'geology' && !isMobile){
      return `surface ${mode}`
    }
    return 'overview';
  }
  return (
    <button
      className={` flex items-center lg:pl-[30px] text-[12px]  h-[48px] sm:border sm:border-[#FFFFFF]  font-bold tracking-[2.57px] leading-[25px] uppercase`}
      onClick={() => {
        setPlanetMode(mode);
        setClickedIndex(index);
        
      }}
      style={{
        backgroundColor: setBg(),
        borderBottom: (isMobile && clickedIndex === index) ? `5px solid ${color}` : "1px solid #fff",
      }}
      onMouseEnter={() => {
        setUserHovered(true);
        setBg()
      }}
      onMouseLeave={() => {
        setUserHovered(false);
      }}
    >
      <div>{!isMobile && `0${index + 1}`}</div>
       <div className="lg:pl-[20px]">
        {displayMode(mode)}
       </div>
    </button>
  );
}
