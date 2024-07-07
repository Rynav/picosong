"use client"

import {useEffect, useState} from "react";

export default function Home({params}: any) {

    const [data, setData] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`http://localhost:7979/api/v1/song/${params.slug}`)
            const jsonData = await data.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    return(
        <div className="flex items-center justify-center min-h-screen flex-col gap-5">
            <p>{data.filename}</p>
            <audio src={data.link} controls></audio>
        </div>
    )
}