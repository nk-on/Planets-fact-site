interface PlanetModeProps {
    mode:string,
    setPlanetMode:React.Dispatch<React.SetStateAction<string>>
}
export default function PlanetMode({mode,setPlanetMode}:PlanetModeProps){
    return(
        <button className="min-w-[350px] h-[48px] border border-[#FFFFFF]" key={Math.floor(Math.random()*1000)} onClick={()=>{
            setPlanetMode(mode);
        }}>{mode}</button>
    )
}