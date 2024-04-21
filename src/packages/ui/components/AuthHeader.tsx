import Link from "next/link";

type propType = {
    text: string
};

export default function ({ text }: propType) {
    return <div className=" bg-darkslateblue p-7 rounded-t-lg  ">
        <div className=" pb-4  flex justify-center">
            <Link href={"/"} className="w-44 flex items-center">
                <img src="logo-2.png" alt="logo" />
                <div className="text-white text-4xl font-extrabold">
                    SoulSync
                </div>
            </Link>
        </div>
        <div className="text-white font-extrabold flex justify-center text-3xl">
            {text}
        </div>
    </div>
}
