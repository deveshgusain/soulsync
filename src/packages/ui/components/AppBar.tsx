import Link from "next/link";

export default function () {
    return <div >
        <div className="px-10 py-3 flex font-semibold text-sm justify-between shadow-md fixed w-full z-50 bg-white items-center">
            <div className="w-28 content-center">
                <Link href={"/"}>
                    <img src="/small-logo.png" alt="logo" />
                </Link>
            </div>
            <div className="text-lg">
                <Link href={"/doctors"} className="hover:text-mediumturquoise">
                    Doctor List
                </Link>
                <Link href={"/dashboard"} className="ml-6 hover:text-mediumturquoise">
                    DashBoard
                </Link>

            </div>
            {/* <div className="text-darkblue text-lg">
                <Link href={"/login"} >
                    Log in
                </Link>
                <button className="ml-4 p-1 px-3 overflow-hidden bg-mediumturquoise hover:bg-darkslateblue  transition-colors  rounded-3xl transform delay-200  ease-in-out  origin-top text-darkblue	hover:text-white">
                    <Link href={"/register"} >
                        Sign Up
                    </Link>
                </button>
            </div> */}
            <div className="flex">
                <div className="border rounded-full p-3 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
                <div className="border-l border-slate-300 ml-3" >
                </div>

                <Link href={"/dashboard"}>
                    <div className="border rounded-full ml-3 p-2 h-11 w-11 bg-slate-700 text-xl text-white text-center">
                        D
                    </div>
                </Link>
            </div>
        </div>
        <div className="pt-14">
            {/* For below Space */}
        </div>
    </div>
}

