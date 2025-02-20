import planets from "../Planets";
export default function Header() {
  return (
    <>
      <div className="px-[30px] w-[100%] min-h-[10%] border-b border-[#FFFFFF] text-[#FFFFFF] flex md:flex-row flex-col justify-between items-center">
        <h1 className=" text-[28px]">Planets</h1>
            <ul className="flex w-[100%] md:w-[30%]  justify-between cursor-pointer">
                {
                    planets.map((planet)=> <li className="uppercase text-[11px] font-700" key={planet.id}>{planet.name}</li>)
                }
            </ul>
      </div>
      {/* <Outlet /> */}
    </>
  );
}
