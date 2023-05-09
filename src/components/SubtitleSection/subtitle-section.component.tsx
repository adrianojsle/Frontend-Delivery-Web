type Props = {
    firstWord: string;
    secondWord: string;
}

export default function SubtitleSection({ firstWord, secondWord }: Props) {
    return <div>
        <span className={`text-2xl font-bold text-black`}>
            {firstWord}
        </span>
        <span className={`text-2xl font-light text-black`}>
            {secondWord}
        </span>
    </div>
}