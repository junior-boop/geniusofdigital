import Container from "@/components/container";
import { MessageUs } from "../page";
import { HTMLInputTypeAttribute } from "react";
import FormItems_Autre from "@/components/formItems_Autre";
import { db } from '@/firebase'
import { setDoc, doc } from "firebase/firestore";
import Submit from "@/components/submit";

const teste: FormItems[] = [
    {
        title: "1)     What kind of site do you want?",
        data: [
            {
                label: "Showcase website",
                type: 'checkbox',
                name: 'kind_of_website'
            },
            {
                label: "Portfolio website",
                type: 'checkbox',
                name: 'kind_of_website'
            },
            {
                label: "E–commerce website",
                type: 'checkbox',
                name: 'kind_of_website'
            },
            {
                label: "Others",
                type: 'autre',
                name: 'kind_of_website'
            },
        ]
    },
    {
        title: "2) What is the purpose of your site?",
        data: [
            {
                type: 'textarea',
                placeholder: 'Type here',
                name: 'purpose_website'
            }
        ]
    },
    {
        title: "3) Do you know your project’s competitors?",
        data: [
            {
                label: 'No',
                type: "checkbox",
                name: 'competitors'
            },
            {
                label: "Yes",
                type: 'autre',
                name: 'competitors',
                placeholder: "List here the competing projects"
            }
        ]
    },
    {
        title: "4) What is the target of your website?",
        data: [
            {
                type: "textarea",
                name: 'target_website',
                placeholder: 'Type here'
            }
        ]
    },
    {
        title: "5) Do you have a graphic chart?",
        data: [
            {
                type: 'checkbox',
                label: "Yes",
                name: 'graphic_chart'
            }, {
                label: "No",
                type: 'autre',
                name: 'graphic_chart'
            }
        ]
    },
    {
        title: "6) What do you want for the design of your website?",
        data: [
            {
                type: 'checkbox',
                label: "Draw a custom pattern",
                name: 'design_of_website'
            }, {
                label: "Complete existing design",
                type: 'checkbox',
                name: 'design_of_website'
            }, {
                label: "Get inspiration from an existing website",
                type: 'autre',
                name: 'design_of_website',
                placeholder: 'Type here'
            }
        ]
    },
    {
        title: "7) Choose the features of your website",
        data: [
            {
                type: 'checkbox',
                label: "A news area (e.g.: blog post)",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "A search engine",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "An agenda",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "A newsletter",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "A page of events",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "A directory",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "An auto-responder",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "Google map",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "A discussion forum",
                name: 'website_features'
            },
            {
                type: 'checkbox',
                label: "A photo gallery",
                name: 'website_features'
            },

            {
                type: 'checkbox',
                label: "A video gallery",
                name: 'website_features'
            }, {
                label: "Others",
                type: 'autre',
                name: 'website_features',
                placeholder: 'Type here'
            }
        ]
    },
    {
        title: "8) Do you have a domain name?",
        data: [
            {
                placeholder: "A domain name is an address, a name that makes it easy to find your website.<strong> Example: www.monnom.com.</strong>",
                type: 'description'
            }, {
                label: "Yes",
                type: 'checkbox',
                name: 'domain_name',
            }
            , {
                label: "No",
                type: 'autre',
                name: 'domain_name',
                placeholder: 'Enter the name you want to have here'
            },
        ]
    },
    {
        title: "9) Do you need community management support?",
        data: [
            {
                label: "Yes",
                type: 'checkbox',
                name: 'community_manager',
            }
            , {
                label: "No",
                type: 'checkbox',
                name: 'community_manager',
            },
        ]
    },
    {
        title: "10) Give us a complete description of your project (missions, objectifs, valeurs, les onglets principaux que vous souhaitez, etc.)",
        data: [
            {
                type: 'textarea',
                placeholder: 'Type here',
                name: 'project_description'
            }
        ]
    },

]

