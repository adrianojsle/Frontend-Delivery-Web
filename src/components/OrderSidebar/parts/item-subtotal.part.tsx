type Props = {
    img: string;
    title: string;
    price: string;
    total: number;
    priceTotal: string;
}

export default function ItemSubtotal({img, title, price, total, priceTotal}: Props) {
    return <div className="flex flex-row mb-4">
        <div className="w-14 py-2 bg-tertiary rounded-lg flex justify-center items-center">
        <img src={img} className="w-10 h-10" />
        </div>
        <div className="flex flex-col grow pl-3 items-start justify-center">
            <span className="font-bold text-xs">
                {title}
            </span>
            <span className="font-light text-xs text-gray-400 mt-1">
                {price}
            </span>
        </div>
        <div className="flex flex-col pl-2 items-start justify-center">
            <span className="font-bold text-xs">
                {total}x
            </span>
        </div>
        <div className="flex flex-col pl-2 items-start justify-center">
            <span className="font-light text-xs text-gray-400">
                {priceTotal}
            </span>
        </div>
    </div>
}