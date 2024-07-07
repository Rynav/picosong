"use client";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {CartesianGrid, Line, LineChart, XAxis} from "recharts";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useRouter} from "next/navigation";

import "@/app/globals.css"
import {Button} from "@/components/ui/button";

let data = [
    {"date": "2014-01", "count": 43985},
    {"date": "2014-02", "count": 3847},
    {"date": "2014-03", "count": 3220},
    {"date": "2014-04", "count": 2644},
    {"date": "2014-05", "count": 2722},
    {"date": "2014-06", "count": 2454},
    {"date": "2014-07", "count": 2725},
    {"date": "2014-08", "count": 2697},
    {"date": "2014-09", "count": 3596},
    {"date": "2014-10", "count": 3441},
    {"date": "2014-11", "count": 4113},
    {"date": "2014-12", "count": 3431},
    {"date": "2015-01", "count": 4298},
    {"date": "2015-02", "count": 3796},
    {"date": "2015-03", "count": 5921},
    {"date": "2015-04", "count": 5945},
    {"date": "2015-05", "count": 6679},
    {"date": "2015-06", "count": 5199},
    {"date": "2015-07", "count": 5745},
    {"date": "2015-08", "count": 6494},
    {"date": "2015-09", "count": 6226},
    {"date": "2015-10", "count": 7083},
    {"date": "2015-11", "count": 6202},
    {"date": "2015-12", "count": 7903},
    {"date": "2016-01", "count": 6336},
    {"date": "2016-02", "count": 7900},
    {"date": "2016-03", "count": 7652},
    {"date": "2016-04", "count": 6039},
    {"date": "2016-05", "count": 7950},
    {"date": "2016-06", "count": 8260},
    {"date": "2016-07", "count": 7986},
    {"date": "2016-08", "count": 7087},
    {"date": "2016-09", "count": 7425},
    {"date": "2016-10", "count": 7034},
    {"date": "2016-11", "count": 5630},
    {"date": "2016-12", "count": 6219},
    {"date": "2017-01", "count": 6854},
    {"date": "2017-02", "count": 6389},
    {"date": "2017-03", "count": 6999},
    {"date": "2017-04", "count": 7366},
    {"date": "2017-05", "count": 8464},
    {"date": "2017-06", "count": 7451},
    {"date": "2017-07", "count": 8974},
    {"date": "2017-08", "count": 24750},
    {"date": "2017-09", "count": 32899},
    {"date": "2017-10", "count": 35829},
    {"date": "2017-11", "count": 35821},
    {"date": "2017-12", "count": 38028},
    {"date": "2018-01", "count": 44315},
    {"date": "2018-02", "count": 40592},
    {"date": "2018-03", "count": 45736},
    {"date": "2018-04", "count": 42179},
    {"date": "2018-05", "count": 44248},
    {"date": "2018-06", "count": 41106},
    {"date": "2018-07", "count": 44337},
    {"date": "2018-08", "count": 46601},
    {"date": "2018-09", "count": 43549},
    {"date": "2018-10", "count": 44583},
    {"date": "2018-11", "count": 47931},
    {"date": "2018-12", "count": 48596},
    {"date": "2019-01", "count": 53506},
    {"date": "2019-02", "count": 51790},
    {"date": "2019-03", "count": 58203},
    {"date": "2019-04", "count": 56840},
    {"date": "2019-05", "count": 60328},
    {"date": "2019-06", "count": 57537},
    {"date": "2019-07", "count": 42444},
    {"date": "2019-08", "count": 16}
]

const chartConfig = {
    count: {
        label: "Uploaded files:",
        color: "rgb(255,255,255)",
    },
} satisfies ChartConfig

export default function Home(){
    let router = useRouter();

    return(
        <div className={"flex items-center justify-center min-w-screen min-h-screen flex-col gap-5"}>
            <Card className={"w-[50%] h-fit"}>
                <CardHeader>
                    <CardTitle>Picosong file uploads</CardTitle>
                    <CardDescription>2014-2019</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={data}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 4)}
                            />
                            <ChartTooltip
                                cursor={true}
                                content={<ChartTooltipContent indicator={"dashed"}/>}
                            />
                            <Line
                                dataKey="count"
                                type="linear"
                                stroke="rgb(255,255,255)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Special thanks to the archive.org team for archiving all of this data. Without them this project wouldn't exits!
                    </div>
                </CardFooter>
            </Card>
            <Button onClick={() => {router.push("/")}}>Go back</Button>
        </div>
    )
}