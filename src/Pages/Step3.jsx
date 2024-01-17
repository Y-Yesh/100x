import Inputfields from "../components/InputFields";
import cross from "../assets/x.svg"
import Buttons from "../components/Buttons";

export default function Step3(){

    return ( 
<section className="z-10 bg-black md:bg-BlueWash flex flex-col h-screen md:justify-center md:items-center">
  <main className="px-[15px] pt-[56px] debug-screens flex flex-col justify-between bg-black
    md:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[28%] h-full md:h-fit w-full md:px-[31px]
    md:border border-black rounded-[16px] md:pt-[21px]">
    <div className="flex flex-col w-full">
      <div className="flex gap-[20px]">
        <img src={cross} />
        <p className="font-[Inter] text-[15px] text-neutral-50">Step 3 of 4</p>
      </div>
      <h1 className=" pl-3 font-[Inter] text-[24px] pt-[24px] text-Neutral-50 font-bold">We sent you a code </h1>
      <p className="pl-3 pt-2 text-[Inter] text-neutral-500 text-[14px] "> Enter it below to verify janedoe@gmail.com</p>
      <label className="relative py-5 mt-10 ml-3">
        <Inputfields type="standard" decorationText="Verfication code" text="Verification code" size="Alg"/>
        <span className="absolute right-2 top-[105%] font-[Inter] 
   text-Twitterblue-default text-[14px] px-2 ">Didn't recieve a code? </span>
      </label>
    </div>
    <footer className="pb-5 mb-5 flex justify-center items-center md:pt-[162px]">
     <Buttons variation="default" height="sm" color="white" fontcolor="black" text="Next"/>
    </footer>
  </main>
</section>

    )
}