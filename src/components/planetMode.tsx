import { useState } from "react";

interface PlanetModeProps {
  mode: string;
  color: string | undefined;
  setPlanetMode: React.Dispatch<React.SetStateAction<string>>;
}
export default function PlanetMode({ mode, color, setPlanetMode }: PlanetModeProps) {
  const [userHovered, setUserHovered] = useState<boolean>(false);
  console.log(color);
  return (
    <button
      className={`sm:min-w-[350px]   h-[48px] sm:border border-[#FFFFFF]`}
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
      {mode}
    </button>
  );
}
