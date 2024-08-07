"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"

export default function Home({ params }: any) {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetch(
      process.env.NEXT_PUBLIC_APIURL + `/api/fetch/${params.slug}`
    ).then((response) => {
      console.log(response.statusText)
      if(response.statusText != "OK") return setError(response.statusText);
      response.json().then((json) => {
        setData(json);
      })
    }).catch((error) => {
          console.log(error)
          setError(error)
    })
  }, []);

  if(error == "Not Found") {
      return(
        <div className="min-h-screen w-screen flex items-center justify-center flex-col gap-2">
          <p>The file you are looking for could not be found on our servers.</p>
          <p>If you have any proof of this file existance, please contact us at <a href="mailto:missing@picosong.site" className={"underline text-indigo-400 hover:text-indigo-600 duration-200"}>missing@picosong.site</a></p>
          <Button onClick={() => {router.push("/")}}>Go back</Button>
        </div>
      )
    }
  else if(error){
    return(
      <div className="min-h-screen w-screen flex items-center justify-center flex-col gap-2">
        <p>There seems to be some issues with our backend</p>
        <p>Check the server status at: <a href="https://status.picosong.site" className="underline text-indigo-400 hover:text-indigo-600 duration-200">status.picosong.site</a>!</p>
        <Button onClick={() => {router.push("/")}}>Go back</Button>
      </div>
    )
  }
  else{
    return (
      <div className="flex items-center justify-center min-h-screen flex-col gap-5">
        <div className="">
          <p>{data.data}</p>
        </div>
      </div>
    );
  }
}
