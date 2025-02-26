import data from "../data.json";
import { NavLink } from "react-router";
import { BurgerContext } from "./Context";
import { useContext } from "react";
export default function BackgroundMobile() {
  const { setBurgerClicked } = useContext(BurgerContext);
  return (
    <div className="w-[100%] h-[100%] bg-[#000] flex justify-center items-center">
      <ul className="flex flex-col justify-evenly items-start w-[90%] h-[80%]">
        {data.map((planet, index) => (
          <li
            className="uppercase text-[11px] font-700 text-[#fff] flex justify-between w-[95%]"
            key={index}
            onClick={() => {
              setBurgerClicked(false);
            }}
          >
            <div className="flex">
              <div
                className='w-[20px] h-[20px] rounded-[50%]'
                style={{backgroundColor:planet.color}}
              ></div>
              <NavLink to={`/${planet.name}`}>{planet.name}</NavLink>
            </div>
            <img src="public/assets/icon-chevron.svg" alt="chevron" />
          </li>
        ))}
      </ul>
    </div>
  );
}
