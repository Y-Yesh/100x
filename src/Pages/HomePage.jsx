import Buttons from "../components/Buttons"
import Logo from "../components/Logo"
import Element from "../components/SidebarElement"
import { User_Profile } from "../components/SidebarElement"
import Items from "../components/UpdatesBarElements"
import search from "../assets/search.svg"
import Seperator from "../components/Seperator"
import Tweets from "../components/Tweet"
import aarushereddy from "../assets/aarushereddy.png"
import Home from "../assets/home-icon.svg"
import Profile from "../assets/profile.svg"


function Side_Toolbar(){
  return (
    <aside className="py-5 px-5 hidden lg:flex lg:flex-col 
     lg:w-[25%] xl:w-[20%] 2xl:w-[17%] lg:justify-between sticky top-0 ">
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

function MainContent(){
    return(
        <div className="lg:w-[45%] xl:w-[40%] 2xl:w-[35%] relative min-h-screen max-h-screen  ">

      <div className="lg:border-r-neutral-700 lg:border-l-neutral-700
        lg:border-r lg:border-l min-h-screen">
      
      <section className="sticky lg:w-full bg-black top-0">
      <header className="pt-11 mx-4 lg:pt-0 ">
        <div className="hidden py-4 w-full pl-4 lg:block font-[Inter] text-[19px] text-Neutral-50  ">Home</div>
        
       
        <section className="flex items-center pb-3 lg:hidden ">
          <img src={aarushereddy} className="rounded-[200px] w-9 h-9" />
         <Logo type="static" position="center"/>
        </section>
      </header>
      <Seperator/>     
      <HomeTabsBar/>
      <Seperator/>  
      </section>   
      <section className="w-[100%]">
      <PostTweet_LargeScreen/>
      <Seperator/> 
      <section className=" ">
      <Tweets username="Name1" timefrompost="32m"/>
      <Tweets username="Name2" timefrompost="10hr"/>
      <Tweets username="Name2" timefrompost="10hr"/>
      <Tweets username="Name3" timefrompost="10hr"/>
      <Tweets username="Name3" timefrompost="10hr"/> 
      </section> 
      <footer className="h-[60px] w-full fixed bottom-0 bg-black lg:relative lg:hidden">
      <Seperator/>  
        <main className=" flex justify-center items-center gap-10 h-full w-full">
          <img src={Home}/>
          <img src={Profile} />
        </main>
      </footer>
      <div className="fixed right-6 bottom-20 lg:absolute lg:hidden">
      <Buttons variation="rounded" height="rounded" width="rounded" color="blue" img="plus"/>
      </div>
      </section>
      </div>
    </div>

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

export default function HomePage(){

return (
<section className=" h-screen debug-screens ">
  <main className="lg:flex lg:w-100%  xl:w-[100%] lg:w-full lg:justify-center bg-black overflow-auto"> 
  <Side_Toolbar/>  
  <MainContent/>
  <UpdatesBar/>
  </main>
</section>
)
}


//Components not used repeadetly..

function HomeTabsBar(){
  return (   
    
    <section className="flex justify-around h-[58px] items-center ">
           <p className="text-[Inter] text-[16px] font-medium 
       text-neutral-400">For you</p>
           <p className="text-[Inter] text-[16px] font-medium 
       text-neutral-50">Following</p>
         </section>
  )
}

function PostTweet_LargeScreen(){
  return(
    <section className="hidden lg:flex py-4 px-4 justify-between w-full ">
        <div className="flex gap-3 items-center w-full">
          <img src={aarushereddy} className="h-12 rounded-[200px]" />
          <input className="w-[40%] h-6 outline-none placeholder:text-[16px]
    placeholder:text-neutral-500 bg-black" placeholder="What's happening " />
        </div>
        <div className>
        <Buttons text="Post" fontcolor="white" fontsize="sm" color="blue" width="xsm" height="md"/>
        </div>
      </section>
  )
}