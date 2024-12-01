
import Container from "@/components/container";
import { HeaderTitle, Input } from "../order/page";
import Submit from "@/components/submit";

export default function Contact() {

    const formAction = async (formData: FormData) => {
        'use server'
        console.log(formData)
    }

    return (
        <>
            <main className="bg-[#f9f9f9]">
                <section className="bg-radius pt-52 pb-12">
                    <Container>
                        <HeaderTitle title='contact' />
                    </Container>
                </section>
                <section>
                    <Container >
                        <form action={formAction}>
                            <div className="pt-32 pb-9 lg:pt-32 lg:pb-32">
                                <div className="px-4 lg:px-9 flex flex-col gap-4">
                                    <Input name="name" label="Full Name" placeholder="your full name" type="text" required />
                                    <Input name="email" label="Email" placeholder="your email address" type="email" required />
                                    <Input name="country" label="Country" placeholder="your country" type="text" required />
                                    <Input name="company" label="Company (optionel)" placeholder="your company" type="text" />
                                    <Input name="message" label="Message" placeholder="Type your message" type="textarea" />
                                </div>
                            </div>
                            <div className="pt-6 px-4 lg:px-9 flex items-center gap-4 pb-14">
                                <div className="hidden lg:block lg:w-[300px]"></div>
                                <Submit />
                            </div>
                        </form>
                    </Container>
                </section>
            </main>
        </>
    )
}