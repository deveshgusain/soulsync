import Link from "next/link";
import RatingStar from "./RatingStar";

type propTypes = {
    imageSrc: string,
    name: string,
    description: string,
    totalRating: number,
    totalFeedback: number
}

export default function ({ imageSrc, name, description, totalFeedback, totalRating }: propTypes) {
    return <div className="m-10 shadow-lg w-fit rounded-3xl">
        <Link href={"/"} >
            <div className="w-fit overflow-hidden">
                <img src={imageSrc} alt="doctor image" width={450} className=" transition-transform duration-500 ease delay-0 hover:scale-110" />
            </div>
            <div className="p-10">
                <div className="text-darkblue font-extrabold text-3xl ">
                    {name}
                </div>
                <div className="text-slate-500 text-xl pt-2">
                    {description}
                </div>
                <div className="pt-4 flex text-slate-500 text-xl ">
                    <RatingStar totalRating={totalRating} totalFeedback={totalFeedback} />
                    <div className="pl-2">
                        {`(${totalFeedback})`}
                    </div>
                </div>
            </div>
        </Link>
    </div>
}