import Link from 'next/link'
import { DiamondIcon } from './Icons'
import Tier from './Tier'

export default function RankItem(props) {

    return (
        <div onClick={props.onClick} className={`
            flex flex-col justify-center items-center
            w-full
            bg-gradient-to-r from-slate-900 to-slate-700
            border-b border-slate-400
            last:border-none
            p-4
            text-white hover:text-slate-50
            hover:bg-gradient-to-r  
            hover:from-slate-800
            hover:to-slate-600
            cursor-pointer
            `}>
            <Tier elo={props.elo} name={props.name} />
        </div>
    )
}