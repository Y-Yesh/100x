import cross from "../assets/x.svg"
import Buttons from "../components/Buttons"
import coverimage1 from "../assets/coverimage1.png"
import aarushereddy from "../assets/aarushereddy.png"
import photooutline from "../assets/photo-outline.svg"
import Inputfields from "../components/InputFields"


 
 
 export default function EditProfile (){
 
 
return (

     <section className="bg-black z-10 md:bg-BlueWash h-screen md:flex md:justify-center md:items-center debug-screens">
   <section className="bg-black md:relative border-black rounded-[16px]">
    <main className="px-4 pt-[32px]">
      <header className="flex justify-between">
        <div className="flex gap-5 items-center">
          <img src={cross}/>
          <p className="font-bold text-[16px] text-neutral-50 font-[Inter] 
      min-w-[100px]">Edit profile</p>
        </div>
        
  <Buttons text="Save" width="xsm" color="white" fontsize="sm" rounded="30"/>
      </header>
      <section className="py-3">
        <img src={coverimage1} className="w-full h-[200px] relative" />
        <img src={aarushereddy} className="rounded-[200px] 
  border-[4px] border-black w-20 h-20 
  absolute top-[240px] left-[30px]" />
        <img src={photooutline} className="absolute top-[265px] left-[55px] bg-grey-icon p-1
  rounded-[1000px]" />       
        <img src={photooutline} className="absolute top-[190px] right-[50%] bg-grey-icon rounded-[1000px]
  p-1" />
        <img src={cross} className="rounded-[1000px] bg-grey-icon p-1
  absolute top-[190px] left-[55%]" />
      </section>
      <section className="mt-[20px]">
      <label className="relative m-11">
        <input type="text" className="placeholder:font[Inter] font-[Inter] outline-0
   placeholder:text-neutral-50 text-[#737373] text-[20px] focus:border-Twitterblue-default
    bg-black flex items-center min-w-[99%] py-4 px-3 rounded-[4px] focus:text-white
    border-[1px] border-neutral-500 selection:text-white" placeholder="aarushe reddy"  />
        <span className="bg-black absolute top-[13px] left-[10px] font-[Inter]
   text-[#737373] text-[12px] px-2">Name</span>
      </label>
      <label className="relative m-11 ">
        <input type="text" className="placeholder:font[Inter] font-[Inter] outline-0
     placeholder:text-neutral-50 text-[#737373] text-[20px] focus:border-Twitterblue-default
      bg-black flex items-center min-w-[99%] py-4 px-3 rounded-[4px] focus:text-white
      border-[1px] border-neutral-500  selection:text-white overflow-visible" placeholder="Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations" />
        <span className="bg-black absolute top-[13px] left-[1px] font-[Inter]
     text-[#737373] text-[12px] px-2">Bio</span>
      </label>
      <label className="relative m-11">
        <input type="text" className="placeholder:font[Inter] font-[Inter] outline-0
       placeholder:text-[#737373] text-[#737373] text-[20px] focus:border-Twitterblue-default
        bg-black flex items-center min-w-[99%] py-4 px-3 rounded-[4px] focus:text-white
        border-[1px] border-neutral-500 selection:text-white" placeholder="Location" />
        <span className="bg-black absolute top-[13px] left-[1px] font-[Inter]
       text-[#737373] text-[12px] px-2">Location</span>
      </label>
      <label className="relative m-11">
        <input type="text" className="placeholder:font[Inter] font-[Inter] outline-0
         placeholder:text-[#737373] text-[#737373] text-[20px] focus:border-Twitterblue-default
          bg-black flex items-center min-w-[99%] py-4 px-3 rounded-[4px] focus:text-white
          border-[1px] border-neutral-500 selection:text-white" placeholder="Website" />
        <span className="bg-black absolute top-[13px] left-[1px] font-[Inter]
         text-[#737373] text-[12px] px-2">Website</span>
      </label>
      </section>
    </main>
  </section>
</section>
)
}
