import Image from "next/image";

export default function Logo(props) {
    return (
        <div className={`
            flex flex-col items-center justify-center 
            w-14 h-16 
            relative
        `}>
            <Image src={props.src} alt={props.title} layout="fill" />
        </div>
    )
}