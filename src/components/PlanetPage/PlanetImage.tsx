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
              className="w-[111px] h-[111px] sm:w-[184px] sm:h-[184px] md:w-[290px]   md:h-[290px]   relative bottom-[30px]  mt-[120px]"
            />
              <img
              src={currentPlanetImage}
              className="w-[129px] h-[129px] absolute lg:bottom-[90px] lg:left-[230px] bottom-[320px]  mt-[120px]"
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