import imgLogo from "../assets/100.svg.svg"
import imgx from "../assets/X.svg.svg"

export default function Logo({type="", size="",position=""}){
    
/* Types - Static and Variable

Static are logos who's size doesn't change with screen size.
Variable are logo types who's size changes with screen size. */


const SizeOf100={
  sm: "w-[40px]",
  default : "",
}
    
const SizeOfX = {
  sm : "w-[12px]",
  default : "",
  
}

const Position = {
  center : "justify-center w-screen",
  default : ""
}

let classesOf100;
let classesOfX; 
let containerClasses;

if(type==="static"){
 classesOf100 = `${SizeOf100[size]}`;
 classesOfX = `${SizeOfX[size]}`;
 containerClasses = `py-3 px-5 flex items-baseline ${Position[position]}`
}
else{
 classesOf100 = `lg:w-[115px] xl:w-[455px] xl:max-w-[75%] sm:w-[75px]`
 classesOfX = `lg:w-[38px] xl:w-[136px] xl:max-w-[25%] sm:w-[25px]`}


if(type==="static"){
    return(
        <div className={containerClasses}>
        <img src={imgLogo} className={classesOf100} />
        <img src={imgx} className={classesOfX} />
      </div>
    )
    }

 return (
      <div className=" xl:mt-0 flex items-baseline justify-center sm:mx-[28px] sm:pl-[7%] sm:justify-normal xl:ml-[0%] xl:justify-center pt-[20px]
xl:w-[65%]">
  <img src={imgLogo} className={classesOf100} />
  <img src={imgx} className={classesOfX} />
</div>
)
}
 
