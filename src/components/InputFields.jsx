import DropDown from "../assets/chevron-down.svg"
import Tick from "../assets/mdi_tick-circle.svg"
import Eye from "../assets/eye.svg"

export default function Inputfields({text="",type="standard",variation="",position="default",decorationText="",look="default",size="standard"}){
  
/*Types "standard" and "extrastandard" 

  standard - Pure Input Fields 
  extraStandard - Labels with input field and element.

  */

    const labelStyles = {
        standard : "relative py-5 pt-11", 
        extraStandard : "relative h-[56px] py-4 px-[12px] border-[1px] border-neutral-500 rounded-[4px]"
    }
  
    const base = {
        standard : "flex items-center placeholder:font[Inter] font-[Inter] outline-0 placeholder:text-[#737373] text-[#737373] text-[20px] focus:border-Twitterblue-default focus:text-white border-neutral-500 selection:text-white bg-Neutral-1000 border-[1px]  py-4 px-3 rounded-[4px]",
        extraStandard: "bg-Neutral-1000 outline-0 min-w-[18%] max-w-[20%] h-[24px] font-[Inter] placeholder:text-[#737373]",
    }
         
   const Img = {
         calendar : DropDown, //img dropdown for calendar
         account : Tick, //img green tick mark
         eye : Eye
   }

   const Size = {   // All sizings based on the container
    standard : "max-w-[90%] min-w-[85%] md:min-w-[100%]", // Occupies 85% of space min (same as "lg") | But occupies 100% of space from screen size - md
    md : "w-[172px] min-w-[43%] max-w-[45%]", // Occupies 43% of space min
    sm : "w-[82.5px] min-w-[24.5%] max-w-[35%]", // Occupies 24.5% of space min
    lg: "max-w-[90%] min-w-[85%] md:min-w-[95%] md:max-w-[98%]", //Occupies 85% of space min (same as "standard") | But occupies 95% of space from screen size - md
    Alg : "min-w-[98%]"   
}


let classes;
let labelClasses;

if(type === "standard"){ 

 classes = `${base[type]} ${Size[size]}`;
 labelClasses = `${labelStyles[type]}`;
} 
else{
 classes = `${base[type]}`;
 labelClasses = `${labelStyles[type]} ${Size[size]}`;}
   

if(type==="extraStandard"){
    return (
    <label className={labelClasses}>
 <div className="flex justify-between">
  <input type="text" className={classes} placeholder={text}/>
  <img src= {Img[variation]}/>
  </div>
 <Inputdecoration placing={position} look={look} text={decorationText}/>
</label>)
}

return ( 
<label className={labelClasses}>
  <input type="text" className={classes} placeholder={text}/>
 <Inputdecoration placing={position} look={look} text={decorationText}/>
</label>)

}


function Inputdecoration({placing="",text="",look=""}){
    
    const Position = {
        default : "absolute top-[-10px] left-[21px]",
    }

    const Look = {
        default : "bg-black font-[Inter] text-[#737373] text-[12px] px-2"
    }

    const classes = `${Position[placing]} ${Look[look]}`
    
    return (
        <span className={classes}>{text}</span>
    )
}