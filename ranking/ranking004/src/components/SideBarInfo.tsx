import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useAppData from "../data/hook/UseAppData";
import Tier from "./Tier";

interface InterfaceSideBarButtonProps {
    politicianKey: any
}

export default function SideBarInfo(props) {
    const { showSidebarInfo, switchSidebarInfo } = useAppData()
    const { politician, politicianInfo } = useAppData()


    const api2 = `https://627840856ac99a9106555a14.mockapi.io/user/${politician}`;
    const fetcher2 = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(api2, fetcher2);
    if (error) <p>Carregamento falhou</p>;
    if (!data) <p>Carregando político safado...</p>;

    
    useEffect(() =>{
        const politicianKey = localStorage.getItem('politicianKey') 
    })
    return showSidebarInfo === 'true' ? (<>
            {data &&
            <div className={`
                fixed
                right-0
                left-0
                top-0 
                w-screen 
                h-screen 
                justify-center 
                items-center 
                text-slate-50 
                bg-slate-900 
                overflow-y-scroll 
                py-4 
                z-0 
                ease-in-out duration-300
                translate-x-0`}>
                    <div>
                        <Tier elo={data.elo} name={data.name} />
                    </div>            
            </div>
            }
        </>
    ) : (
        <div className={`
        fixed
        right-0
        top-0 
        w-screen 
        h-screen 
        justify-center 
        items-center 
        text-slate-50 
        bg-slate-900 
        overflow-y-scroll 
        py-4 
        z-0 
        ease-in-out duration-300
        translate-x-full`}>            
    </div>
    )
}