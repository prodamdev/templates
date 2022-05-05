import Link from 'next/link'

export default function MenuItem(props) {

    function renderMenuItem() {
        return (
            <a className={`
                flex flex-col justify-center items-center 
                h-10 w-20

                ${props.className}
                `} target={props.target}>
                {props.icon}
                <span className={` font-light`}>
                    {props.text}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            text-white hover:text-slate-50
            hover:bg-slate-50/10
            cursor-pointer
            `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderMenuItem()}
                </Link>
            ) : (
                renderMenuItem()
            )
            }

        </li>
    )
}