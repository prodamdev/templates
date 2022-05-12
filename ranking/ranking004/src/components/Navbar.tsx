import Menu from './Menu'
import Logo from './Logo'

export default function Navbar(props) {
    return (
        <div className={`flex flex-col w-full justify-center items-center py-4`}>
            <h1 className={`text-3xl text-white font-extrabold text-center`}>
                {props.title}
            </h1>
            <h2 className={`text-2xl font-semibold text-slate-300 py-2`}>{props.subtitle}</h2>
        </div>
    )
}