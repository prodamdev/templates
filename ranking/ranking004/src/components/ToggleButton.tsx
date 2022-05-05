import useAppData from '../data/hook/UseAppData'
import { MoonSolidIcon, SunSolidIcon, EyeIcon } from './Icons'

export default function ToggleButton(props) {
    const { switchTheme } = useAppData()

    return props.theme === 'dark' ? (
        <div onClick={switchTheme} className={`toggletheme
            hidden sm:flex items-center justify-start
            bg-gradient-to-r from-cyan-400 to-sky-600
            w-14 lg:w-18 h-8 p-1 rounded-full ml-4
            cursor-pointer
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-blue-600
                w-6 h-6
                rounded-full
            `}>
                {EyeIcon}
            </div>
            <div className={`
                hidden lg:flex items-center ml-2
                text-white
            `}>
            </div>
        </div>
    ) : (
        <div onClick={switchTheme} className={`toggletheme
            hidden sm:flex items-center justify-end
            bg-gradient-to-r from-slate-300 to-slate-900
            w-14 lg:w-18 h-8 p-1 rounded-full ml-4 border
            cursor-pointer
        `}>
            <div className={`
                hidden lg:flex items-center mr-2
                text-white
            `}>
            </div>
            <div className={`
                flex items-center justify-center
                bg-white text-black
                w-6 h-6
                rounded-full
            `}>
                {EyeIcon}
            </div>

        </div>
    )
}