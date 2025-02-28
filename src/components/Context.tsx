import {  createContext, ReactNode, useState } from "react"
interface BurgerContextType {
    burgerClicked: boolean;
    setBurgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
    isMobile:boolean,
    setIsMobile:React.Dispatch<React.SetStateAction<boolean>>;
}
export const BurgerContext = createContext<BurgerContextType>(
    {
        burgerClicked:false,
        setBurgerClicked:()=> {},
        isMobile:window.innerWidth < 425,
        setIsMobile:()=>{}
    }
);
export default function Provider({children}:{children:ReactNode}){
    const [burgerClicked,setBurgerClicked] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 425);
    return(
        <BurgerContext.Provider value={{burgerClicked,setBurgerClicked,isMobile,setIsMobile}}>
            {children}
        </BurgerContext.Provider>
    )
}