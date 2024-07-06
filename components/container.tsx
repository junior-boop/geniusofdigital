interface Container {
    children: React.ReactNode | JSX.Element | JSX.Element[] | string
}

export default function Container({ children }: Container) {
    return (
        <div className='w-full lg:w-[1080px] mx-auto'>
            {children}
        </div>
    )
}