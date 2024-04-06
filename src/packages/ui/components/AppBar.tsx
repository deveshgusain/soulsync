import Link from "next/link";

export default function () {
    return <div className="px-10 py-3 flex font-semibold text-sm justify-between shadow-md fixed w-full z-50 bg-white">
        <div className="w-20 content-center">
            <Link href={"/"}>
                <img src="small-logo.png" alt="logo" />
            </Link>
        </div>
        <div>
            Features
        </div>
        <div className="text-darkblue">
            <Link href={"/login"} >
                Log in
            </Link>
            <button className="ml-4 p-1 px-3 overflow-hidden bg-mediumturquoise hover:bg-darkslateblue  transition-colors  rounded-3xl transform delay-200  ease-in-out  origin-top text-darkblue	hover:text-white">
                <Link href={"/register"} >
                    Sign Up
                </Link>
            </button>
        </div>
    </div>
}

