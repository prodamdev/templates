import Link from 'next/link'
import Tier from './Tier'

export default function RankItem(props) {

    return (
        <div onClick={props.onClick} className={`
            flex flex-col justify-center items-center
            w-full
            p-4
            text-white hover:text-slate-50
            hover:bg-slate-50/10
            cursor-pointer
            `}>
            {props.icon}
            <Tier elo={props.elo} name={props.name} />
        </div>
    )
}