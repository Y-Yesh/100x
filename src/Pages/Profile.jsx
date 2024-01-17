import Logo from "../components/Logo"
import Element from "../components/SidebarElement"
import Buttons from "../components/Buttons"
import { User_Profile } from "../components/SidebarElement"
import Tweets from "../components/Tweet"
import arrowLeft from "../assets/arrow-left.svg"
import Items from "../components/UpdatesBarElements"
import search from "../assets/search.svg"
import ProfileElement from "../components/ProfileElement"






function Side_Toolbar(){
    return (
      <aside className="py-5 px-5 hidden lg:flex lg:flex-col 
       lg:w-[25%] xl:w-[20%] 2xl:w-[17%] lg:justify-between sticky top-0">
        <section className="flex flex-col gap-2">
          <Logo type="static"/>
          <Element text="Home" variation="home"/>
          <Element text="Profile" variation="profile"/>
          <div className="py-[15px] px-[10px] ">
      <Buttons variation="default" height="md2" color="blue" fontcolor="white" text="Post"/>
          </div>
        </section>
        <footer className="flex justify-between">
        <User_Profile firstName="aarushe" lastName="reddy"/>
        </footer>
      </aside>
      
    )
  } 


  function UpdatesBar(){
    return(
      <aside className="px-5 py-[10px] lg:flex flex-col hidden gap-[15px]
      w-[28%] xl:w-[24%] 2xl:w-[20%] sticky top-0 ">
        <label tabIndex={-1} className="focus:outline outline-1 
    outline-Twitterblue-default flex 
   justify-start align-middle gap-[15px] px-[16px] py-[10px] w-[100%] 
   box-border h-[39px] bg-[#212327] rounded-[9999px]">
          <img src={search} height="19px" width="19px" />
          <input placeholder="Search" className="bg-[#212327] h-[19px] 
        w-[298px] outline-none" />
        </label>
        <section className="flex flex-col bg-[#212327] border border-[#212327] rounded-[16px] ">
          <div className="py-[10px] px-[15px] font-bold text-[20px] 
    text-Neutral-50 font-[Inter]">What's happening</div>
          <Items Heading="Trending" Tag="Madurai" Data="2,345"/>
          <Items Heading="Trending" Tag="Madurai" Data="2,345"/>
          <Items Heading="Trending" Tag="Madurai" Data="2,345"/>
        </section>
      </aside>
  
    )
  }


  function MainContent(){
return (
    <main className="lg:w-[45%] xl:w-[40%] 2xl:w-[35%] lg:relative lg:flex h-screen  ">
      <div className="lg:border-r-neutral-700 lg:border-l-neutral-700
    lg:border-r lg:border-l h-fit min-h-screen">
        <section className="sticky top-0 bg-black">
        <section className="py-3 px-4 hidden lg:flex items-center gap-5">
          <img src={arrowLeft} />
          <div className="flex flex-col">
            <p className="font-[Inter] font-bold text-[16px] text-Neutral-50">Jane doe</p>
            <p className="font-[Inter] text-neutral-500 text-[10px]">@jane_doe</p>
          </div>
        </section>  
        <ProfileElement/>
        </section>
        <div className="pt-[1px]">
          <Tweets username="Name1" timefrompost="32m"/>
      <Tweets username="Name2" timefrompost="10hr"/>
      <Tweets username="Name2" timefrompost="10hr"/>
      <Tweets username="Name3" timefrompost="10hr"/>
      <Tweets username="Name3" timefrompost="10hr"/> 
      </div>
      <div className="fixed right-6 bottom-[30px] lg:absolute lg:hidden">
      <Buttons variation="rounded" height="rounded" width="rounded" color="blue" img="plus"/>
      </div>
        </div>
    </main>
)

  }

export default function Profile(){

return (

  <section className="bg-black h-screen debug-screens w-screen lg:flex justify-center overflow-auto">
   <Side_Toolbar/>
   <MainContent/>
   <UpdatesBar/>
  </section>

)
}
