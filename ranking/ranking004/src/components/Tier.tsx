
export default function Tier(props) {
    function tierelo() {
        if (props.elo >= 5000) {
            return 'bg-sky-300'
        } else if (props.elo >= 4000 && props.elo <= 4999) {
            return 'bg-slate-300'
        } else if (props.elo >= 3000 && props.elo <= 3999) {
            return 'bg-amber-400'
        } else if (props.elo >= 2000 && props.elo <= 2999) {
            return 'bg-neutral-400'
        } else {
            return 'bg-yellow-700'
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
        <div className={`flex text-white rounded ml-4 mr-4 mb-2`}>
            <div className={`h-24 w-24 rounded-full ${tierelo()}`}></div>
            <div className={`flex flex-col items-center  `}>
                <h3>{props.name}</h3>
                <h4>{tiereloname()}</h4>
                <h5>Posição:</h5>
            </div>
        </div>
    )
}
