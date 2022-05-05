import MenuItem from './MenuItem'
import { LogoutIcon, HomeIcon, SettingsIcon, BellIcon } from './Icons'

export default function Menu(props) {

    return (
        <ul className={`flex justify-end items-center mt-4 pt-4`}>
            <MenuItem url="/" target='_blank' text="Ranking" />
            <MenuItem url="/" target='_blank' text="Outro Link" />
        </ul>
    )
}