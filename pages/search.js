import { useState, useEffect } from "react";
import ResultCard from "../components/ResultCard";
import { FaAlignJustify, FaBell, FaBullhorn, FaCaretDown, FaImage, FaMap, FaPlay, FaSearch } from "react-icons/fa";
import { apiKey } from "../config.json";
import { useRouter } from "next/router";

export default function Search() {

    const CONTEXT_KEY = "2465c4ae21d4f1548";
    const [value, setValue] = useState();
    const [data, setData] = useState();
    const router = useRouter();

    const { q } = router.query

    const messageSearch = async () => {
        let txt = !value ? (q != "undefined" ? (!q ? "github" : q) : "github") : value;

        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${CONTEXT_KEY}&q=${txt}`
        )
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
        router.push(`/search?q=${txt}`)
    }

    useEffect(() => {
        messageSearch();
    }, [])

    return (
        <div>
            <div className="flex justify-between h-24 p-8 items-center w-full bg-headerbg pt-3">
                <div className="flex px-20 w-[70%] ml-4">
                    <img width={40} height={40} src="https://duckduckgo.com/assets/logo_header.alt.v108.svg"></img>
                    <div className="flex-col w-[70%] mt-6 ml-8">
                        <div className="flex items-center justify-center">
                            <input value={value} onChange={e => { setValue(e.currentTarget.value); }} className="rounded-l-xl w-full p-3 px-5 bg-input" placeholder="İnternette ara"></input>
                            <div className="bg-input hover:bg-blue h-12 p-3 w-auto rounded-r-2xl">
                                <button onClick={messageSearch}><FaSearch className="text-xl" /></button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-6">
                                <div className="cursor-pointer hover:text-selected hover:underline  hover:decoration-slate-400	 flex items-center gap-1">
                                    <FaSearch />
                                    <p className="text-sm">All</p>
                                </div>

                                <div className="cursor-pointer hover:text-selected hover:underline  hover:decoration-slate-400 flex items-center gap-1">
                                    <FaImage />
                                    <p className="text-sm">Images</p>
                                </div>

                                <div className="cursor-pointer hover:text-selected hover:underline  hover:decoration-slate-400 flex items-center gap-1">
                                    <FaPlay />
                                    <p className="text-sm">Videos</p>
                                </div>

                                <div className="cursor-pointer hover:text-selected hover:underline  hover:decoration-slate-400 flex items-center gap-1">
                                    <FaBell />
                                    <p className="text-sm">News</p>
                                </div>

                                <div className="cursor-pointer hover:text-selected hover:underline  hover:decoration-slate-400 flex items-center gap-1">
                                    <FaMap />
                                    <p className="text-sm">Maps</p>
                                </div>
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <p className="text-sm">Settings</p>
                                <FaCaretDown></FaCaretDown>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center items-center gap-9">
                    <div className="flex items-center cursor-pointer text-muted hover:text-white">
                        <p className="text-sm">Privacy, simplified</p>
                        <FaCaretDown className="ml-2"></FaCaretDown>
                    </div>

                    <div className="flex items-center cursor-pointer text-muted hover:text-white">
                        <FaBullhorn className="text-lg"></FaBullhorn>
                        <FaCaretDown className="ml-2"></FaCaretDown>
                    </div>
                    <div className="flex items-center cursor-pointer text-muted hover:text-white">
                        <FaAlignJustify className="text-lg"></FaAlignJustify>
                    </div>
                </div>
            </div>

            <div className="flex-col p-6 w-1/2 gap-y-6 ml-36 ">
                {data?.items?.map(r => {
                    return <ResultCard url={r.link} title={r.title} description={r.snippet}></ResultCard>
                })}
            </div>
        </div>
    )
}
