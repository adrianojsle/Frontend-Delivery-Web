type Props = {
    firstWord: string;
    secondWord: string;
}

export default function TitleSection({ firstWord, secondWord }: Props) {
    return <div>
        <span className={`text-3xl font-bold text-black`}>
            {firstWord}
        </span>
        <span className={`text-3xl font-light text-black`}>
            {secondWord}
        </span>
    </div>
}