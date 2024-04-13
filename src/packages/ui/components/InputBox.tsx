type propType = {
    type?: string,
    label: string,
    placeholder: string,
    value: string,
    onChange: (e: any) => void
}

export default function ({ label, placeholder, value, onChange, type }: propType) {
    return <div className="pt-4 w-full">
        <div>
            <label className="block text-slate-500 font-medium" >
                {label}
            </label>
        </div>
        <div className="pt-1">
            <input
                className="border border-slate-500 text-slate-500  rounded-lg focus:border focus:border-mediumturquoise  block w-full px-4 py-2 focus:outline-none"
                type={type || "text"}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    </div>
}