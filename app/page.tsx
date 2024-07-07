"use client"
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import { z } from "zod"
import {useRouter} from "next/navigation"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    id: z.string().min(2).max(6),
})


export default function Home() {

    let router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.push(`/${values.id}`)
    }


    return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Song id.</FormLabel>
                                    <FormControl>
                                        <Input placeholder="EG. wgurE" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        This is the song id.
                                    </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        <Button onClick={() => {router.push("/stats")}}>See stats</Button>
        </div>
    </main>
  );
}
