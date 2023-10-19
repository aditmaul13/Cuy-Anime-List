import Link from "next/link"
import InputSearch from "./InputSearch"
import Image from "next/image"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-3">
                <div className="flex flex-row gap-3">
                    <Image src = "/logo.svg" width={32} height={32} alt=""/>
                    <Link href="/" className="font-bold text-2xl top-2 p-1">Cuy Anime List 🔥</Link> 
                 </div>
                <div >
                     <InputSearch/>
                </div>
            </div>
        </header>
    )
}

export default Navbar