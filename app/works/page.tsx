'use client'
import Container from "@/components/container";
import { HeaderTitle } from "../order/page";
import Link from "next/link";
import { MessageUs } from "@/components/messageUs";
import { useEffect, useState } from "react";

import { DataListe, ProjectProps} from '@/app/action/listeData'



export default function WorkPage(){
        const [liste, setListe] = useState<ProjectProps[]>([])

        useEffect(() => {
            (async () => {
                const data = await DataListe();
                setListe(data)
            })()
        }, [])
    return(
        <>
            <main className="bg-[#f9f9f9]">
                <section className="bg-radius pt-52 pb-12">
                    <Container>
                        <HeaderTitle title='our work' />
                    </Container>
                </section>
                <section>
                    <Container>
                        <div className="space-y-14 py-16">
                            {
                                liste.map((el,key) => <ProjectItem data={el} key={key} />)
                            }                           
                        </div>
                    </Container>
                </section>
                <MessageUs />
            </main>
        </>
    )
}

function ProjectItem({data} : { data : ProjectProps}){
    const description = `KONJI FARM est une société coopérative simplifiée qui a pour système de production l’aquaponie. "L’aquaponie est la fusion de 2 techniques, l’aquaculture et l’hydroponie, qui permet de faire vivre ensemble en parfaite harmonie des plantes et des animaux aquatiques dans un système fermé.`
    return(
        <Link href={data.url} className = 'flex gap-8 flex-col md:flex-row lg:flex-row px-6 md:px-6 lg:px-0'>
            <div className="w-full lg:w-[450px] h-[275px]">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex-1">
                <div className="flex items-start gap-6">
                    <div className="w-[100px] aspect-square bg-black flex items-center justify-center px-2">
                        <img src={data.logo} alt={data.name} />
                    </div>
                    <div className="flex-1 flex flex-col space-y-3">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold italic">{data.name}</div>
                        <a href={data.link} target='_blank'>{data.link_desc}</a>
                        <div className="font-bold mt-5 text-base md:text-lg lg:text-xl italic">{data.slogan}</div>
                    </div>
                </div>
                <div className="text-base md:text-lg font-medium mt-5 text-slate-700">
                    {`${data.description}...`}
                </div>
            </div>
        </Link>
    )
}