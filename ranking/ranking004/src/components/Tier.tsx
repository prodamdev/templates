import { DiamondIcon } from "./Icons"

export default function Tier(props) {
    function tierelo() {
        if (props.elo >= 5000) {
            return (
                <div>{DiamondIcon('#06b6d4', '#67e8f9', 60, 60)}</div>
            )
        } else if (props.elo >= 4000 && props.elo <= 4999) {
            return (
                <div>{DiamondIcon('#94a3b8', '#cbd5e1', 42, 42)}</div>
            )
        } else if (props.elo >= 3000 && props.elo <= 3999) {
            return (
                <div>{DiamondIcon('#f59e0b', '#fbbf24', 36, 36)}</div>
            )
        } else if (props.elo >= 2000 && props.elo <= 2999) {
            return (
                <div>{DiamondIcon('#52525b', '#737373', 28, 28)}</div>
            )
        } else {
            return (
                <div>{DiamondIcon('#713f12', '#854d0e', 24, 24)}</div>
            )
        }
    }
    function tiereloname() {
        if (props.elo >= 5000) {
            return 'Diamante'
        } else if (props.elo >= 4000 && props.elo <= 4999) {
            return 'Platina'
        } else if (props.elo >= 3000 && props.elo <= 3999) {
            return 'Ouro'
        } else if (props.elo >= 2000 && props.elo <= 2999) {
            return 'Prata'
        } else {
            return 'Madeira'
        }
    }
    

    return (
        <div className={`w-full flex text-white`}>
            <div className='w-1/2 flex justify-center items-center'>
                    {tierelo()}
            </div>
            <div className={`w-1/2 flex flex-col justify-start items-stretch text-left`}>
                <h3>{props.name}</h3>
                <h4>{tiereloname()}</h4>
                <h5>Elo:<span className='px-2 font-semibold'>{props.elo}</span></h5>
                <h5>Posição:<span className='px-2 font-semibold'>{props.position}</span></h5>
            </div>
        </div>
    )
}
