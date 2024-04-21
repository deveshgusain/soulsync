type propType = {
    iconSVG: React.ReactNode,
    count: number,
    title: string,
    // description: string,
    topImage: string,
    bottomImage: string
}

export default function ({ iconSVG, count, title, topImage, bottomImage }: propType) {
    return <div className="bg-white px-8 py-14 shadow-xl rounded-lg relative z-0 overflow-hidden">
        <div className="z-10 absolute rounded-full shadow-2xl w-fit p-6 shadow-gray-300 bg-white">
            {iconSVG}
        </div>
        <div className=" text-darkblue text-3xl font-extrabold mt-32">
            {count}
        </div>
        <div className="text-slate-500 pt-1 text-md font-semibold">
            {title}
        </div>
        <div className=" text-slate-500 pt-3 text-md z-10 pb-6">
            {/* {description} */}
        </div>
        <div className="absolute top-0 left-0 z-0">
            <img src={topImage} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 z-0">
            <img src={bottomImage} alt="" className="col" />
        </div>
    </div>
}