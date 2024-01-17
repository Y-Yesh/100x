import Buttons from "../components/Buttons";
import Inputfields from "../components/InputFields";
import cross from "../assets/x.svg"
import LoginPage from "./Login";



export default function Step1(){
return( 
  <>
<div className="absolute z-10">
  <section className="flex flex-col bg-Neutral-1000 md:bg-BlueWash justify-between h-screen debug-screens w-screen md:items-center md:justify-center">
    <main className="px-[16px] bg-Neutral-1000 border border-black rounded-[16px] pt-[56px] debug-screens flex flex-col h-full md:h-fit justify-between md:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:[28%] md:justify-center 2xl:w-[35%] md:px-[31px] md:pt-[21px] md:pb-[30px]  ">
      <div>
        <div className="flex gap-[20px]">
          <img src={cross} />
          <p className="font-[Inter] text-[15px] text-neutral-50">Step 1 of 4</p>
        </div>
        <h1 className="font-[Inter] text-[24px] mt-[24px] px-[12px] text-Neutral-50 font-bold">Create your account </h1>
        <div className="pt-[20px] px-[12px] ">
          <Inputfields text="Name" decorationText="Name" size="standard"/>
        </div>
        <div className="pt-[32px] px-[12px]">
            <Inputfields text="Email" decorationText="Email"/>  
        </div>
        <h2 className="font-bold font-[Inter] text-[15px] mt-[32px] text-Neutral-50 px-[12px]"> Date of birth</h2>
        <p className="font-[Inter] mt-2 text-[14px] text-grey-100x sm:max-w-[90%] px-[12px]"> This will not be shown
          publicly. Confirm your own age, even if this account is for a business, a pet, or something 
          else.</p>
        <section className="mt-[32px] flex gap-3 w-full px-[12px]">
          <Inputfields type="extraStandard" decorationText="Month" size="md" variation="calendar"/>
          <Inputfields type="extraStandard" decorationText="Day" size="sm" variation="calendar"/>
          <Inputfields type="extraStandard" decorationText="Year" size="sm" variation="calendar"/>
        </section>
      </div>
      <footer className="pb-5 flex items-center  w-full px-1 md:px-1 md:pt-[92px]">
      <Buttons variation="default" text="Create Account" height="md" color="white"/>
      </footer> 
    </main>
  </section>
  </div>
</>
)}
