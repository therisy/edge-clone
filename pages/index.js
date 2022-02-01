import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState()

  const redirect = [
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
    {
      name: "Instagram"
    },
  ]

  const messageSearch = () => {
    router.push(`/search?q=${value}`)
  }


  return (
    <div>
      <Header></Header>
      <div className="flex-col flex w-full justify-center gap gap-y-16 items-center mt-10">
        <div className="flex items-center gap gap-x-4">
          <img src="/edge.svg" />

          <h1 className="font-base text-5xl"> Microsoft</h1>
        </div>

        <div className="w-1/2 flex items-center">
          <input value={value} onChange={e => setValue(e.currentTarget.value)} className="rounded-l-2xl	w-full p-3 px-5 bg-gri" placeholder="İnternette ara"></input>

          <div className="bg-blue h-12 p-3 px-7 rounded-r-2xl">
            <button onClick={messageSearch}><FaSearch className="text-2xl" /></button>
          </div>
        </div>

        <div className="w-full flex-col flex justify-center items-center">
          <div className="flex w-1/2 justify-center items-center flex-wrap gap gap-x-12 gap-y-6">
            {redirect.map(a => {
              return <Card name={a.name}></Card>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
