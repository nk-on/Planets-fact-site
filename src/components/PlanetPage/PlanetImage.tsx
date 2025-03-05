interface PlanetImageProps  {
    mode:string,
    imageOverview:string,
    currentPlanetImage:string
}
export default function PlanetImage({mode,imageOverview,currentPlanetImage}:PlanetImageProps){
    return (
        <>
         {mode === "geology" ? 
            <div>
              <img
              src={imageOverview}
              className="w-[111px] h-[111px] sm:w-[184px] sm:h-[184px] md:w-[290px]  md:h-[184px]  relative bottom-[120px]  mt-[120px]"
            />
              <img
              src={currentPlanetImage}
              className="w-[290px] h-[290px] md:w-[184px] md:h-[184px] sm:w-[111px] sm:h-[111px]  absolute lg:bottom-[120px] bottom-[350px]  mt-[120px]"
            />
            </div> : 
            <img
              src={currentPlanetImage}
              className="w-[111px] h-[111px] sm:w-[184px] sm:h-[184px] md:w-[290px]   md:h-[290px]   bottom-[30px] mt-[120px]"
            />
          }
        </>
    )
}