'use server'

export interface ProjectProps {
    name : string,
    image : string,
    logo : string,
    link : string,
    slogan : string,
    link_desc : string,
    description : string,
    url : string
}

export async function DataListe(){
    const data : ProjectProps[] = [
        {
            name : 'Konji Farm',
            image : '/principe.jpg',
            logo : '/logo_black.png',
            link : 'https://teste-konji-farm.pages.dev',
            slogan : 'Une agriculture intégrée et intégrante !',
            link_desc : 'https://konji-farm.com',
            url : '/works/konji-farm',
            description : `KONJI FARM est une société coopérative simplifiée qui a pour système de production l’aquaponie. "L’aquaponie est la fusion de 2 techniques, l’aquaculture et l’hydroponie, qui permet de faire vivre ensemble en parfaite harmonie des plantes et des animaux aquatiques dans un système fermé.`
        }, 
        {
            name : 'Leo Energy',
            image : '/leo_energy.png',
            logo : '/logo_leo_white.png',
            link : 'https://leo-energy.com',
            slogan : 'Expertise et conseils sur mesure pour des économies concrètes',
            link_desc : 'https://leo-energy.com',
            url : "/works/leo-energy", 
            description : `Leo Energy, fondée par Lionel MFEGUE le 4 juin 2024 à Vienne, est un Bureau d’études spécialisé dans les audits énergétiques et les conseils en efficacité énergétique.`
        }, 
        {
            name : "L'impression 3D pour l'Éducation",
            image : '/i3de_image.jpg',
            logo : '/i3de_logo.png',
            link : 'https://www.i3deducation.com/',
            link_desc : 'https://www.i3deducation.com/',
            url : '/works/i3de',
            slogan : 'Une solution pratique, abordable et durable pour la professionnalisation des enseignements', 
            description : `I3DE est une initiative (CAYSTI & MANLAB) qui a pour vocation de créer une industrie locale qui renforce le capital humain et facilite l’accès à des outils (technologies et méthodes) innovants basés sur l’impression 3D au service des secteurs de l'éducation.`
        }, 
        {
            name : 'AAUPE',
            image : 'aaupe_image.webp',
            logo : 'aaupe_logo.webp',
            link : 'https://aaupe.org.ma',
            link_desc: 'https://aaupe.org.ma',
            url:'/works/aaupe',
            slogan : "Engagement permanent envers les droits des enfants et leurs familles",
            description : "Mettre fin au danger ou risque de danger en prenant les mesures nécessaires pour assurer à"
        }
    ]

    return data.reverse()
}