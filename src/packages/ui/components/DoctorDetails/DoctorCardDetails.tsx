import Link from "next/link";
import RatingStar from "../RatingStar";

type propTypes = {
    imageSrc: string,
    name: string,
    description: string,
    totalRating: number,
    totalFeedback: number
}

export default function ({ imageSrc, name, description, totalFeedback, totalRating }: propTypes) {
    return <div className="pb-6 w-full">
        <div className="rounded-3xl bg-white h-fit">
            <div className="flex p-5">
                <div className="w-fit overflow-hidden rounded-3xl">
                    <img src={imageSrc} alt="doctor image" width={150} />
                </div>
                <div className="pl-8">
                    <div className="text-darkblue font-extrabold text-3xl ">
                        {name}
                    </div>
                    <div className="text-slate-500 text-xl pt-2">
                        {description}
                    </div>
                    <div className="pt-4 flex text-slate-500 text-xl ">
                        <RatingStar totalRating={totalRating} totalFeedback={totalFeedback} size={6}/>
                        <div className="pl-2">
                            {`(${totalFeedback})`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}