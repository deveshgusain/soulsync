import Link from "next/link";
import RatingStar from "../RatingStar";

type propTypes = {
    imageSrc: string,
    name: string,
    description: string,
    rating: number,
    date: string
}

export default function ({ imageSrc, name, description, rating, date }: propTypes) {
    return <div className="pt-4 w-full">
        <div className="rounded-xl bg-white h-fit">
            <div className="flex p-5">
                <div className="w-fit overflow-hidden rounded-xl">
                    <img src={imageSrc} alt="doctor image" width={180} />
                </div>
                <div className="pl-8">
                    <RatingStar totalRating={rating} totalFeedback={1} size={4} />
                    <div className="flex items-center pt-2"> 
                        <div className="text-darkblue font-semibold text-xl ">
                            {name}
                        </div>
                        <div className="pl-1 text-slate-500 font-semibold ">
                            {`- ${date}`}
                        </div>
                    </div>
                    <div className="text-slate-500  pt-2">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    </div>
}