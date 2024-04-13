import InputBox from "../../InputBox";

export default function () {
    return <div className="bg-white rounded-lg">
        <div className="text-darkblue p-8 text-xl font-extrabold ">
            Change Password
        </div>
        <div className="border"></div>
        <div className="p-8">
            <div className="flex justify-start">
                <div className="mr-6 w-1/2">
                    <InputBox label="Old Password" placeholder="" onChange={() => { }} value="" type="password"/>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-1/2">
                    <InputBox label="New Password" placeholder="" onChange={() => { }} value="" type="password"/>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-1/2">
                    <InputBox label="Confirm Password" placeholder="" onChange={() => { }} value="" type="password"/>
                </div>
            </div>
            <div className="mt-6 flex items-center">
                <button
                    className="w-fit flex justify-center bg-mediumturquoise hover:bg-darkslateblue text-white font-semibold text-lg py-3 px-6 rounded-full  transition-colors duration-500 ease-out "
                >
                    Save Changes&nbsp;

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
                <button
                    className="w-fit flex justify-center bg-gray-400 hover:bg-darkblue text-white font-semibold text-lg py-3 px-6 ml-4  rounded-full  transition-colors duration-500 ease-out "
                >
                    Cancel &nbsp;

                </button>
            </div>
        </div>

    </div>
}