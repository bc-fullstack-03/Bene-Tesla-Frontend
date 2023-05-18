import { HouseLine } from "phosphor-react"
import { TypeAnimation } from "react-type-animation"

const Notfoundpage = () => {

    return (
        <main className='bg-[#121214] min-h-screen flex flex-col justify-center items-center'>
            <TypeAnimation
                sequence={[
                    '@user:~$ cd /home',
                    1000,
                    'bash: 404: webpage not found'
                ]}
                wrapper="h1"
                cursor={true}
                repeat={2000}
                className="text-green-400  font-bold text-3xl"
            />
            <a href='/Home' className='text-green-400 mt-5  font-bold text-xl animate-pulse'>
                <HouseLine size={80} weight="fill" className="mt-6" />
            </a>
        </main>
    )
}

export default Notfoundpage
