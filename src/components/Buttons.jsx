import Add from "../assets/Add.svg"


export default function Buttons({variation="default",text="",width="fit",height="sm",color="none",fontcolor="black",fontsize="default",img="plus",rounded="65"}){
    
    const baseState =  "font-[Inter]  font-bold flex items-center justify-center shadow-default px-[20px]";
    
 /*  <button className=" bg-Twitterblue-default rounded-[32px] flex items-center
     justify-center fixed right-6 bottom-20 lg:absolute lg:hidden">
        <img src="../public/images/Add.svg" /> 
      </button> */
    const Rounded = {
        "30" : "rounded-[30px]",
        "65" : "rounded-[65px]"
    }

    const FontSize = {
        default : "text-[16px]",
        sm : "text-[14px]"
    }

    const Variation = {
        default : " hover:bg-neutral-200 disabled:bg-neutral-500",
        outline : " border border-signupstroke",
        rounded : {
            "Img" : {
                plus : Add
            }           
        }
    };

    const Width = {
             fit :"w-[97%] md:w-[100%]",
             xsm : "w-[78px]" ,
             rounded : ""
    }

    const Height = {
        xsm : "py-1",
        sm : "py-2",
        md : "py-3",
        md2 : "py-[15px]",
        lg : "py-5",
        rounded : "p-4"
    }

    const Color = {
        blue : "bg-Twitterblue-default",
        white : "bg-neutral-50",
        none : ""
    }

    const textColor = {
          black :"text-Neutral-1000",
          white :"text-Neutral-50",
          blue :"text-Twitterblue-default"
    }
    
    let classes;
    
    classes = `${baseState} ${Variation[variation]} ${Width[width]} ${Height[height]} ${Color[color] } ${textColor[fontcolor]} ${FontSize[fontsize]} ${Rounded[rounded]}`;


    if(variation==="rounded" && text===""){
        return (
            <button className={classes}>
        <img src={Variation[variation]["Img"][img]}/> 
      </button> 
       )
       
    }

    return <button className ={classes}>{text}</button>
}


