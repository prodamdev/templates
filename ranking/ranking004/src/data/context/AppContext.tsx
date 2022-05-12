import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    theme?: string
    showSidebarInfo?: string
    switchTheme?: () => void
    switchSidebarInfo?: () => void

    politician?: string
    elo?: string
    setPoliticianInfo?: () => void
    eloInfo?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme, setTheme] = useState('')
    const [showSidebarInfo, setShowSidebarInfo] = useState('');
    const [politician, politicianInfo] = useState('');
    useEffect(() => {
        localStorage.setItem('showSidebarInfo', 'false')
    }, [])

    function switchTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    function switchSidebarInfo() {
        const newshowSidebarInfo = showSidebarInfo === 'false' ? 'true' : 'false'
        setShowSidebarInfo(newshowSidebarInfo)
        localStorage.setItem('showSidebarInfo', newshowSidebarInfo)
    }
    function setPoliticianInfo(p) {
        const newPolitician = p
        localStorage.setItem('politicianKey', newPolitician)
        politicianInfo(newPolitician)
    }

    useEffect(() => {
        const themeSaved = localStorage.getItem('theme')
        setTheme(themeSaved)
    }, [])

    useEffect(() => {
        const SidebarInfoSaved = localStorage.getItem('showSidebarInfo')
        setShowSidebarInfo(SidebarInfoSaved)
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            switchTheme,
            showSidebarInfo,
            switchSidebarInfo,
            politician,
            setPoliticianInfo
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext
export const AppConsumer = AppContext.Consumer