import greydots from "../assets/greydots.svg"

export default function Items({Heading="",Tag="", Data=""}){

  const tag = "#" + Tag.trim();

    return(
        <div className="flex flex-col py-[10px] px-[15px] gap-[6px]">
          <div className="flex justify-between">
            <p className="font-[Inter] text-neutral-500 text-[14px]">{Heading}</p>
            <img src={greydots} />
          </div>   
          <p className="font-bold text-[15px] text-Neutral-50 font-[Inter]">{tag}</p>
          <p className="font-[Inter] text-neutral-500 text-[14px]">{Data}</p>
        </div>
    )
}