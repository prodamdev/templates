import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Politicians from '../components/Politicians'
import SideBarButton from '../components/SideBarButton'
import SideBarInfo from '../components/SideBarInfo'
import ToggleButton from '../components/ToggleButton'
import useAppData from '../data/hook/UseAppData'

const Home: NextPage = () => {
  const { showSidebarInfo, switchSidebarInfo } = useAppData()
  const { theme, switchTheme } = useAppData()
  const [count, setCount] = useState(0);
  return (
    <div className={`${theme} ${showSidebarInfo} w-full h-full`}>
      <Head>
        <title>Ranking</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex flex-col w-full h-full bg-slate-700`}>
            <Navbar title="Ranking de engajamento dos Políticos" subtitle="Geral" />
            <ToggleButton theme={theme} switchTheme={switchTheme} />
            <SideBarButton />
            <SideBarInfo />
            <Content>
              <div className={`flex flex-col`}>
                <Politicians count={count} setCount={setCount} />
                <div className="w-full flex justify-center items-center">
                  <button type="button" className="w-full h-full block text-slate-100 text-lg font-bold bg-sky-500/25 hover:bg-sky-500/50 p-2" onClick={() => setCount(count + 3)}>+</button>
                </div>
              </div>
            </Content>

          </div >
    </div>
  )
}

export default Home
