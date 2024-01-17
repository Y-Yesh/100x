import Inputfields from "../components/InputFields"
import Buttons from "../components/Buttons"
import cross from "../assets/x.svg"


export default function Step4(){

return (

  <section className="bg-black md:bg-BlueWash flex flex-col justify-between h-screen md:items-center md:justify-center">
  <main className="px-[15px] pt-[56px] debug-screens flex flex-col justify-between md:px-[31px]
    md:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[28%] h-full md:h-fit md:border border-black rounded-[16px] bg-black w-full">
    <div className="flex flex-col">
      <div className="flex gap-[20px]">
        <img src={cross} />
        <p className="font-[Inter] text-[15px] text-neutral-50">Step 4 of 4</p>
      </div>
      <h1 className="pl-3 font-[Inter] text-[24px] mt-[24px] text-Neutral-50 font-bold">You'll need a password</h1>
      <p className="pl-3 pt-2 text-[Inter] text-neutral-500 text-[14px] "> Make sure its 8 characters or more</p>
      
      <div className="flex pl-3 mt-8">
      <Inputfields type="extraStandard" variation="eye" text="Password" decorationText="Password"/>
      </div>
    </div>
    <footer className="mb-5 pb-5 flex justify-center items-center md:pt-[162px]">
      <Buttons text="Next" color="white" fontcolor="black" height="sm"/>    
    </footer>
  </main>
</section>


)
}