import Buttons from "../components/Buttons"
import Logo from "../components/Logo"



function MainContent(){
  return (
    <section className=" xl:w-[45%] flex flex-col mx-[28px] sm:pl-[7%] ">
  <h1 className="text-Neutral-50 mt-[202px] font-[Inter] text-[31px] lg:text-[48px]
      xl:text-[48px] font-extrabold xl:min-w-[334px] xl:mt-0 
    xl:max-w-[100%] ">Happening now</h1>
  <h2 className="text-Neutral-50 font-[Inter] mt-[12px] lg:text-[26px]
    text-[16px] 2xl:text-[26px] xl:text-[20px] xl:font-medium">Join today.</h2>
<div className=" mt-[40px] sm:w-[70%] xl:w-[100%]">
<Buttons variation="default" text="Create Account" height="sm" color="white"/>
</div>
  <section className=" mt-[40px] flex items-center sm:w-[70%] xl:w-[100%]">
    <p className="bg-neutral-700 w-[155px] min-w-[46%] md:min-w-[48%] xl:w-[172px] h-[1px]" />
    <p className="mx-[4px] font-[Chirp] text-[16px] text-Neutral-50">
      or</p>
    <p className="bg-neutral-700 w-[155px] min-w-[46%] md:min-w-[48%] xl:w-[172px] h-[1px]" />
  </section>
  <p className="mt-[40px] font-[Inter] text-[15px] lg:text-[20px] 2xl:text-[20px]
     text-Neutral-50 ">Already have an account?</p>
     <div className=" mt-[40px] sm:w-[70%] xl:w-[100%]">
        <Buttons variation="outline" text="Sign In" height="sm" fontcolor="blue"/>
      </div>

    </section>
  )
}

export default function LoginPage(){
    return <div className="bg-black h-screen xl:flex xl:items-center w-screen debug-screens
    xl:justify-center relative">
  <main className=" xl:flex xl:w-[75%] xl:gap-[100px] xl:items-center pt-[56px]
 xl:justify-center">
  <Logo position=""/>
 <MainContent/> 
  </main>
</div>
}