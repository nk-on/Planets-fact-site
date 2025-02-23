import { useEffect, useState } from "react";
import data from "../data.json";
import { NavLink } from "react-router";
export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 425);
  useEffect(() => {
    const handleResize = ()=> setIsMobile(window.innerWidth < 425); 
    window.addEventListener("resize", handleResize);
    return ()=> window.removeEventListener('resize',handleResize)
  }, [isMobile]);
  return (
    <>
      <div className="px-[30px] w-[100%] min-h-[10%] border-b border-[#FFFFFF] text-[#FFFFFF] flex md:flex-col sm:flex-row lg:flex-row  justify-between items-center">
        <h1 className=" text-[28px]">Planets</h1>
        {isMobile ? (
          <img src="public/assets/icon-hamburger.svg" alt="hamburger" />
        ) : (
          <ul className="flex w-[100%] md:w-[30%]  justify-between cursor-pointer">
            {data.map((planet, index) => (
              <li className="uppercase text-[11px] font-700" key={index}>
                <NavLink to={planet.name}>{planet.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <Outlet /> */}
    </>
  );
}
