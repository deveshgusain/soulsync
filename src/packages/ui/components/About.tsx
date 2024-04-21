export default function () {
    return <div className="grid md:grid-cols-2 grid-cols-1 h-full">
        <div className="relative p-10 hidden md:block">
            <div className="absolute z-20  left-24">
                <img src="/shape/shape-38.png" alt="" />
            </div>
            <div className="absolute z-10 bg-mediumturquoise  top-20 left-10 w-20 h-20 rounded-full  transition-all duration-500 animate-pulse">
            </div>
            <div className="absolute z-0 ">
                <img src="/shape/shape-37.png" alt="" />
            </div>
            <div className="absolute z-0 top-16 left-24" style={{
                transform: 'unset',
                transition: 'transform 0.6s cubic-bezier(0, 0, 0, 1) 0s',
                willChange: 'transform'
            }}>
                <img src="/resource/about-1.jpg" alt="" />
            </div>
        </div>
        <div className="pt-24 pr-10 pl-10">
            <div className="text-mediumturquoise font-semibold">
                ABOUT SOULSYNC
            </div>
            <div className="text-darkblue  pt-6 text-4xl font-extrabold ">
                Expert online doctor consultations. Anytime, anywhere.
            </div>
            <div className="pt-6 text-lg text-slate-400 pb-40">
                Experience the future of healthcare with our online doctor consultations. Our platform connects you with expert physicians, providing convenient access to quality care from the comfort of your home. With us, you can receive personalized medical advice and treatment plans tailored to your needs, all at your fingertips.
            </div>
        </div>
    </div>
}