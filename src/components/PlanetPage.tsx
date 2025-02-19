import planets from "../Planets";
const arr = [1,2,3,4]
export default function PlanetPage() {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%] gap-[10px]">
      <div className="w-[100%] flex justify-between items-center">
        <img src="public/assets/planet-earth.svg" alt="planet-image"></img>
        <div className="text-[#fff] w-[50%]">
          <h1 className="text-[80px]">Earth</h1>
          <p className="text-[14px]">
            Much of the Venusian surface appears to have been shaped by volcanic activity.
            Venus has several times as many volcanoes as Earth, and it has 167 large
            volcanoes that are over 100 km (60 mi) across. The only volcanic complex of
            this size on Earth is the Big Island of Hawaii.
          </p>
          <div className="flex flex-col"> 
            <button className="min-w-[350px] h-[48px] border border-[#FFFFFF]">overview</button>
            <button  className="min-w-[350px] h-[48px] border border-[#FFFFFF">internal structure</button>
            <button  className="min-w-[350px] h-[48px] border border-[#FFFFFF">surface geology</button>
          </div>
        </div>
      </div>
      <div className="flex">
        {
            arr.map(()=>{
                return <div className="w-[255px] h-[128px] border border-[#FFFFFF"></div>
            })
        }
      </div>
    </div>
  );
}
