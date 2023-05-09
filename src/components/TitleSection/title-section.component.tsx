type Props = {
    firstWord: string;
    secondWord: string;
    size: string;
}

export default function TitleSection({ firstWord, secondWord, size }: Props) {
    return <div>
        <span className={`text-${size} font-bold text-black`}>
            {firstWord}
        </span>
        <span className={`text-${size} font-light text-black`}>
            {secondWord}
        </span>
    </div>
}