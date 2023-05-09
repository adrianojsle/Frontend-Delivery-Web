type Props = {
    icon: string;
    label: string;
    active: boolean;
}

export default function Menu({ icon, label, active }: Props) {
    return active ? <div className="w-20 py-3 bg-primary flex flex-col justify-center items-center rounded-xl shadow-md mb-5">
        <img src={icon} className="w-6 h-6" />
        <span className="text-xs text-white mt-1">{label}</span>
    </div> : <div className="w-20 py-2 flex flex-col justify-center items-center mb-4">
        <img src={icon} className="w-6 h-6" />
        <span className="text-xs text-gray-400 mt-1">{label}</span>
    </div>
}