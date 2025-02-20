interface PlanetModeProps {
    planetMode:string,
    setPlanetMode:React.Dispatch<React.SetStateAction<string>>
}
export default function PlanetMode({planetMode,setPlanetMode}:PlanetModeProps){
    return(
        <button className="min-w-[350px] h-[48px] border border-[#FFFFFF]" onClick={()=>{
            setPlanetMode(planetMode);
        }}>{planetMode}</button>
    )
}