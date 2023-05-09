type Props = {
    title: string;
    active: boolean;
    icon: string;
}

export default function ItemCategory({title, active, icon}: Props) {
    return active ? <div className="flex flex-col justify-center items-center w-24 py-3 bg-secondary rounded-lg mr-5">
        <div className="w-12 h-12 bg-white rounded-lg flex justify-center items-center">
            <img src={icon} className="w-6 h-6" />
        </div>
        <div className="mt-1">
            <span className="text-black text-xs font-semibold">
                {title}
            </span>
        </div>
    </div> : <div className="flex flex-col justify-center bg-white border border-gray-100 items-center w-24 py-3 rounded-lg mr-5">
        <div className="w-12 h-12 border border-gray-200 rounded-lg flex justify-center items-center">
        <img src={icon} className="w-6 h-6" />
        </div>
        <div className="mt-1">
            <span className="text-gray-400 text-xs font-semibold">
                {title}
            </span>
        </div>
    </div>
}