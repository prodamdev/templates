import Menu from './Menu'
import Logo from './Logo'

export default function Navbar(props) {
    return (
        <div className={`flex flex-col w-full justify-center items-center`}>
            <h1 className={`text-3xl text-white font-extrabold mr-4`}>
                <span className={``}>
                    {props.title}
                </span>
            </h1>
            <h2 className={`text-2xl font-semibold text-slate-300`}>{props.subtitle}</h2>
            <Menu />
        </div>
    )
}