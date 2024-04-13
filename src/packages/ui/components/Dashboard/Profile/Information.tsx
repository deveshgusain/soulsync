import InputBox from "../../InputBox";

export default function () {
    return <div className="bg-white rounded-lg">
        <div className="text-darkblue p-8 text-xl font-extrabold ">
            Basic Information
        </div>
        <div className="border"></div>
        <div className="p-8">
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="First name" placeholder="Enter first name" onChange={() => { }} value="" />
                </div>
                <InputBox label="Last name" placeholder="Enter Last name" onChange={() => { }} value="" />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Email" placeholder="Enter your Email" onChange={() => { }} value="" />
                </div>
                <InputBox label="Date of birth" placeholder="Date of birth" onChange={() => { }} value="" />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Gender" placeholder="Your gender" onChange={() => { }} value="" />
                </div>
                <InputBox label="Age" placeholder="Your age" onChange={() => { }} value="" />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Mobile number" placeholder="Your phone" onChange={() => { }} value="" />
                </div>
                <InputBox label="Address" placeholder="Address" onChange={() => { }} value="" />
            </div>
            <div className="flex justify-start">
                <div className="mr-6 w-full">
                    <InputBox label="Blood Group" placeholder="Blood Group" onChange={() => { }} value="" />
                </div>
                <InputBox label="Marital status" placeholder="Marital status" onChange={() => { }} value="" />
            </div>
            <div className="pt-4">
                <div className="block text-slate-500 font-medium">
                    Note to the doctor (optional)
                </div>
                <textarea name="message" rows={6} placeholder="Write your note...." className="min-w-full border rounded-lg border-slate-500 p-3 mt-2" ></textarea>
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