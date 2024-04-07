type propTypes = {
    text: string
}
export default function ({ text }: propTypes) {
    return <div className="bg-darkslateblue  ">
        <div className="relative">
            <div className="text-5xl font-extrabold text-white text-center py-10">
                {text}
            </div>
            <div className="absolute top-0 left-36">
                <img src="/shape/shape-70.png" alt="" />
            </div>

            <div className="absolute bottom-0 right-36">
                <img src="/shape/shape-71.png" alt="" />
            </div>
        </div>
    </div>
}