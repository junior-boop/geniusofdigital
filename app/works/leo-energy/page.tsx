import PageBanniere from "@/components/page_Banniere";

import { DataListe } from "@/app/action/listeData";
import Container from "@/components/container";

export default function Pages(){
    const data = {
        name : 'Leo Energy',
        image : '/leo_energy.png',
        logo : '/logo_leo_white.png',
        link : 'https://leo-energy.com',
        slogan : 'Expertise et conseils sur mesure pour des économies concrètes',
        link_desc : 'https://leo-energy.com',
        url : "/works/leo-energy", 
        description : `Leo Energy, fondée par Lionel MFEGUE le 4 juin 2024 à Vienne, est un Bureau d’études spécialisé dans les audits énergétiques et les conseils en efficacité énergétique.`
    }

    const objectif = `L'objectif principal de notre travail était de concevoir et de développer un site web destiné à valoriser les services proposés par Leo-Energy, en mettant particulièrement en lumière son expertise dans le domaine des énergies renouvelables. De plus, il s'agissait également de promouvoir et de présenter de manière détaillée l'ensemble des activités de l'entreprise, afin de renforcer sa visibilité et d'attirer une clientèle ciblée.`
    return(
       <>
        <PageBanniere title={data.name} image={data.image} description={data.slogan} logo={data.logo} />
        <section className="py-[60px] lg:py-[120px]">
            <Container>
                <h1 className="text-2xl lg:text-4xl font-bold font-display text-center text-gray-800 mb-5 mt-2">Qui est Leo Energy?</h1>
                <div className="w-full md:max-w-[650px] mx-auto px-6 md:px-0 text-base lg:text-xl text-gray-800">
                Leo Energy, fondée par Lionel MFEGUE le 4 juin 2024 à Vienne, est un Bureau d’études spécialisé dans les audits énergétiques et les conseils en efficacité énergétique. Nous sommes engagés à aider nos clients à optimiser leur consommation énergétique et à se conformer aux normes réglementaires en vigueur. Notre expertise couvre un large éventail de services, allant des audits réglementaires basés sur le Diagnostic de Performance Énergétique (DPE) pour les maisons individuelles et les bâtiments tertiaires, à l’accompagnement dans la mise en œuvre des recommandations issues de ces audits.
                </div>
            </Container>
        </section>
        <section className="pb-[200px] lg:pb-[10%]">
            <Container>
                <div className="relative flex md:block justify-center">
                    <div className="w-full aspect-square lg:aspect-video">
                        <img src="/leo_energy_picture.jpg" className="w-full h-full object-cover"/>
                    </div>
                    <div className="absolute bottom-[-40%] lg:bottom-[-10%] lg:right-6 z-10 bg-white p-6 rounded-lg shadow-md w-[90%] lg:w-[400px]">
                        <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-800 italic mb-4 ">L{"'"}objectif de notre travail</h2>
                        <div>
                            {objectif}
                            <div className="mt-5">
                                <a href={data.link} className="font-bold text-[#483f04bb]">Visitez le site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
       </>
    )
}