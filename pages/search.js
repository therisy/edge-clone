import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import config from "../config";

export default function Search() {

    const CONTEXT_KEY = "2465c4ae21d4f1548";
    const [data, setData] = useState();
    const router = useRouter();

    useEffect(async () => {
        const fetchData = async (text) => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${config.apiKey}&cx=${CONTEXT_KEY}&q=${text}`
            )
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    setData(result);
                });
        };
        const { q } = router.query;

        await fetchData(q);
    }, []);

    if (!data) return <h1>Aranıyor.</h1>
    console.log(data)

    return (
        <h1>Yapım Aşamasında</h1>
    )
}
