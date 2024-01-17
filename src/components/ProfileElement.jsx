import aarushereddy from "../assets/aarushereddy.png"
import coverimage1 from "../assets/coverimage1.png"
import Buttons from "./Buttons"
import Linkicon from "../assets/Link icon.svg"
import Calendaricon from "../assets/Calendar icon.svg"





function CoverImage(){

  return(
    <img src={coverimage1} className="lg:mt-[0px] w-full h-[150px]" /> 
    )
}

export default function ProfileElement(){
  
  return (
    <>
      <CoverImage/>
        <img src={aarushereddy} className="absolute top-[115px] lg:top-[150px] left-[20px] border-4 border-black 
   rounded-[200px] w-[68px] h-[68px] lg:h-[136px] lg:w-[136px] " /> 
   <div className=" absolute lg:right-[22px] right-[30px] top-[160px] lg:top-[225px]">
       <Buttons variation="outline" text="Edit profile" height="sm" fontcolor="white" width="none"/>
   </div>
        <section className="pl-5 pr-4 w-[90%] lg:pt-[80px] pt-[40px]">
          <h1 className=" font-bold text-neutral-50 font-[Inter] text-[20px] "> aarushe reddy </h1>
          <p className="text-[15px] font-[Inter] text-neutral-700">@aarushe_reddy</p>
          <p className="text-[16px] font-[Inter] text-Neutral-50 mt-4">Digital Goodies Team - Web &amp; Mobile UI/UX development; Graphics; 
            Illustrations</p>
          <section className="mt-4 flex gap-5">
            <div className="flex">
              <img src={Linkicon} />
              <a className="text-Twitterblue-default ml-2">pixsellz.io</a>
            </div>
            <div className="flex gap-2">
              <img src={Calendaricon} />
              <p className="text-[16px] text-Neutral-500">Joined September 2018</p>
            </div>
          </section>
          <section className="mt-4 flex gap-6 pb-[20px]">
            <div className="flex gap-1">
              <p className="text-[16px] font-[Inter]  text-neutral-50">217</p>
              <p className="text-[16px] font-[Inter] text-neutral-500">Following</p>
            </div>
            <div className="flex gap-1 ">
              <p className="text-[16px] font-[Inter]  text-neutral-50">118</p>
              <p className="text-[16px] font-[Inter] text-neutral-500">Followers</p>
            </div>
          </section>
          </section>
          </>
          )
          }