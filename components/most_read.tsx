import Image from "next/image";
import Link from "next/link";

interface MostRead {
    image: string;
    name: string;
    logo: string
}


export default function MostRead({ image, name, logo }: MostRead) {
    return (
        <Link href={'/'}>
            <div className=" w-[350px] lg:w-[500px] aspect-square bg-no-repeat bg-cover overflow-hidden" style={{ backgroundImage: `url(${image})`, scrollSnapAlign: "center" }}>
                <div className="w-full h-full bg-[#0004] p-4 lg:p-9 flex flex-col justify-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="h-[62px] aspect-square rounded-full bg relative">
                                <Image src={logo} alt="" fill />
                            </div>
                            <div className="font-poppins font-semibold text-white text-2xl">
                                {name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}