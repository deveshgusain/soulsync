import ProcessCard from "./ProcessCard";

export default function () {
    return <div className="bg-darkslateblue lg:py-24 lg:px-24 p-10 relative ">
        <div className="absolute  bottom-0">
            <img src="shape/shape-17.png" alt="" />
        </div>
        <div className="absolute top-0">
            <img src="shape/shape-18.png" alt="" />
        </div>
        <div className="absolute  top-0 right-0">
            <img src="shape/shape-19.png" alt="" />
        </div>
        <div className="absolute  bottom-0 right-0">
            <img src="shape/shape-20.png" alt="" />
        </div>
        <div className="text-mediumturquoise  text-center  font-semibold ">PROCESS</div>
        <div className="text-white  text-center pt-6 text-5xl font-extrabold  ">Appointment Process</div>
        <div className=" grid grid-cols-1 lg:grid-cols-3  bg-white mt-8 rounded-lg ">
            <ProcessCard imageName="icons/icon-5.png" title="Search Best Online Professional" description="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt." number="01" bottomColor="mediumturquoise" />
            <ProcessCard imageName="icons/icon-6.png" title="View Professional Profile" description="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt." number="02" bottomColor="tomatoOrange" />
            <ProcessCard imageName="icons/icon-7.png" title="Get Instant Doctor Appoinment" description="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt." number="03" bottomColor="mediumturquoise" />
        </div>
        <div className="bg-tomatoOrange"></div>
    </div>
}