export default function OrderPage() {

    const formAction = async (formData: FormData) => {
        'use server'

        const client = {
            name: formData.get('name'),
            email: formData.get('email'),
            country: formData.get('country'),
            company: formData.get('company')
        }
        const formulaire = {
            name: formData.get('name'),
            email: formData.get('email'),
            country: formData.get('country'),
            company: formData.get('company'),
            kind_of_website: formData.getAll('kind_of_website'),
            purpose_website: formData.get('purpose_website'),
            competitors: formData.get('competitors'),
            target_website: formData.get('target_website'),
            graphic_chart: formData.get('graphic_chart'),
            design_of_website: formData.get('design_of_website'),
            website_features: formData.getAll('website_features'),
            domain_name: formData.get('domain_name'),
            community_manager: formData.get('community_manager'),
            project_description: formData.get('project_description')
        }

        const orderref = doc(db, 'orders', `order-${Date.now()}`)
        const clientref = doc(db, 'clients', `client-${Date.now()}`)
        await setDoc(orderref, formulaire)
        await setDoc(clientref, client)

    }

    return (
        <>
            <main className="bg-[#f9f9f9]">
                <section className="bg-radius pt-52 pb-12">
                    <Container>
                        <HeaderTitle title='place your order' />
                    </Container>
                </section>
                <section>
                    <Container >

                        <form action={formAction}>
                            <div className="pt-32 pb-9 lg:pt-32 lg:pb-32">
                                <div className="px-4 lg:px-9 flex flex-col gap-4">
                                    <Input name="name" label="Full Name" placeholder="your full name" type="text" required />
                                    <Input name="email" label="Email" placeholder="your email adress" type="email" required />
                                    <Input name="country" label="Country" placeholder="your country" type="text" required />
                                    <Input name="company" label="Company (optionel)" placeholder="your company" type="text" />
                                </div>
                            </div>
                            <div>
                                {
                                    teste.map((el, key) => <FormItems title={el.title} data={el.data} key={key} />)
                                }
                            </div>
                            <div className=" px-4 lg:px-0 pb-9 lg:pb-6 lg:pt-6 ">
                                <Submit />
                            </div>
                        </form>
                    </Container>
                </section>
                <MessageUs />
            </main>
        </>
    )
}

interface headerTitle {
    title: string
}

export function HeaderTitle({ title }: headerTitle) {
    return <div className="text-5xl lg:text-[64px] italic font-display text-white px-4 lg:px-0">{title}</div>
}


interface Input {
    label: string,
    name: string,
    placeholder?: string,
    type: HTMLInputTypeAttribute | 'textarea',
    required?: boolean

}

export function Input({ label, name, placeholder, type, required = false }: Input) {
    return (
        <div className="flex gap-1 lg:gap-4 items-start flex-col flex-grow lg:flex-row">
            <label className="w-[300px] font-bold text-[18px] lg:text-[24px] lg:pt-2 text-gray-800" htmlFor={name}>{label}</label>
            {
                type === 'textarea'
                    ? <textarea className="flex-1 border p-4 w-full  font-medium h-[250px] focus:bg-slate-100 outline-none text-base lg:text-xl text-gray-800" name={name} placeholder={placeholder} required={required} />
                    : <input className="flex-1 border px-4 py-2 lg:py-0 w-full font-medium text-base lg:text-xl  lg:h-[50px] focus:bg-slate-100 outline-none text-gray-800" name={name} type={type} placeholder={placeholder} required={required} />
            }
        </div>
    )
}

type type = 'description' | 'autre' | 'textarea' | HTMLInputTypeAttribute;

export interface DynamicInput {
    label?: string,
    name?: string,
    placeholder?: string,
    type: type;
    required?: boolean
}

function DynamicInput({ label, name, placeholder, type, required }: DynamicInput) {

    switch (type) {
        case "checkbox":
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <input type={type} className=" w-[16px] lg:w-[20px] aspect-square absolute left-0 lg:left-[7px] border bg-slate-300text-gray-800" value={label} name={name} />
                    <label htmlFor={name} className="text-base lg:text-xl text-gray-800">{label}</label>
                </div>
            )
        case "radio":
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <input type={type} className=" w-[16px] lg:w-[20px] aspect-square absolute left-[7px] border bg-slate-300 text-gray-800" name={name} value={label} />
                    <label htmlFor={name} className="text-base lg:text-xl text-gray-800">{label}</label>
                </div>
            )
        case "autre":
            return <FormItems_Autre name={name} label={label} placeholder={placeholder} type="checkbox" />
        case "textarea":
            return (
                <div className="flex items-center relative px-0 lg:px-[55px] my-4">
                    <textarea className=" w-full lg:w-[92%] h flex-1 border p-4 font-medium text-base lg:text-xl h-[200px] focus:bg-slate-100 outline-none text-gray-800" placeholder={placeholder} name={name} ></textarea>
                </div>
            )
        case 'text':
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <input name={name} type="text" className="flex-1 border px-4 font-medium text-base lg:text-xl h-[50px] focus:bg-slate-100 outline-none w-[90%] text-gray-800" placeholder={placeholder} />
                </div>
            )
        case 'description':
            return (
                <div className="flex items-center relative px-[34px] lg:px-[55px] my-4">
                    <div className="w-[100%]  italic text-gray-800">{placeholder}</div>
                </div>
            )
    }
}


interface FormItems {
    title: string,
    data: DynamicInput[]
}



function FormItems({ data, title }: FormItems) {

    return (
        <div className="px-4 lg:px-9 border py-4 lg:py-9 mb-6 bg-white transition-all ease-in-out duration-300">
            <div className="font-bold text-lg lg:text-2xl text-gray-800" dangerouslySetInnerHTML={{ __html: title }}></div>
            {
                data.map((el, key) => <DynamicInput label={el.label} type={el.type} name={el.name} placeholder={el.placeholder} required={el.required} key={key} />)
            }
        </div>
    )
}