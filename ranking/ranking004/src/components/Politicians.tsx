import axios from "axios";
import useSWR from "swr";
import SortBy from 'sort-by';
import Tier from "./Tier";
import useAppData from "../data/hook/UseAppData";
import { useState } from "react";
import SideBarInfo from "./SideBarInfo";

var sortBy = require('sort-by');

export default function Politicians({ count, setCount }) {
  const { showSidebarInfo, switchSidebarInfo } = useAppData()
  const { setPoliticianInfo } = useAppData()
  //const api = `https://randomapi.com/api/3e680305f58428413e478802ec59290f?results=6`;
  const api = `https://627840856ac99a9106555a14.mockapi.io/user`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(api, fetcher);
  //localStorage.setItem("data", data);
  //data.results.sort(sortBy('-elo'));
  if (error) <p>Carregamento falhou</p>;
  if (!data) <p>Carregando políticos safado...</p>;

  function loadPoliticianInfo(key) {
    switchSidebarInfo?.();
    setPoliticianInfo?.(key);
  }

  return (
    <>
        {data &&
          data.sort(sortBy('-elo')).map((item, index) => (
            <div key={item.key} className={`
            flex flex-col justify-center items-center
            w-full
            bg-gradient-to-r from-slate-900 to-slate-700
            border-b border-slate-400
            last:border-none
            p-4
            text-white hover:text-slate-50
            hover:bg-gradient-to-r  
            hover:from-slate-800
            hover:to-slate-600
            cursor-pointer
            `}>
              <button type="button" className="flex text-4xl text-white items-center cursor-pointer" onClick={() => loadPoliticianInfo(item.key)}> {item.name} </button>
              <Tier elo={item.elo} name={item.name} position={index + 1} />
            </div>
          ))}
    </>
  );
}

