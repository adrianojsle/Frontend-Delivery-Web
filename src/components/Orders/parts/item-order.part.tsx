type Props = {
    img: string;
}

export default function ItemOrder({img}: Props) {
    return <div className="w-36 py-5 rounded-lg bg-white flex flex-col justify-center items-center mx-2 mb-4">
        <div className="w-24 h-24 rounded-full bg-tertiary flex justify-center items-center">
            <img src={img} className="w-18 h-18" />
        </div>
        <div className="flex flex-col mt-3 items-center">
            <span className="font-bold text-sm">Burguer Triplo</span>
            <span className="font-light text-xs text-gray-400 mt-1">R$ 39,90</span>
        </div>
    </div>
}