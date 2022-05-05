import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import RankItem from '../components/RankItem'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ranking</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex flex-col w-full bg-slate-700`}>
            <Navbar title="teste" subtitle="subtitle" />
            <Content>
              <div className={`flex flex-col`}>
                <RankItem name="Nome 1" elo="5000" />
                <RankItem name="Nome 2" elo="4000" />
                <RankItem name="Nome 3" elo="3000" />
                <RankItem name="Nome 4" elo="2000" />
                <RankItem name="Nome 5" elo="1000" />
              </div>
            </Content>

          </div >
    </div>
  )
}

export default Home
