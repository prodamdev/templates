import useAppData from '../data/hook/UseAppData'
import {MenuIcon } from './Icons'

export default function SideBarButton(props) {
    const { showSidebarInfo, switchSidebarInfo } = useAppData()

    return showSidebarInfo === 'true' ? (
        <button type="button"
            className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={switchSidebarInfo}
            >
            x
        </button>
    ) : (
        <></>
    )
}