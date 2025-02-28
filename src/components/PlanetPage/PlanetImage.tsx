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
              className="w-[184px] h-[184px] relative bottom-[120px] md:w-[290px] md:h-[290px] mt-[120px]"
            />
              <img
              src={currentPlanetImage}
              className="w-[184px] h-[184px] absolute lg:bottom-[120px] bottom-[350px] md:w-[290px] md:h-[290px] mt-[120px]"
            />
            </div> : 
            <img
              src={currentPlanetImage}
              className="w-[184px] h-[184px] bottom-[30px] md:w-[290px] md:h-[290px] mt-[120px]"
            />
          }
        </>
    )
}