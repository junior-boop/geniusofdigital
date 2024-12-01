import Link from "next/link";
import Container from "./container";

export function MessageUs() {
    return (
      <div className="bg-radius px-4 lg:px-0 py-[50px] lg:py-10 ">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-center lg:justify-between ">
            <div className="text-[52px] text-center lg:text-left lg:text-[32px] uppercase font-bold text-white" style={{ lineHeight: 1 }}>leave us a message</div>
            <Link href={'/contact'} className="flex w-fit" >
              <div className="px-[18px] py-[10px] flex items-center text-white rounded-full font-semibold text-[20px] bg-[#fff2]">
                click here
              </div>
            </Link>
          </div>
  
        </Container>
      </div>
    )
  }