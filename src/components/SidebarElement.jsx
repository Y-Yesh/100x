import Home from "../assets/home-icon.svg"
import Profile from "../assets/profile.svg"
import aarusheReddy from "../assets/aarusheReddy.png"
import Dots3 from "../assets/3dots.svg"

export default function Element({text="",variation=""}){

    const img = {
        home : Home,
        profile : Profile,
    }
    
    return(
        <div className="py-3 px-5 flex gap-5 ">
          <img src={img[variation]} className="h-6 w-6" />
          <p className="text-Neutral-50 text-[19px] font-[Inter] ">{text}</p>
        </div>
    )
}


export function User_Profile({firstName="", lastName=""}){

 const img = {
    aarushereddy : aarusheReddy,
 }

 const profile = firstName.trim().toLocaleLowerCase() + lastName.toLocaleLowerCase().trim();
 const tagName = firstName.trim() + "_" + lastName.trim();

    return(
        <><div className="flex gap-3">
            <img src={img[profile]} className="w-10 h-10 rounded-[200px]" />
            <div className="flex flex-col">
                <p className="text-Neutral-50 font-[Inter] text-[16px] font-bold">{tagName}</p>
                <p className="text-neutral-500 font-[Inter] text-[16px]">{tagName}</p>
            </div>
        </div><div className="flex justify-center items-center">
                <img src={Dots3}/>
            </div></>
    )
}