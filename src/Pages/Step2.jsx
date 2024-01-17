import cross from "../assets/x.svg"
import Buttons from "../components/Buttons"
import Inputfields from "../components/InputFields"

export default function Step2(){

return (
<section className="bg-black z-10 md:bg-BlueWash flex flex-col h-screen md:justify-center md:items-center">
  <main className="md:border border-black rounded-[16px] px-[15px] md:px-[31px] pt-[56px] md:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[28%] debug-screens flex flex-col h-full md:h-fit justify-between bg-Neutral-1000">
    <section className="flex flex-col ">
      <div className="flex gap-[20px]">
        <img src={cross} />
        <p className="font-[Inter] text-[15px] text-neutral-50">Step 2 of 4</p>
      </div>
      <h1 className="md:px-3 font-[Inter] text-[24px] pt-[24px] text-Neutral-50 font-bold">Create your account </h1>
      <div className="flex flex-col mt-5 gap-8 md:pl-3">
      <Inputfields size="lg" type="extraStandard" decorationText="Name" variation="account"/>
      <Inputfields size="lg" type="extraStandard" decorationText="Email" variation="account"/>
      <Inputfields size="lg" type="extraStandard" decorationText="Date of birth" variation="account"/>
    </div>
    </section>
    <footer className="w-full flex justify-center items-center pb-5 md:pl-3 md:pt-[92px]">
    <Buttons text="Sign up" height="lg" color="blue" fontcolor="white"/>
    </footer>
    
  </main>
</section>
)
}
