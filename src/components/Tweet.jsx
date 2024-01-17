import Seperator from "./Seperator";
import Vector from "../assets/Vector.svg"
import comment from "../assets/comment.svg"
import retweet from "../assets/retweet.svg"
import heart from "../assets/heart.svg"
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"

export default function Tweets({username="", timefrompost=""}){

const handle = "@handle";

const TweetMessage = {
    Name1 : "Don't wish for it, work for it.",
    Name2 : "i've seen people absolutely despise auto layout in figma but i think it's a lifesaver- 1. tidies everything nice and compact 2. makes responsive design effortless 3. no manual adjustments post any tweaks 4. saves a tonnn of time",
    Name3 : "Writing gets easier after the first sentence.Lifting gets easier after the first set. People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes"
}


const img = {
    Name1 : avatar1,
    Name2 : avatar2,
    Name3 : avatar3,
}

    return (
        <><section className="px-4 py-2 flex gap-4 w-full">
            <img src={img[username]} className="w-12 h-12 rounded-[200px]" />
            <div className="flex flex-col w-full ">
                <section className="flex gap-2">
                    <p className="text-[Inter] text-Neutral-50 font-medium text-[16px]">{username}</p>
                    <p className="text-[Inter] text-neutral-500 text-[16px]">{`${handle} • ${timefrompost}`}</p>
                </section>
                <p className="text-[Inter] text-Neutral-50 text-[15px]">{TweetMessage[username]}</p>
             <TweetData comments="34" retweets="270" likes="1,869" reach="99.6K"/>
            </div>
        </section><Seperator /></>     

    )
}

function TweetData({comments="",retweets="",likes="",reach=""}){

    return (
        <section className="py-3 flex justify-between">
                    <div className="flex gap-[5px]">
                        <img src={comment} />
                        <p className="text-[Inter] text-[14px] text-Neutral-500">{comments}</p>
                    </div>
                    <div className="flex gap-[5px]">
                        <img src={retweet} />
                        <p className="text-[Inter] text-[14px] text-Neutral-500">{retweets}</p>
                    </div>
                    <div className="flex gap-[5px]">
                        <img src={heart} />
                        <p className="text-[Inter] text-[14px] text-Neutral-500">{likes}</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <div className="flex items-baseline gap-[1.81px]">
                            <div className="w-[1.7px] h-[9.1px] bg-neutral-500" />
                            <div className="w-[1.7px] h-[14.1px] bg-neutral-500" />
                            <div className="w-[1.7px] h-[6.8px] bg-neutral-500" />
                            <div className="w-[1.7px] h-[11.42px] bg-neutral-500" />
                        </div>
                        <p className="text-[14px] text-Neutral-500">{reach}</p>
                    </div>
                    <img src={Vector} />
                </section>
    )
}