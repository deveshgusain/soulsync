export default function ({ text }: { text: string }) {
    return <div className="flex items-center pt-3">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  " />
        <label htmlFor="default-checkbox" className="ms-2 text-md  text-gray-900 ">{text}</label>
    </div>
}